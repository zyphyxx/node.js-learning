const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

  fs.readFile('index1.html', function (err, data) {
    
    const urlInfo = require('url').parse(req.url, true);
    const name = urlInfo.query.name;
    
    if(!name){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data);
    return res.end();
    } else {

      const nameNewLine = name + ',\n';

      fs.appendFile('arquivo.txt', nameNewLine, function (err, data) {

        res.writeHead(302, {
          location:'/'});
          return res.end();
      });

    }})
    
});

const PORT = 3000;

server.listen(PORT, (err) => {
  if(err){
    throw new Error('falha ao conectar com servidor');
  } else {
  console.log(`servidor on na porta http://localhost:${PORT}`);
}
});