const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true })); // Middleware para analisar dados do corpo da requisição

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'springstudent',
  password: 'springstudent',
  database: 'tb_dia'
});

app.get('/', (req, res) => {
  res.render('home');
});

app.post('/adicionar-dia', (req, res) => {
  const x = req.body.dia;
  const sql = `INSERT INTO meusdias (dia) VALUES ('${x}')`;

  conn.query(sql, (err, result) => {
    if (err) {
      console.error('Erro ao inserir registro:', err);
      res.status(500).send('Erro interno no servidor');
      return;
    }
    
    console.log('Registro inserido com sucesso!');
    res.redirect('/');
  });
});

conn.connect((err) => {
  if (err) {
    console.error('Falha ao conectar com o MySQL:', err);
    return;
  }

  console.log('Conectado ao MySQL');
  app.listen(3000, () => {
    console.log('Servidor escutando na porta 3000');
  });
});
