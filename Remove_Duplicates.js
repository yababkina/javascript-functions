const minNumber = arr => Math.min(...arr);
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
const added = [0, 1, 2, 3, 4].map((item) => item + 1);