const shuffledArray = array.sort(() => Math.random() - 0.5); 
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);