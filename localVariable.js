const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
var regexp  = new RegExp('{{([^}]+)}}', 'g');
const toggleBool = () => (bool = !bool);