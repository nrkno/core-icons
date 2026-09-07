import { describe, test, expect } from 'vitest'
import { dedent } from '#utils/string.ts'
import { optimizeLogo, isMonochrome, toAndroidVectorXml } from '#utils/svg.ts'

describe('toAndroidVectorXml', () => {
  test('simple path', async () => {
    const input = dedent /* xml */ `
      <svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 2L2 22h20L12 2z"/>
      </svg>
    `
    const expected = dedent /* xml */ `
      <vector
        xmlns:android="http://schemas.android.com/apk/res/android"
        android:width="24dp"
        android:height="24dp"
        android:viewportWidth="24"
        android:viewportHeight="24"
      >
        <path
          android:fillColor="#fff0f0f0"
          android:pathData="M12 2L2 22h20L12 2z"
        />
      </vector>
    `
    expect(await toAndroidVectorXml(input)).toEqual(expected)
  })

  test('sets default fill color when fill is not set on path', async () => {
    const input = dedent /* xml */ `
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 22h20L12 2z"/>
      </svg>
    `
    const expected = dedent /* xml */ `
      <vector
        xmlns:android="http://schemas.android.com/apk/res/android"
        android:width="24dp"
        android:height="24dp"
        android:viewportWidth="24"
        android:viewportHeight="24"
      >
        <path
          android:fillColor="#fff0f0f0"
          android:pathData="M12 2L2 22h20L12 2z"
        />
      </vector>
    `
    expect(await toAndroidVectorXml(input)).toEqual(expected)
  })

  test('keeps fill attribute when !== `currentColor`', async () => {
    const input = dedent /* xml */ `
      <svg viewBox="0 0 24 24">
        <path fill="#ff5d46" d="M12 2L2 22h20L12 2z"/>
      </svg>
    `
    const expected = dedent /* xml */ `
      <vector
        xmlns:android="http://schemas.android.com/apk/res/android"
        android:width="24dp"
        android:height="24dp"
        android:viewportWidth="24"
        android:viewportHeight="24"
      >
        <path
          android:fillColor="#ff5d46"
          android:pathData="M12 2L2 22h20L12 2z"
        />
      </vector>
    `
    expect(await toAndroidVectorXml(input)).toEqual(expected)
  })

  test('transforms opacity attribute', async () => {
    const input = dedent /* xml */ `
      <svg viewBox="0 0 24 24">
        <path fill="currentColor" opacity=".5" d="M12 2L2 22h20L12 2z"/>
      </svg>
    `
    const expected = dedent /* xml */ `
      <vector
        xmlns:android="http://schemas.android.com/apk/res/android"
        android:width="24dp"
        android:height="24dp"
        android:viewportWidth="24"
        android:viewportHeight="24"
      >
        <path
          android:fillAlpha=".5"
          android:fillColor="#fff0f0f0"
          android:pathData="M12 2L2 22h20L12 2z"
        />
      </vector>
    `
    expect(await toAndroidVectorXml(input)).toEqual(expected)
  })

  test('transforms fill-rule attribute', async () => {
    const input = dedent /* xml */ `
      <svg viewBox="0 0 24 24">
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M12 2L2 22h20L12 2z"
        />
      </svg>
    `
    const expected = dedent /* xml */ `
      <vector
        xmlns:android="http://schemas.android.com/apk/res/android"
        android:width="24dp"
        android:height="24dp"
        android:viewportWidth="24"
        android:viewportHeight="24"
      >
        <path
          android:fillColor="#fff0f0f0"
          android:fillType="evenOdd"
          android:pathData="M12 2L2 22h20L12 2z"
        />
      </vector>
    `
    expect(await toAndroidVectorXml(input)).toEqual(expected)
  })

  test('keeps fill attribute on svg element', async () => {
    const input = dedent /* xml */ `
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 22h20L12 2z" />
        <path d="M12 2L2 22h20L12 2z" />
      </svg>
    `
    const expected = dedent /* xml */ `
      <vector
        xmlns:android="http://schemas.android.com/apk/res/android"
        android:width="24dp"
        android:height="24dp"
        android:viewportWidth="24"
        android:viewportHeight="24"
      >
        <path
          android:fillColor="#fff0f0f0"
          android:pathData="M12 2L2 22h20L12 2z"
        />

        <path
          android:fillColor="#fff0f0f0"
          android:pathData="M12 2L2 22h20L12 2z"
        />
      </vector>
    `
    expect(await toAndroidVectorXml(input)).toEqual(expected)
  })
})

