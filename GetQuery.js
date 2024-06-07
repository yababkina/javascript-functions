var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);