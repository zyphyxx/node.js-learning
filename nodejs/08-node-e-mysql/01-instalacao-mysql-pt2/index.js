const express = require('express');
const exphds = require('express-handlebars');
const mysql = require('mysql');

const app = express();

app.engine('handlebars', exphds.engine());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {

  res.render('home');
});

app.listen(3000);

