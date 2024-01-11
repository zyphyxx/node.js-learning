const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

const app = express();

app.use(
  express.urlencoded({
    extended: true
  })
);

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

app.post('/books/insertbook', (req, res) => {
  const title = req.body.title;
  const pageqty = req.body.pageqty;

  const sql = `INSERT INTO books (title, pageqty) VALUES ('${title}', ${pageqty})`

  conn.query(sql, function (err){
    if(err){
      console.log(`falha na query ${err}`)
    }
    res.redirect('/');
  });
})

const PORT = 3000;
conn.connect(function(err){
  if(err){
    console.log(`Falha ao conectar com o MySQL: ${err}`);
  }
  console.log('Conectou ao MySql');

  app.listen(PORT);
});