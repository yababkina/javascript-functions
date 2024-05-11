const removeDuplicates = (arr) => [...new Set(arr)];
const getRandomBoolean = () => Math.random() >= 0.5;
const randomString = () => Math.random().toString(36).slice(2);