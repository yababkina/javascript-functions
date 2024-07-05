const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");
const merge = Object.assign({}, obj1, obj2);
const uniqueArr = (arr) => [...new Set(arr)];