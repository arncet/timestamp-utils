/*************/
/* Constants */
/*************/

const SECOND_IN_MILLISECONDS = 1000
const MINUTE_IN_MILLISECONDS = SECOND_IN_MILLISECONDS * 60
const HOUR_IN_MILLISECONDS = MINUTE_IN_MILLISECONDS * 60
const DAY_IN_MILLISECONDS = HOUR_IN_MILLISECONDS * 24
const ISO_STRING_REGEXP = /(\d{4})-([01]\d)-([0-3]\d)T([0-2]\d):([0-5]\d):([0-5]\d)\.(\d{3})+/

/**********/
/* Uitls */
/*********/

// Create an array of undefined with `count` lenght
export const initArray = count => Array(count).fill()

export const addOneMonth = (timestamp, negative) => {
  const timestampDay = getDay(timestamp)
  // The minimum day count for a month is 28 and maximum is 31
  const newTimestamp = addDays(timestamp, negative ? -31 : 28)
  const newTimestampDay = getDay(newTimestamp)
  return timestampDay === newTimestampDay
    ? newTimestamp
    : newTimestamp + (timestampDay - newTimestampDay) * DAY_IN_MILLISECONDS
}

/***********/
/* Methods */
/***********/

// 0: Year, 1: Month, 2: Day, 3: Hours, 4: Minutes, 5: Seconds, 6: Milliseconds
export const decompose = timestamp => new Date(timestamp).toISOString().match(ISO_STRING_REGEXP).slice(1)

export const getYear = timestamp => decompose(timestamp)[0]
export const getMonth = timestamp => decompose(timestamp)[1]
export const getDay = timestamp => decompose(timestamp)[2]
export const getHours = timestamp => decompose(timestamp)[3]
export const getMinutes = timestamp => decompose(timestamp)[4]
export const getSeconds = timestamp => decompose(timestamp)[5]
export const getMilliseconds = timestamp => decompose(timestamp)[6]

export const addMonths = (timestamp, months) => initArray(Math.abs(months)).reduce(prev =>  addOneMonth(prev, months < 0), timestamp)
export const addYears = (timestamp, years) => initArray(Math.abs(years)).reduce(prev =>  addMonths(prev, years > 0 ? 12 : -12), timestamp)
export const addDays = (timestamp, days) => timestamp + (DAY_IN_MILLISECONDS * days)
export const addHours = (timestamp, hours) => timestamp + (HOUR_IN_MILLISECONDS * hours)
export const addMinutes = (timestamp, minutes) => timestamp + (MINUTE_IN_MILLISECONDS * minutes)
export const addSeconds = (timestamp, seconds) => timestamp + (SECOND_IN_MILLISECONDS * seconds)
export const addMilliseconds = (timestamp, milliseconds) => timestamp + milliseconds

export const add = (timestamp, { years = 0, months = 0, days = 0, hours = 0, minutes = 0, seconds = 0, milliseconds = 0 }) =>
  addYears(addMonths(addDays(addHours(addMinutes(addSeconds(addMilliseconds(timestamp, milliseconds), seconds), minutes), hours), days), months), years)
