const express = require('express');
const exphds = require('express-handlebars');
const conn = require('./db/conn');

const app = express();

const User = require('./models/User');

app.use(express.urlencoded({
  extended: true,
}));

conn.sync().then(() => {
  app.listen(3000)
}).catch((err) => console.log(err));
