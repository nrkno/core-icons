import { inspect, styleText } from 'node:util'
import { program } from 'commander'
import { syncCompatCommand } from './commands/sync-compat.ts'
import { syncCommand } from './commands/sync.ts'

program
  .name('core-icons')
  .description('NRK Core Icons')
  .configureHelp({
    styleTitle: (str) => styleText('bold', str),
    styleCommandText: (str) => styleText('cyan', str),
    styleCommandDescription: (str) => styleText(['magenta', 'italic'], str),
    styleDescriptionText: (str) => styleText('italic', str),
    styleOptionText: (str) => styleText('green', str),
    styleArgumentText: (str) => styleText('yellow', str),
    styleSubcommandText: (str) => styleText('blue', str),
  })
  .addCommand(syncCommand)
  .addCommand(syncCompatCommand)

try {
  program.parse()
} catch (err) {
  printError(err)
  process.exit(1)
}

function printError(error: unknown): void {
  const label = styleText(['red', 'bold'], 'Error:')
  const message =
    error instanceof Error
      ? styleText('red', error.message)
      : inspect(error, { colors: true, depth: 5, breakLength: 80, compact: false })

  const details = error instanceof Error && error.stack ? `\n${styleText('dim', error.stack)}` : ''

  process.stderr.write(`${label} ${message}${details}\n`)
}
