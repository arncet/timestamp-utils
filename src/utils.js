const INTL_DATE_FORMAT_DEFAULT_OPTION = { year: 'numeric', month: 'long', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }

// Create an array of undefined with `count` lenght
export const initArray = count => Array.from({ length: count }).fill()

// Get the difference between given timezone and UTC time in millisecond
export const timezoneOffset = timeZone => {
  const now = new Date()
  const utc = new Intl.DateTimeFormat('en-US', { ...INTL_DATE_FORMAT_DEFAULT_OPTION, timeZone: 'UTC' }).format(now)
  const current = new Intl.DateTimeFormat('en-US', { ...INTL_DATE_FORMAT_DEFAULT_OPTION, timeZone }).format(now)
  return new Date(current).getTime() - new Date(utc).getTime()
}
