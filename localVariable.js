const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const isTabInView = () => !document.hidden;
const minNumber = arr => Math.min(...arr);