describe('optimizeLogo', () => {
  test('keeps fill colors', async () => {
    const input = dedent /* xml */ `
      <svg viewBox="0 0 24 24">
        <path fill="#ff5d46" d="M12 2L2 22h20L12 2z"/>
      </svg>
    `
    const expected = dedent /* xml */ `
      <svg viewBox="0 0 24 24">
        <path
          fill="#ff5d46"
          d="M12 2 2 22h20z"
        />
      </svg>
    `
    expect(await optimizeLogo(input)).toEqual(expected)
  })

  test('opts.monochrome adds fill="currentColor" to svg element and removes path fills', async () => {
    const input = dedent /* xml */ `
      <svg viewBox="0 0 24 24">
        <path fill="#fff" d="M12 2L2 22h20L12 2z"/>
        <path fill="#fff" d="M12 2L2 22h20L12 2z"/>
      </svg>
    `
    const expected = dedent /* xml */ `
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2 2 22h20z" />

        <path d="M12 2 2 22h20z" />
      </svg>
    `
    expect(await optimizeLogo(input, { monochrome: true })).toEqual(expected)
  })
})

describe('isMonochrome', () => {
  test('icons are always monochrome', () => {
    expect(isMonochrome({ kind: 'icon', name: 'foo' })).toBe(true)
  })

  test('logos with `-on-dark` suffixes are not monochrome', () => {
    expect(
      isMonochrome({
        kind: 'logo' as const,
        name: 'nrk-1-on-dark',
      }),
    ).toBe(false)
  })

  test('logos with `-on-dark-large` suffixes are not monochrome', () => {
    expect(
      isMonochrome({
        kind: 'logo' as const,
        name: 'nrk-1-on-dark-large',
      }),
    ).toBe(false)
  })

  test('logos with `-on-light` suffixes are not monochrome', () => {
    expect(
      isMonochrome({
        kind: 'logo' as const,
        name: 'nrk-1-on-light',
      }),
    ).toBe(false)
  })

  test('logos with `-on-light-large` suffixes are not monochrome', () => {
    expect(
      isMonochrome({
        kind: 'logo' as const,
        name: 'nrk-1-on-light-large',
      }),
    ).toBe(false)
  })

  test('logos with `-with-bg` suffixes are not monochrome', () => {
    expect(
      isMonochrome({
        kind: 'logo' as const,
        name: 'nrk-1-with-bg',
      }),
    ).toBe(false)
  })

  test('logos with `-with-bg-large` suffixes are not monochrome', () => {
    expect(
      isMonochrome({
        kind: 'logo' as const,
        name: 'nrk-1-with-bg-large',
      }),
    ).toBe(false)
  })

  test('logos with `-color` suffixes are not monochrome', () => {
    expect(
      isMonochrome({
        kind: 'logo' as const,
        name: 'yr-color',
      }),
    ).toBe(false)
  })

  test('logos with `-color-large` suffixes are not monochrome', () => {
    expect(
      isMonochrome({
        kind: 'logo' as const,
        name: 'yr-color-large',
      }),
    ).toBe(false)
  })

  test('logos with `-blackwhite` suffixes are not monochrome', () => {
    expect(
      isMonochrome({
        kind: 'logo' as const,
        name: 'yr-blackwhite',
      }),
    ).toBe(false)
  })

  test('logos with `-blackwhite-large` suffixes are not monochrome', () => {
    expect(
      isMonochrome({
        kind: 'logo' as const,
        name: 'yr-blackwhite-large',
      }),
    ).toBe(false)
  })

  test('logos without suffixes are monochrome', () => {
    expect(
      isMonochrome({
        kind: 'logo' as const,
        name: 'nrk-1',
      }),
    ).toBe(true)
  })

  test('logos with only `-large` suffixes are monochrome', () => {
    expect(
      isMonochrome({
        kind: 'logo' as const,
        name: 'nrk-1-large',
      }),
    ).toBe(true)
  })
})
