const fs = require(`fs`);
              
// modo simples para eu criar um arquivo 

const texto = 'este texto esta dentro do meu arquivo, \n colocando mais texto para testar ';

fs.writeFile('arquivo.txt', texto, (err) => {
  if(err){
    console.log(`erro ao criar o arquivo ${err}`);
  } else {
    console.log(`arquivo criado com sucesso: no caminho tal`);
  }
});

// modo simples para eu conseguir ler esse arquivo

const caminhoArquivo = './arquivo.txt';

fs.readFile(caminhoArquivo, (err, data) => {
  if(err) throw err;
  console.log(data.toString('utf-8'));
});




