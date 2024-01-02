const http = require('http');
const fs = require('fs');

const server = http.createServer((req , res) => {

  fs.readFile('./index.html', function (err, data) {
    if(err){
      console.log('falha ao carregar o html')
    }
    
    res.writeHead(200,{'Content-Type': 'text/html'});
    req.write(data);
  })
});

const port = 3000;
server.listen(port, (err) =>{
  if(err){
    console.log(`erro ao conectar com servidor: ${err}`);
  }
  console.log(`servidor on na porta ${port}`);
});
