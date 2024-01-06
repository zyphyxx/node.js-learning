const http = require('http');

const port = 8080;

const server = http.createServer((req, res) => {

  res.write('oi http');
  res.end();

});

server.listen(port, () => {
  console.log(`servidor rodando na porta ${port}`);
});