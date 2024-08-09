const maxNumber = arr => Math.max(...arr);
const isTabInView = () => !document.hidden;
const resultingPromises = urls.map((url) => makHttpRequest(url));