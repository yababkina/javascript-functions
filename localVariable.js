const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);