const merge = (a, b) => [...a, ...b];
const isWeekday = (date) => date.getDay() % 6 !== 0;