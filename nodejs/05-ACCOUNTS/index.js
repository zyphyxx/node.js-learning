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
}