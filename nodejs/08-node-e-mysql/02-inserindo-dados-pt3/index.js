 const express = require('express');
 const exphds = require('express-handlebars');
 const mysql = require('mysql');

 const app = express();
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'springstudent',
  password: 'springstudent',
  database: 'pesquisa'
});

const port = 3000;
conn.connect(function(err){
  if(err)throw new Error(err);
  else{
    console.log('conectado com o banco de dados:');
    app.listen(port,(err)=> {
      if(err) {
        console.log(`falha ao conectar com o servidor: ${err}`)
      } else{
        console.log(`conectado com o servidor na porta ${port}`);
      }
    })
  }
});



app.get('/', (req, res)=> {

  const nomes = 'Hip Hop'
  const idade = 32;
  const sql = `INSERT INTO tab_pesquisa (nome, idade) VALUES ('${nomes}','${idade}')`;

  conn.query(sql, function (err){
    if(err){
      console.log('falha ao inserir a query'+ err);
    } else {
      console.log(`dados retorno: ${sql}`);
    }
  });

});

