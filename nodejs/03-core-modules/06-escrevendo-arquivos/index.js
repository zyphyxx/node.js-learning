const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer((request, response) => {

  const urlInfo = require('url').parse(request.url, true);
  const name = urlInfo.query.name;

  if(!name){
    fs.readFile('index.html', function (err, data) {

      response.writeHead(200, {'Content-Type':'text/html'});
      response.write(data);
      return response.end();
  
    })
    
  } else {

    fs.writeFile('arquivo.txt', name, function (err, data) {
        response.writeHead(302, {
          location: '/'
        });
        return response.end();
    });


    
  }
  

});

server.listen(port, (err) => {
  if(err){

    throw new Error(`falha ao conectar com o servidor: ${err}`);
    
  } else {
    console.log(`servidor on na porta: ${port}`);
  }
});