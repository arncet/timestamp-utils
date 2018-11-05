# timestamp-utils

⏱️ An anwsome and tiny util package for timestamp without dependencies

---------------------------------------

![](https://travis-ci.org/arncet/timestamp-utils.svg?branch=master)
![](https://img.shields.io/github/license/arncet/timestamp-utils.svg)
[![Bundlephobia](https://badgen.net/bundlephobia/minzip/timestamp-utils)](https://bundlephobia.com/result?p=timestamp-utils@1.0.3)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![npm version](https://badge.fury.io/js/timestamp-utils.svg)](https://badge.fury.io/js/timestamp-utils)

## Navigation 🗺️ :

<!-- TOC -->

- [timestamp-utils](#timestamp-utils)
  - [Navigation 🗺️ :](#navigation-🗺️-)
  - [Why 🤔](#why-🤔)
  - [How to use ✍️](#how-to-use-✍️)
  - [API 📖](#api-📖)
    - [decompose(timestamp, [timezone='UTC'])](#decomposetimestamp-timezoneutc)
    - [getYear(timestamp)](#getyeartimestamp)
    - [getMonth(timestamp)](#getmonthtimestamp)
    - [getWeekDay(timestamp)](#getweekdaytimestamp)
    - [getDay(timestamp)](#getdaytimestamp)
    - [getHours(timestamp)](#gethourstimestamp)
    - [getMinutes(timestamp)](#getminutestimestamp)
    - [getSeconds(timestamp)](#getsecondstimestamp)
    - [getMilliseconds(timestamp)](#getmillisecondstimestamp)
    - [addYears(timestamp, years)](#addyearstimestamp-years)
    - [addMonths(timestamp, months)](#addmonthstimestamp-months)
    - [addDays(timestamp, days)](#adddaystimestamp-days)
    - [addHours(timestamp, hours)](#addhourstimestamp-hours)
    - [addMinutes(timestamp, minutes)](#addminutestimestamp-minutes)
    - [addSeconds(timestamp, seconds)](#addsecondstimestamp-seconds)
    - [addMilliseconds(timestamp, milliseconds)](#addmillisecondstimestamp-milliseconds)
    - [add(timestamp, values)](#addtimestamp-values)
    - [setYear(timestamp, year)](#setyeartimestamp-year)
    - [setMonth(timestamp, month)](#setmonthtimestamp-month)
    - [setWeekDay(timestamp, weekDay)](#setweekdaytimestamp-weekday)
    - [setDay(timestamp, day)](#setdaytimestamp-day)
    - [setHours(timestamp, hours)](#sethourstimestamp-hours)
    - [setMinutes(timestamp, minutes)](#setminutestimestamp-minutes)
    - [setSeconds(timestamp, seconds)](#setsecondstimestamp-seconds)
    - [setMilliseconds(timestamp, millisecondes)](#setmillisecondstimestamp-millisecondes)
    - [set(timestamp, values)](#settimestamp-values)
  - [Changelog 📋](#changelog-📋)
    - [v2.0.3](#v203)
    - [v2.0.2](#v202)
    - [v2.0.1](#v201)
    - [v2.0.0](#v200)
  - [Development 💻](#development-💻)
  - [License 🖋](#license-🖋)

<!-- /TOC -->

## Why 🤔

Because when you manipulate date with javascript `Date` class it automatically apply the current timezone.
Using timestamp is a good way to avoid timezones's influences.
But using timestamp for huge maninupulations can be very hard (ex: go to next months).

That why i created `timestamp-utils`, it's a powerful util package to easly manipulate timestamp.

## How to use ✍️

Install `timestamp-utils` via npm :

```
npm install --save timestamp-utils
```

Or via yarn :

```
yarn add timestamp-utils
```

Use it :

```javascript
import t from 'timestamp-utils'

const now = new Date().getTime()
const timestamp = t.addDays(now, 3)
```

## API 📖

### decompose(timestamp, [timezone='UTC'])
* Return : Array of String
* Params :
  * *timestamp* : Int (timestamp)
  * *timezone* : String *(since v2.0.0)*
* Available since : *v1.0.0*

Decompose `timestamp` to the following array pattern :
`[year, month, day, hours, minutes, seconds, milliseconds]`

---------------------------------------

### getYear(timestamp)
* Return : String
* Params :
  * *timestamp* : Int (timestamp)
  * *timezone* : String *(since v1.0.3)*
* Available since : *v1.0.0*

Return the `timestamp`'s year.

---------------------------------------

### getMonth(timestamp)
* Return : String
* Params :
  * *timestamp* : Int (timestamp)
  * *timezone* : String *(since v1.0.3)*
* Available since : *v1.0.0*

Return the `timestamp`'s month (eg: "01" for "january").

---------------------------------------

### getWeekDay(timestamp)
* Return : Integer
* Params :
  * *timestamp* : Int (timestamp)
  * *timezone* : String *(since v1.0.3)*
* Available since : *v1.0.3*

Return the `timestamp`'s week day (eg: 0 for "monday").

---------------------------------------

### getDay(timestamp)
* Return : String
* Params :
  * *timestamp* : Int (timestamp)
  * *timezone* : String *(since v1.0.3)*
* Available since : *v1.0.0*

Return the `timestamp`'s day (eg: "01" for "monday").

---------------------------------------

### getHours(timestamp)
* Return : String
* Params :
  * *timestamp* : Int (timestamp)
  * *timezone* : String *(since v1.0.3)*
* Available since : *v1.0.0*

Return the `timestamp`'s hours.

---------------------------------------

### getMinutes(timestamp)
* Return : String
* Params :
  * *timestamp* : Int (timestamp)
  * *timezone* : String *(since v1.0.3)*
* Available since : *v1.0.0*

Return the `timestamp`'s minutes.

---------------------------------------

### getSeconds(timestamp)
* Return : String
* Params :
  * *timestamp* : Int (timestamp)
  * *timezone* : String *(since v1.0.3)*
* Available since : *v1.0.0*

Return the `timestamp`'s seconds.

---------------------------------------

### getMilliseconds(timestamp)
* Return : String
* Params :
  * *timestamp* : Int (timestamp)
  * *timezone* : String *(since v1.0.3)*
* Available since : *v1.0.0*

Return the `timestamp`'s milliseconds.

---------------------------------------

### addYears(timestamp, years)
* Return : Int (timestamp)
* Params :
  * *timestamp* : Int (timestamp)
  * *years*: Int (years to add)
* Available since : *v1.0.0*

Add the given `years` to the given `timestamp`.
`years` can be negative to subtract years.

---------------------------------------

### addMonths(timestamp, months)
* Return : Int (timestamp)
* Params :
  * *timestamp* : Int (timestamp)
  * *months*: Int (months to add)
* Available since : *v1.0.0*

Add the given `months` to the given `timestamp`.
`months` can be negative to subtract months.

> ⚠️ Note : `addMonths` doesn't add same amont of day.<br />
> `addMonths` add days depends on the given day, the result is always the nearest month's day that the given month's day :
>
>  * 09 October + 1 month => 09 November (+31 days)
>  * 31 August + 1 month => 30 September (+30 days)
>  * 31 January 2018 + 1 month => 28 February (+28 days)

---------------------------------------

### addDays(timestamp, days)
* Return : Int (timestamp)
* Params :
  * *timestamp* : Int (timestamp)
  * *days*: Int (days to add)
* Available since : *v1.0.0*

Add the given `days` to the given `timestamp`.
`days` can be negative to subtract days.

---------------------------------------

### addHours(timestamp, hours)
* Return : Int (timestamp)
* Params :
  * *timestamp* : Int (timestamp)
  * *hours*: Int (hours to add)
* Available since : *v1.0.0*

Add the given `hours` to the given `timestamp`.
`hours` can be negative to subtract hours.

---------------------------------------

### addMinutes(timestamp, minutes)
* Return : Int (timestamp)
* Params :
  * *timestamp* : Int (timestamp)
  * *minutes*: Int (minutes to add)
* Available since : *v1.0.0*

Add the given `minutes` to the given `timestamp`.
`minutes` can be negative to subtract minutes.

---------------------------------------

### addSeconds(timestamp, seconds)
* Return : Int (timestamp)
* Params :
  * *timestamp* : Int (timestamp)
  * *seconds*: Int (seconds to add)
* Available since : *v1.0.0*

Add the given `seconds` to the given `timestamp`.
`seconds` can be negative to subtract seconds.

---------------------------------------

### addMilliseconds(timestamp, milliseconds)
* Return : Int (timestamp)
* Params :
  * *timestamp* : Int (timestamp)
  * *milliseconds*: Int (milliseconds to add)
* Available since : *v1.0.0*

Add the given `milliseconds` to the given `timestamp`.
`milliseconds` can be negative to subtract milliseconds.

---------------------------------------

### add(timestamp, values)
* Return : Int (timestamp)
* Params :
  * *timestamp* : Int (timestamp)
  * *values*: Object
* Available since : *v1.0.0*

`add` is a combo of all previous "add" methods.
`values` is an object that follow this pattern :
`{ years, months, days, hours, minutes, seconds, milliseconds }`
All `values` values are `int` and represent the `key` value to add.

Example : `{ years: 3, days: -1, seconds: 20 }` will add 3 years, subtract 1 days and add 20 seconds to the given timestamp.

> ⚠️ Note : `add` calls `addMilliseconds`, `addSeconds`, `addMinutes`, `addHours`,  `addDays`, `addMonths` and `addYears` in this order.<br />
> That mean, according to [addMonths](#addmonthstimestamp-months-)'s note, `add(t, { days: -1, months: -1 })` and `addDays(addMonths(t, -1), -1)`  are not always equals.<br />
> Example : `add(30 March 2018, { days: -1, months: -1 })` => `28 February 2018`, `addDays(addMonths(30 March 2018, -1), -1)` => `27 February 2018`

---------------------------------------

### setYear(timestamp, year)
* Return : Int (timestamp)
* Params :
  * *timestamp* : Int (timestamp)
  * *year*: Int (year to set)
* Available since : *v2.1.0*

Set the given `year` to the given `timestamp`.

---------------------------------------

### setMonth(timestamp, month)
* Return : Int (timestamp)
* Params :
  * *timestamp* : Int (timestamp)
  * *month*: Int (month to set)
* Available since : *v2.1.0*

Set the given `month` to the given `timestamp`.

---------------------------------------

### setWeekDay(timestamp, weekDay)
* Return : Int (timestamp)
* Params :
  * *timestamp* : Int (timestamp)
  * *weekDay*: Int (weekDay to set)
* Available since : *v2.1.0*

Set the given `weekDay` to the given `timestamp`.

> ⚠️ Note : `weekDay` must be an integer between 0 and 6 (0 for Monday, 6 for Sunday)

---------------------------------------

### setDay(timestamp, day)
* Return : Int (timestamp)
* Params :
  * *timestamp* : Int (timestamp)
  * *day*: Int (day to set)
* Available since : *v2.1.0*

Set the given `day` to the given `timestamp`.

---------------------------------------

### setHours(timestamp, hours)
* Return : Int (timestamp)
* Params :
  * *timestamp* : Int (timestamp)
  * *hours*: Int (hours to set)
* Available since : *v2.1.0*

Set the given `hours` to the given `timestamp`.

---------------------------------------

### setMinutes(timestamp, minutes)
* Return : Int (timestamp)
* Params :
  * *timestamp* : Int (timestamp)
  * *minutes*: Int (minutes to set)
* Available since : *v2.1.0*

Set the given `minutes` to the given `timestamp`.

---------------------------------------

### setSeconds(timestamp, seconds)
* Return : Int (timestamp)
* Params :
  * *timestamp* : Int (timestamp)
  * *seconds*: Int (seconds to set)
* Available since : *v2.1.0*

Set the given `seconds` to the given `timestamp`.

---------------------------------------

### setMilliseconds(timestamp, millisecondes)
* Return : Int (timestamp)
* Params :
  * *timestamp* : Int (timestamp)
  * *millisecondes*: Int (millisecondes to set)
* Available since : *v2.1.0*

Set the given `millisecondes` to the given `timestamp`.

---------------------------------------

### set(timestamp, values)
* Return : Int (timestamp)
* Params :
  * *timestamp* : Int (timestamp)
  * *values*: Object
* Available since : *v1.0.0*

`set` is a combo of all previous "set" methods.
`values` is an object that follow this pattern :
`{ year, month, day, hours, minutes, seconds, milliseconds }`
All `values` values are `int` and represent the `key` value to add.

Example : `{ year: 1992, days: 9, seconds: 14 }` will set year to 1992, day to 9 and seconds to 14 to the given `timestamp`.

---------------------------------------

## Changelog 📋

### v2.0.3

* Adding `set` methods :
  - [setYear(timestamp, year)](#setyeartimestamp-year)
  - [setMonth(timestamp, month)](#setmonthtimestamp-month)
  - [setWeekDay(timestamp, weekDay)](#setweekdaytimestamp-weekday)
  - [setDay(timestamp, day)](#setdaytimestamp-day)
  - [setHours(timestamp, hours)](#sethourstimestamp-hours)
  - [setMinutes(timestamp, minutes)](#setminutestimestamp-minutes)
  - [setSeconds(timestamp, seconds)](#setsecondstimestamp-seconds)
  - [setMilliseconds(timestamp, millisecondes)](#setmillisecondstimestamp-millisecondes)
  - [set(timestamp, values)](#settimestamp-values)

### v2.0.2

* Fix [getWeekDay](#getweekdaytimestamp) usage of timezone.

### v2.0.1

* Fix [decompose](#decomposetimestamp-timezoneutc-) slow execution speed.

### v2.0.0

* [decompose](#decomposetimestamp-timezoneutc-) is no longer accessible by using deconstructing import. Now [decompose](#decomposetimestamp-timezoneutc-) is accessible by doing :

```javascript
import t from 'timestamp-utils'
const results = t.decompose(now)
```

* [decompose](#decomposetimestamp-timezoneutc-) now support timezone :

```javascript
import t from 'timestamp-utils'
const results = t.decompose(now, 'Europe/Paris')
```

---------------------------------------

## Development 💻

```
// Clone the project
git clone git@github.com:lelivrescolaire/react-light-calendar.git

// ⬇️ Install node modules
npm install

// 🚀 Start the project
npm run watch

// ✅ Run tests
npm run test

// 🏗️ Build the project
npm run build

// 👀 Keep an eye on the bundle size
npm run size
```

## License 🖋

[MIT](https://en.wikipedia.org/wiki/MIT_License)
