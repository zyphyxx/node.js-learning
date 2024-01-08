const express = require('express');
const exphds = require('express-handlebars');
const port = 3000;

const app = express();
app.engine('handlebars', exphds.engine());
app.set('view engine', 'handlebars');



app.get('/', (req , res) => {

  res.render('home');


});

app.listen(port, (err) => {
  if(err){
    console.log(`falha ao conectar com servidor: ${err}`)
  } console.log(`servidor on na porta ${port}`);
});