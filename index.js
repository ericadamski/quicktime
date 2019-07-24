/**
 * This is a hack
 */
const milliseconds = "";
const seconds = 1000;
const minutes = 60 * seconds;
const hours = 60 * minutes;
const days = 24 * hours;
const weeks = 7 * days;
const months = 4 * weeks;
const years = 12 * months;

const granularities = {
  milliseconds,
  seconds,
  minutes,
  hours,
  days,
  months,
  years
};

function compare(first, second, granularity = "milliseconds") {
  const accuracy = granularities[granularity].toString().length;
  const [a, b] = [first, second].map(date =>
    (date instanceof Date ? date.getTime() : date).toString()
  );

  return (
    +a.substring(0, a.length - accuracy) - +b.substring(0, b.length - accuracy)
  );
}

export function isBefore(first, second, segment) {
  return compare(first, second, segment) < 0;
}

export function isAfter(first, second, segment) {
  return compare(first, second, segment) > 0;
}

export function isEqual(first, second, segment) {
  return compare(first, second, segment) === 0;
}
