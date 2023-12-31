// modulos externos
// ver. npm install inquirer@8.1.2
// ver. npm install chalk@4.1.2

const inquirer = require('inquirer');
const chalk = require('chalk');

// modulos internos
const fs = require('fs');

console.log('Iniciamos o Accounts');

operation();

function operation() {

  inquirer.prompt([{
    type: 'list',
    name: 'action',
    message: 'O que você deseja fazer ?',
    choices: [
      'Criar Conta',
      'Consultar Saldo',
      'Depositar',
      'Sacar',
      'Sair'
    ]
  }]).then((answer) =>{
    const action = answer['action'];

    if(action === 'Criar Conta') {
      createAccount();
    }
  })
  .catch((err) => console.log(err));

}

// criar a conta

function createAccount () {
  console.log(chalk.bgGreen.black('Parabéns por escolher o nosso banco!'));
  console.log(chalk.green('Defina as opções da sua conta a seguir'));

  buildAccount();
}

function buildAccount() {
  inquirer
    .prompt([
      {
        name: 'accountName',
        message: 'Digite um nome para a sua conta:',
      },
    ])
    .then((answer) => {
      console.info(answer['accountName'])

      const accountName = answer['accountName']

      if (!fs.existsSync('accounts')) {
        fs.mkdirSync('accounts')
      }

      if (fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(
          chalk.bgRed.black('Esta conta já existe, escolha outro nome!'),
        )
        buildAccount(accountName)
      }

      fs.writeFileSync(
        `accounts/${accountName}.json`,
        '{"balance":0}',
        function (err) {
          console.log(err)
        },
      )

      console.log(chalk.green('Parabéns, sua conta foi criada!'))
      operation()
    })
    
};

