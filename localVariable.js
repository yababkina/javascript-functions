const merge = Object.assign({}, obj1, obj2);
const randomBoolean = () => Math.random() >= 0.5;
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};