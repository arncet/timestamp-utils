const INTL_DATE_FORMAT_DEFAULT_OPTION = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hourCycle: 'h24',
}

// Create an array of undefined with `count` lenght
export const initArray = count => Array.from({ length: count }).fill()

export const toISO8601 = date => {
  const [, day, month, year, hour, minute, second] = date.match(/(\d{2})\/(\d{2})\/(\d{4}).*?(\d{2}):(\d{2}):(\d{2})/)
  return `${year}-${month}-${day}T${hour}:${minute}:${second}Z`
}

// Get the difference between given timezone and UTC time in millisecond
export const timezoneOffset = timeZone => {
  const now = new Date()
  const utc = toISO8601(new Intl.DateTimeFormat('fr-FR', { ...INTL_DATE_FORMAT_DEFAULT_OPTION, timeZone: 'UTC' }).format(now))
  const current = toISO8601(new Intl.DateTimeFormat('fr-FR', { ...INTL_DATE_FORMAT_DEFAULT_OPTION, timeZone }).format(now))
  return new Date(current).getTime() - new Date(utc).getTime()
}
