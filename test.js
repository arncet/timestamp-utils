import test from 'ava'
import timestampUtils from './src'
import { initArray, toISO8601, timezoneOffset } from './src/utils'

// Init an array with length of 3
test('initArray', t => {
  const array = initArray(3)
  t.is(array.length, 3)
})

// Turn an Intl.DateTimeFormat date to iso8601 date
test('toISO8601', t => {
  const date = toISO8601('14/07/2022, 14:25:39')
  t.is(date, '2022-07-14T14:25:39Z')
})

// Get offset between UTC and ... UTC --'
test('timezoneOffset', t => {
  const offset = timezoneOffset('UTC')
  t.is(offset, 0)
})

// Get offset between UTC and America/Belem
test('timezoneOffset UTC to America/Belem', t => {
  const offset = timezoneOffset('America/Belem')
  t.is(offset, -10800000)
})

// 09 October 1992 -> 09 November 1992
test('addOneMonth', t => {
  const timestamp = timestampUtils.addOneMonth(718588800000)
  t.is(timestamp, 721267200000)
})

// Decompose 09 October 1992 at 2:30 AM
test('decompose', t => {
  const details = timestampUtils.decompose(718597800000)
  t.is(details.length, 7)
  t.deepEqual(details, ['1992', '10', '09', '02', '30', '00', '000'])
})

// Get year of 09 October 1992
test('getYear', t => {
  const year = timestampUtils.getYear(718588800000)
  t.is(year, '1992')
})

// Get month of 09 October 1992
test('getMonth', t => {
  const month = timestampUtils.getMonth(718588800000)
  t.is(month, '10')
})

// Get week's day of 09 October 1992
test('getWeekDay', t => {
  const weekDay = timestampUtils.getWeekDay(718588800000)
  t.is(weekDay, 4)
})

// Get day of 09 October 1992
test('getDay', t => {
  const day = timestampUtils.getDay(718588800000)
  t.is(day, '09')
})

// Get hours of 09 October 1992 at 2:30 AM
test('getHours', t => {
  const hours = timestampUtils.getHours(718597800000)
  t.is(hours, '02')
})

// Get minutes of 09 October 1992 at 2:30 AM
test('getMinutes', t => {
  const minutes = timestampUtils.getMinutes(718597800000)
  t.is(minutes, '30')
})

// Get seconds of 09 October 1992 at 2:30:14:300 AM
test('getSeconds', t => {
  const seconds = timestampUtils.getSeconds(718597814300)
  t.is(seconds, '14')
})

// Get milliseconds of 09 October 1992 at 2:30:14:300 AM
test('getMilliseconds', t => {
  const milliseconds = timestampUtils.getMilliseconds(718597814300)
  t.is(milliseconds, '300')
})

// Add 3 days to 09 October 1992
test('addDays (positive)', t => {
  const timestamp = timestampUtils.addDays(718588800000, 3)
  t.is(timestamp, 718848000000)
})

// Subtract 3 days to 09 October 1992
test('addDays (negative)', t => {
  const timestamp = timestampUtils.addDays(718588800000, -3)
  t.is(timestamp, 718329600000)
})

// Add 3 months to 09 October 1992
test('addMonths (positive)', t => {
  const timestamp = timestampUtils.addMonths(718588800000, 3)
  t.is(timestamp, 726537600000)
})

// Subtract 3 months to 09 October 1992
test('addMonths (negative)', t => {
  const timestamp = timestampUtils.addMonths(718588800000, -3)
  t.is(timestamp, 710640000000)
})

// Add 1 months to 31 January 1992
test('addMonths (positive, 31 January 1992 + 1 month)', t => {
  const timestamp = timestampUtils.addMonths(1517392566134, 1)
  t.is(timestamp, 1519811766134)
})

// Subtract 1 months to 31 March 1992
test('addMonths (negative, 31 March 1992 - 1 month)', t => {
  const timestamp = timestampUtils.addMonths(1522486475408, -1)
  t.is(timestamp, 1519808075408)
})

// Add 3 years to 09 October 1992
test('addYears (positive)', t => {
  const timestamp = timestampUtils.addYears(718588800000, 3)
  t.is(timestamp, 813196800000)
})

// Subtract 3 years to 09 October 1992
test('addYears (negative)', t => {
  const timestamp = timestampUtils.addYears(718588800000, -3)
  t.is(timestamp, 623894400000)
})

// Add 3 hours to 09 October 1992 at 2:30 AM
test('addHours (positive)', t => {
  const timestamp = timestampUtils.addHours(718597800000, 3)
  t.is(timestamp, 718608600000)
})

