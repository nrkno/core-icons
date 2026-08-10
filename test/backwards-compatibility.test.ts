// TODO delete these tests when `next` is merged
import { expect, test } from 'vitest'
import * as jsx from '#lib/compat/compat-jsx-effective.tsx'
import * as jsxExpressive from '#lib/compat/compat-jsx-expressive.tsx'
import * as jsxLogoLarge from '#lib/compat/compat-jsx-logo-large.tsx'
import * as jsxLogo from '#lib/compat/compat-jsx-logo.tsx'
import * as logoLarge from '#lib/compat/compat-logo-large.ts'
import * as effective from '#lib/effective.ts'
import * as expressive from '#lib/expressive.ts'
import * as logo from '#lib/logo.ts'
import compat from '#utils/backwards-compatibility.ts'

test.each(compat.effective)('@nrk/core-icons %s', (icon) => {
  // @ts-ignore
  // oxlint-disable-next-line import/namespace
  expect(effective[icon]).toBeDefined()
})
test.each(compat.expressive)('@nrk/core-icons/expressive %s', (icon) => {
  // @ts-ignore
  // oxlint-disable-next-line import/namespace
  expect(expressive[icon]).toBeDefined()
})

test.each(compat.logo)('@nrk/core-icons/logo %s', (icon) => {
  // @ts-ignore
  // oxlint-disable-next-line import/namespace
  expect(logo[icon]).toBeDefined()
})
test.each(compat.logoLarge)('@nrk/core-icons/logo/large %s', (icon) => {
  // @ts-ignore
  // oxlint-disable-next-line import/namespace
  expect(logoLarge[icon]).toBeDefined()
})

test.each(compat.jsxEffective)('@nrk/core-icons/jsx %s', (icon) => {
  // @ts-ignore
  // oxlint-disable-next-line import/namespace
  expect(jsx[icon]).toBeDefined()
})
test.each(compat.jsxExpressive)('@nrk/core-icons/jsx/expressive %s', (icon) => {
  // @ts-ignore
  // oxlint-disable-next-line import/namespace
  expect(jsxExpressive[icon]).toBeDefined()
})
test.each(compat.jsxLogo)('@nrk/core-icons/jsx/logo %s', (icon) => {
  // @ts-ignore
  // oxlint-disable-next-line import/namespace
  expect(jsxLogo[icon]).toBeDefined()
})
test.each(compat.jsxLogoLarge)('@nrk/core-icons/jsx/logo/large %s', (icon) => {
  // @ts-ignore
  // oxlint-disable-next-line import/namespace
  expect(jsxLogoLarge[icon]).toBeDefined()
})
