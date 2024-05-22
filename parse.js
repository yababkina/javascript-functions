console.log(1 +  "2" + "2");
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();