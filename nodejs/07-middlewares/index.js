const express = require('express');
const app = express();
const port = 3000;

const path = require('path');
const dataPath = path.join(__dirname,'templates');

const checkAuth = function (req, res, next){

  req.authStatus = true;
  if(req.authStatus) {
    console.log('Esta logado pode continuar');
    next();

  } else {
    console.log('Não esta logado, faço o login para continuar');
    next()
  }
}


app.use(checkAuth);


app.get('/', (req, res) => {

  
  res.sendFile(`${dataPath}/index.html`);

});

app.listen(port, (err) => {
  if(err){
    console.log(`falha ao conectar com o servidor ${err}`);
  }
  console.log(`servidor aberto na porta ${port}`);
});

