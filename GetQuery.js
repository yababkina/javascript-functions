const removeDuplicates = (arr) => [...new Set(arr)];
const minNumber = arr => Math.min(...arr);
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);