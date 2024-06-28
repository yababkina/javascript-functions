const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;