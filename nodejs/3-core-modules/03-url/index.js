const url = require('url');
const adress = 'https://www.meusite.com.br/catalog?produtos=cadeira';
const parsedUrl = new url.URL(adress);

console.log(`host: ${parsedUrl.host}`);
console.log(`path: ${parsedUrl.pathname}`);
console.log(`search: ${parsedUrl.search}`);
console.log(`search param: ${parsedUrl.searchParams}`);
console.log(`get: ${parsedUrl.searchParams.get('produtos')}`);
