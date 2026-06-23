import { describe, test, expect } from 'vitest'
import { dedent } from '#utils/string.ts'
import { toAndroidVectorXml } from '#utils/svg.ts'

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
