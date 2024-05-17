const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');
const shuffledArray = array.sort(() => Math.random() - 0.5); 
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;