const fs = require('fs');

// copiando um arquivo da minha maquina e transformando em outro formato de arquivo; 

const caminho = 'C:\\Users\\ZyphyX\\OneDrive\\Desktop\\pd-commits.txt'

fs.readFile(caminho, (err, data) => {
  if(err) {
    console.log(`erro ao ler o arquivo: ${err}`);
  }

  fs.writeFile('copia.md', data.toString('utf-8'), (err) => {
    if(err) throw new Error(`erro ao copiar o arquivo: ${err}`);
    console.log('arquivo criado com sucesso');
  })

});
