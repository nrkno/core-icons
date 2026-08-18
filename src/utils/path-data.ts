/**
 * SVG path-data fixups needed for Android VectorDrawable.
 *
 * Android's own VectorDrawable renderer follows the SVG spec, but Jetpack Compose parses
 * `android:pathData` with `androidx.compose.ui.graphics.vector.PathParser`, which mishandles a
 * *relative* moveto that directly follows a closepath.
 *
 * Per the SVG spec the current point after `z` is the **start of the sub-path that was just
 * closed**, so a following `m dx dy` is relative to that point. Compose's parser keeps its own
 * `currentX/currentY` correct on `Close`, but emits `target.relativeMoveTo(dx, dy)` without
 * repositioning the backing path, so the moveto is applied relative to the last *drawn* point
 * instead. Every sub-path after the first is then displaced, and the error accumulates.
 *
 * Icons render correctly through an ImageView and in SVG, and only break in Compose — which is
 * where these drawables are actually consumed.
 *
 * The fix is to emit an equivalent absolute `M` for those movetos, which both parsers agree on.
 * Only the offending command is rewritten; the rest of the path string is left byte-identical so
 * regenerated drawables stay diff-friendly.
 */

const NUMBER = String.raw`[+-]?(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?`
const TOKEN = new RegExp(String.raw`([MmLlHhVvCcSsQqTtAaZz])|(${NUMBER})`, 'g')

/** Argument count per command, used to split a command's numbers into coordinate sets. */
const ARITY: Record<string, number> = {
  M: 2,
  L: 2,
  H: 1,
  V: 1,
  C: 6,
  S: 4,
  Q: 4,
  T: 2,
  A: 7,
  Z: 0,
}

type Command = {
  /** Command letter as written, e.g. `m` or `M`. */
  op: string
  /** Numeric arguments, flattened. */
  args: number[]
  /** Offset of the command letter in the source string. */
  start: number
  /** Offset just past the command's last argument. */
  end: number
  /** Offset of the first character of `args[0]`, or `end` when there are no arguments. */
  argsStart: number
  /** Offset just past `args[1]`, i.e. the end of the first coordinate pair. */
  firstPairEnd: number
}

function tokenize(d: string): Command[] {
  const commands: Command[] = []
  let current: Command | null = null

  TOKEN.lastIndex = 0
  let match: RegExpExecArray | null
  while ((match = TOKEN.exec(d)) !== null) {
    if (match[1]) {
      current = {
        op: match[1],
        args: [],
        start: match.index,
        end: match.index + match[1].length,
        argsStart: match.index + match[1].length,
        firstPairEnd: match.index + match[1].length,
      }
      commands.push(current)
    } else if (current) {
      if (current.args.length === 0) current.argsStart = match.index
      current.args.push(Number(match[2]))
      current.end = match.index + match[2]!.length
      if (current.args.length <= 2) current.firstPairEnd = current.end
    }
  }
  return commands
}

/** Formats a number the way svgo does: trim trailing zeros and a redundant leading zero. */
function formatNumber(value: number): string {
  let out = Number(value.toFixed(4)).toString()
  if (out.startsWith('0.')) out = out.slice(1)
  else if (out.startsWith('-0.')) out = `-${out.slice(2)}`
  return out
}

/**
 * Rewrites relative movetos that directly follow a closepath into absolute movetos.
 * Returns the path unchanged when there is nothing to fix.
 */
export function normalizePathData(d: string): string {
  const commands = tokenize(d)
  const edits: { start: number; end: number; text: string }[] = []

  let x = 0
  let y = 0
  let subPathX = 0
  let subPathY = 0

  for (const [index, command] of commands.entries()) {
    const { op, args } = command
    const upper = op.toUpperCase()
    const relative = op !== upper

    if (upper === 'Z') {
      x = subPathX
      y = subPathY
      continue
    }

    const previous = commands[index - 1]
    const followsClose = previous !== undefined && previous.op.toUpperCase() === 'Z'

    if (upper === 'M' && relative && followsClose && args.length >= 2) {
      // `m dx dy` here is relative to the start of the sub-path the `z` just closed.
      const absoluteX = subPathX + args[0]!
      const absoluteY = subPathY + args[1]!
      const separator = absoluteY < 0 ? '' : ' '
      // Any further coordinate pairs on an `m` are implicit relative linetos, so they need an
      // explicit `l` once the moveto itself becomes absolute.
      const trailing = args.length > 2 ? 'l' : ''
      edits.push({
        start: command.start,
        end: command.firstPairEnd,
        text: `M${formatNumber(absoluteX)}${separator}${formatNumber(absoluteY)}${trailing}`,
      })

      x = absoluteX
      y = absoluteY
      subPathX = absoluteX
      subPathY = absoluteY
      for (let i = 2; i + 1 < args.length; i += 2) {
        x += args[i]!
        y += args[i + 1]!
      }
      continue
    }

    // Advance the current point without altering the command.
    const arity = ARITY[upper] ?? 0
    if (arity === 0) continue
    for (let i = 0; i + arity <= args.length; i += arity) {
      const set = args.slice(i, i + arity)
      switch (upper) {
        case 'M':
          x = relative ? x + set[0]! : set[0]!
          y = relative ? y + set[1]! : set[1]!
          if (i === 0) {
            subPathX = x
            subPathY = y
          }
          break
        case 'L':
        case 'T':
          x = relative ? x + set[0]! : set[0]!
          y = relative ? y + set[1]! : set[1]!
          break
        case 'H':
          x = relative ? x + set[0]! : set[0]!
          break
        case 'V':
          y = relative ? y + set[0]! : set[0]!
          break
        case 'C':
          x = relative ? x + set[4]! : set[4]!
          y = relative ? y + set[5]! : set[5]!
          break
        case 'S':
        case 'Q':
          x = relative ? x + set[2]! : set[2]!
          y = relative ? y + set[3]! : set[3]!
          break
        case 'A':
          x = relative ? x + set[5]! : set[5]!
          y = relative ? y + set[6]! : set[6]!
          break
      }
    }
  }

  if (edits.length === 0) return d

  let out = ''
  let cursor = 0
  for (const edit of edits) {
    out += d.slice(cursor, edit.start) + edit.text
    cursor = edit.end
  }
  return out + d.slice(cursor)
}
