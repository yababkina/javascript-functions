const allResults = await Promise.all(items.map(async (item) => {}));
const removeDuplicates = (arr) => [...new Set(arr)];
const repositoryRootPath = path.resolve(__dirname, '..');
const minNumber = arr => Math.min(...arr);