/* eslint-env jest */
// import React from 'react'
// import ReactDOM from 'react-dom'
import { parseNumericInput, validInteger, getCountryName } from './'

describe('parseNumericInput', () => {
  test('handle regular numbers', () => {
    expect(parseNumericInput('22')).toBe(22)
  })

  test('handle strings with numbers in them', () => {
    expect(parseNumericInput('22test5')).toBe(22)
  })

  test('handle strings with letter "e"', () => {
    expect(parseNumericInput('22e5')).toBe(22)
  })

  test('handle pasted number with decimals', () => {
    expect(parseNumericInput('1234.56')).toBe(1234.56)
  })

  test('handle pasted number with commas', () => {
    expect(parseNumericInput('123,456')).toBe(123456)
    expect(parseNumericInput('123,456,789')).toBe(123456789)
  })

  test('handle pasted number with commas and decimals', () => {
    expect(parseNumericInput('123,456.78')).toBe(123456.78)
  })

})

describe('validation', () => {
  test('validInteger', () => {
    expect(validInteger(1234)).toBe(true)
    expect(validInteger(1234.3)).toBe(false)
    expect(validInteger('1234')).toBe(false)
  })
})

test('getCountryName', () => {
  expect(getCountryName('XKX')).toBe('Kosovo')
})
