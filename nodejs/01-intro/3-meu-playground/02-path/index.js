const path = require('path');

console.log(__filename);
console.log(__dirname);

console.log('-- basename --');
console.log(`basename ${path.basename(__filename)}`);
console.log(`basename ${path.basename(__dirname)}`);

console.log('-- extname --');
console.log(`extname: ${path.extname(__filename)}`);

console.log('-- parse --');
console.log(path.parse(__filename));

console.log('-- path.format-');
console.log(path.format(path.parse(__filename)));

console.log('-- isAbsolute --');
console.log(path.isAbsolute(__filename));






