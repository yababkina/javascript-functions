const intermediateAppPath = path.join(buildOutputPath, 'app');
const reversedString = str => str.split('').reverse().join('');
const merge = (a, b) => [...a, ...b];