// Subtract 3 hours to 09 October 1992 at 2:30 AM
test('addHours (negative)', t => {
  const timestamp = timestampUtils.addHours(718597800000, -3)
  t.is(timestamp, 718587000000)
})

// Add 3 minutes to 09 October 1992 at 2:30 AM
test('addMinutes (positive)', t => {
  const timestamp = timestampUtils.addMinutes(718597800000, 3)
  t.is(timestamp, 718597980000)
})

// Subtract 3 minutes to 09 October 1992 at 2:30 AM
test('addMinutes (negative)', t => {
  const timestamp = timestampUtils.addMinutes(718597800000, -3)
  t.is(timestamp, 718597620000)
})

// Add 3 seconds to 09 October 1992 at 2:30:14:300 AM
test('addSeconds (positive)', t => {
  const timestamp = timestampUtils.addSeconds(718597814300, 3)
  t.is(timestamp, 718597817300)
})

// Subtract 3 seconds to 09 October 1992 at 2:30:14:300 AM
test('addSeconds (negative)', t => {
  const timestamp = timestampUtils.addSeconds(718597814300, -3)
  t.is(timestamp, 718597811300)
})

// Add 3 milliseconds to 09 October 1992 at 2:30:14:300 AM
test('addMilliseconds (positive)', t => {
  const timestamp = timestampUtils.addMilliseconds(718597814300, 3)
  t.is(timestamp, 718597814303)
})

// Subtract 3 milliseconds to 09 October 1992 at 2:30:14:300 AM
test('addMilliseconds (negative)', t => {
  const timestamp = timestampUtils.addMilliseconds(718597814300, -3)
  t.is(timestamp, 718597814297)
})

// 09 October 1992 at 00:00:00:000 -> 27 January 1994 at 02:30:14:300
test('add', t => {
  const timestamp = timestampUtils.add(718588800000, {
    years: 2,
    months: -9,
    days: 18,
    hours: 2,
    minutes: 30,
    seconds: 14,
    milliseconds: 300
  })
  t.is(timestamp, 759637814300)
})

// 09 October 1992 -> 09 November 1994
test('setYear', t => {
  const timestamp = timestampUtils.setYear(718588800000, 1994)
  t.is(timestamp, 781660800000)
})

// 09 October 1992 -> 09 January 1992
test('setMonth', t => {
  const timestamp = timestampUtils.setMonth(718588800000, 1)
  t.is(timestamp, 694915200000)
})

// Fri 09 October 1992 -> Sun 11 January 1992
test('setWeekDay', t => {
  const timestamp = timestampUtils.setWeekDay(718588800000, 6)
  t.is(timestamp, 718761600000)
})

// 09 October 1992 -> 27 October 1992
test('setDay', t => {
  const timestamp = timestampUtils.setDay(718588800000, 27)
  t.is(timestamp, 720144000000)
})

// 09 October 1992 at 00:00:00 -> 09 October 1992 at 02:00:00
test('setHours', t => {
  const timestamp = timestampUtils.setHours(718588800000, 2)
  t.is(timestamp, 718596000000)
})

// 09 October 1992 at 00:00:00 -> 09 October 1992 at 00:30:00
test('setMinutes', t => {
  const timestamp = timestampUtils.setMinutes(718588800000, 30)
  t.is(timestamp, 718590600000)
})

// 09 October 1992 at 00:00:00 -> 09 October 1992 at 00:00:14
test('setSeconds', t => {
  const timestamp = timestampUtils.setSeconds(718588800000, 14)
  t.is(timestamp, 718588814000)
})

// 09 October 1992 at 00:00:00:000 -> 09 October 1992 at 00:00:00:300
test('setMilliseconds', t => {
  const timestamp = timestampUtils.setMilliseconds(718588800000, 300)
  t.is(timestamp, 718588800300)
})

// 09 October 1992 at 00:00:00:000 -> 27 January 1994 at 02:30:14:300
test('set', t => {
  const timestamp = timestampUtils.set(718588800000, {
    year: 1994,
    month: 1,
    day: 27,
    hours: 2,
    minutes: 30,
    seconds: 14,
    milliseconds: 300
  })
  t.is(timestamp, 759637814300)
})

// 09 October 1992 at 00:00:00:100 -> 27 January 1994 at 00:00:00:000
test('set (with 0 values)', t => {
  const timestamp = timestampUtils.set(718588800100, {
    year: 1994,
    month: 1,
    day: 27,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0
  })
  t.is(timestamp, 759628800000)
})
