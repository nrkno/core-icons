export function sortObjectKeys<T>(obj: T): T {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => sortObjectKeys(item)) as T
  }

  const sortedKeys = Object.keys(obj).sort()

  return Object.fromEntries(
    sortedKeys.map((key) => [key, sortObjectKeys((obj as Record<string, unknown>)[key])]),
  ) as T
}
