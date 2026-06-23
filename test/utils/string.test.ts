import { describe, test, expect } from 'vitest'
import { toCamelCase, toSnakeCase } from '#utils/string.ts'

describe('toCamelCase', () => {
  test('single hyphen', () => {
    expect(toCamelCase(`foo-bar`)).toEqual('fooBar')
  })
  test('multiple hyphens', () => {
    expect(toCamelCase(`foo-bar-baz`)).toEqual('fooBarBaz')
  })
  test('consecutive hyphens', () => {
    expect(toCamelCase(`foo--bar`)).toEqual('fooBar')
  })
  test('numbers following hyphens', () => {
    expect(toCamelCase(`rotate-360`)).toEqual('rotate360')
  })
})

describe('toSnakeCase', () => {
  test('kebab-case', () => {
    expect(toSnakeCase(`foo-bar`)).toEqual('foo_bar')
  })
  test('camelCase', () => {
    expect(toSnakeCase(`fooBar`)).toEqual('foo_bar')
  })
  test('PascalCase', () => {
    expect(toSnakeCase(`FooBar`)).toEqual('foo_bar')
  })
})
