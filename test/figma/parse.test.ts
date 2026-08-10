import { test, expect } from 'vitest'
import { findListSection, findSection } from '#cli/figma/parse.ts'
import { dedent } from '#utils/string.ts'

const description = dedent`
  ## Tidligere navn
  nrk-hardware-radio--active
  nrk-hardware-radio-active

  ## Beskrivelse av funksjon
  Uthevet eller aktiv inngang til direkteradio

  ## Alias
  radioapparat, radio, lyd,
  radio

  ## Aria-label
  radio
`

test('findSection', () => {
  expect(findSection(description, 'Beskrivelse av funksjon')).toEqual(
    'Uthevet eller aktiv inngang til direkteradio',
  )

  expect(findSection(description, 'Aria-label')).toEqual('radio')
})

test('findListSection', () => {
  expect(findListSection(description, 'Alias')).toEqual(['radioapparat', 'radio', 'lyd', 'radio'])
  expect(findListSection(description, 'Tidligere navn')).toEqual([
    'nrk-hardware-radio--active',
    'nrk-hardware-radio-active',
  ])
})
