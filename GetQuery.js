const merge = Object.assign({}, obj1, obj2);
const timeFromDate = date => date.toTimeString().slice(0, 8);
var regexp  = new RegExp('{{([^}]+)}}', 'g');