# @ericadamski/quicktime

⏱ A tiny set of utilities to compare JS dates.

## Installation

```
yarn add @ericadamski/quicktime
```

or

```
npm i @ericadamski/quicktime
```

## Usage

Each function takes two JS Dates and a third possible parameter that specifies the granularity of the comparison. All of the following examples compare the entire date down to the milliseconds.

### `isAfter`

Check if a give time is after another time.

```javascript
import { isAfter } from "@ericadamski/quicktime";

isAfter(new Date("10/10/2010"), new Date()); // false
```

### `isBefore`

Check if a give time is before another time.

```javascript
import { isBefore } from "@ericadamski/quicktime";

isBefore(new Date("10/10/2010"), new Date()); // true
```

### `isEqual`

Check if a give time is before another time.

```javascript
import { isEqual } from "@ericadamski/quicktime";

isEqual(new Date("10/10/2010"), new Date()); // false
```

## Compar Granularity

All of the function above can be augmented by passing the part of the date you want to compare. The date will always compare the time segment specified and any segment larger. For example if you compare using `days` then `quicktime` will make sure that the day, month and year are the same but will ignore hours, minutes, seconds, and milliseconds.

The available time segments to compare with are:

- **milliseconds** (default)
- **seconds**
- **minutes**
- **hours**
- **days**
- **months**
- **years**

### `isAfter`

```javascript
import { isAfter } from "@ericadamski/quicktime";

isAfter(new Date("10/10/2010"), new Date("11/10/2010"), "days"); // false
```

### `isBefore`

Check if a give time is before another time.

```javascript
import { isBefore } from "@ericadamski/quicktime";

isBefore(new Date("10/10/2010"), new Date("11/10/2010"), "days"); // true
```

### `isEqual`

Check if a give time is before another time.

```javascript
import { isEqual } from "@ericadamski/quicktime";

isEqual(new Date("10/10/2010"), new Date("10/10/2010"), "days"); // true

isEqual(new Date("10/10/2010"), new Date("10/10/2011"), "days"); // false
```
