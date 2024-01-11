const express = require('express');
const mysql = require('mysql');
const exphdb = require('express-handlebars');

const app = express();

app.engine('handlebars', exphdb.engine());
app.set('view engine', 'handlebars');

app.use(
  express.urlencoded({
    extended: true
  })
);

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'springstudent',
  password: 'springstudent',
  database: 'pesquisa'
});

app.post('/nome', (req, res) => {
  
  const nome = req.body.nome;
  const idade = Number(req.body.idade);

  const sql = `INSERT INTO tab_pesquisa (nome, idade) VALUES ('${nome}','${idade}')`
  conn.query(sql, function(err) {
   if(err){
    console.log(`erro na query: ${err}`);
   }
   
   console.log('dados inseridos no banco de dados');
    
  });


})

app.get('/', (req, res) => {

  res.render('home');
});

conn.connect(function(err){
  if(err){
    console.log(`erro ao conectar com mysql ${err}`);
  }
  console.log(`conectado com mysql`)
  app.listen(3000);
});

