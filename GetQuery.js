const randomBoolean = () => Math.random() >= 0.5;
const isArray = (arr) => Array.isArray(arr);
const isWeekday = (date) => date.getDay() % 6 !== 0;