const express = require('express');
const app = express();
const port = 3000;

const path = require('path');
const dataPath = path.join(__dirname,'templates');


app.get('/users/:id', (req, res) => {

  const id = req.params.id

  console.log(`estamos buscando o usuario: ${id}`);
  
  res.sendFile(`${dataPath}/index.html`);

});

app.get('/', (req, res) => {

  
  res.sendFile(`${dataPath}/index.html`);

});

app.listen(port, (err) => {
  if(err){
    console.log(`falha ao conectar com o servidor ${err}`);
  }
  console.log(`servidor aberto na porta ${port}`);
});

