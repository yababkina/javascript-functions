const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';