const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

const app = express();

// configurando o handlebars
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// css
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home');
});

// configurando a conexão com mysql
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'springstudent',
  password: 'springstudent',
  database: 'nodemysql2'
});


const PORT = 3000;
conn.connect(function(err){
  if(err){
    console.log(`Falha ao conectar com o MySQL: ${err}`);
  }
  console.log('Conectou ao MySql');

  app.listen(PORT);
});


