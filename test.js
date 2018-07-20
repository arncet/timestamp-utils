import test from 'ava'
import { initArray, addOneMonth, decompose, getYear,
  getMonth, getDay, getHours, getMinutes, getSeconds,
  getMilliseconds, addDays, addMonths, addYears, add,
  addHours, addMinutes, addSeconds, addMilliseconds } from './src'

// Init an array with length of 3
test('initArray', t => {
  const array = initArray(3)
  t.is(array.length, 3)
})

// 09 October 1992 -> 09 November 1992
test('addOneMonth', t => {
  const timestamp = addOneMonth(718588800000)
  t.is(timestamp, 721267200000)
})

// Decompose 09 October 1992 at 2:30 AM
test('decompose', t => {
  const details = decompose(718597800000)
  t.is(details.length, 7)
  t.deepEqual(details, ['1992', '10', '09', '02', '30', '00', '000'])
})

// Get year of Decompose 09 October 1992
test('getYear', t => {
  const year = getYear(718588800000)
  t.is(year, '1992')
})

// Get month of Decompose 09 October 1992
test('getMonth', t => {
  const month = getMonth(718588800000)
  t.is(month, '10')
})

// Get day of Decompose 09 October 1992
test('getDay', t => {
  const day = getDay(718588800000)
  t.is(day, '09')
})

// Get hours of Decompose 09 October 1992 at 2:30 AM
test('getHours', t => {
  const hours = getHours(718597800000)
  t.is(hours, '02')
})

// Get minutes of Decompose 09 October 1992 at 2:30 AM
test('getMinutes', t => {
  const minutes = getMinutes(718597800000)
  t.is(minutes, '30')
})

// Get seconds of Decompose 09 October 1992 at 2:30:14:300 AM
test('getSeconds', t => {
  const seconds = getSeconds(718597814300)
  t.is(seconds, '14')
})

// Get milliseconds of Decompose 09 October 1992 at 2:30:14:300 AM
test('getMilliseconds', t => {
  const milliseconds = getMilliseconds(718597814300)
  t.is(milliseconds, '300')
})

// Add 3 days to Decompose 09 October 1992
test('addDays (positive)', t => {
  const timestamp = addDays(718588800000, 3)
  t.is(timestamp, 718848000000)
})

// Subtract 3 days to Decompose 09 October 1992
test('addDays (negative)', t => {
  const timestamp = addDays(718588800000, -3)
  t.is(timestamp, 718329600000)
})

// Add 3 months to Decompose 09 October 1992
test('addMonths (positive)', t => {
  const timestamp = addMonths(718588800000, 3)
  t.is(timestamp, 726537600000)
})

// Subtract 3 months to Decompose 09 October 1992
test('addMonths (negative)', t => {
  const timestamp = addMonths(718588800000, -3)
  t.is(timestamp, 710640000000)
})

// Add 3 years to Decompose 09 October 1992
test('addYears (positive)', t => {
  const timestamp = addYears(718588800000, 3)
  t.is(timestamp, 813196800000)
})

// Subtract 3 years to Decompose 09 October 1992
test('addYears (negative)', t => {
  const timestamp = addYears(718588800000, -3)
  t.is(timestamp, 623894400000)
})

// Add 3 hours to Decompose 09 October 1992 at 2:30 AM
test('addHours (positive)', t => {
  const timestamp = addHours(718597800000, 3)
  t.is(timestamp, 718608600000)
})

// Subtract 3 hours to Decompose 09 October 1992 at 2:30 AM
test('addHours (negative)', t => {
  const timestamp = addHours(718597800000, -3)
  t.is(timestamp, 718587000000)
})

// Add 3 minutes to Decompose 09 October 1992 at 2:30 AM
test('addMinutes (positive)', t => {
  const timestamp = addMinutes(718597800000, 3)
  t.is(timestamp, 718597980000)
})

// Subtract 3 minutes to Decompose 09 October 1992 at 2:30 AM
test('addMinutes (negative)', t => {
  const timestamp = addMinutes(718597800000, -3)
  t.is(timestamp, 718597620000)
})

// Add 3 seconds to Decompose 09 October 1992 at 2:30:14:300 AM
test('addSeconds (positive)', t => {
  const timestamp = addSeconds(718597814300, 3)
  t.is(timestamp, 718597817300)
})

// Subtract 3 seconds to Decompose 09 October 1992 at 2:30:14:300 AM
test('addSeconds (negative)', t => {
  const timestamp = addSeconds(718597814300, -3)
  t.is(timestamp, 718597811300)
})

// Add 3 milliseconds to Decompose 09 October 1992 at 2:30:14:300 AM
test('addMilliseconds (positive)', t => {
  const timestamp = addMilliseconds(718597814300, 3)
  t.is(timestamp, 718597814303)
})

// Subtract 3 milliseconds to Decompose 09 October 1992 at 2:30:14:300 AM
test('addMilliseconds (negative)', t => {
  const timestamp = addMilliseconds(718597814300, -3)
  t.is(timestamp, 718597814297)
})
