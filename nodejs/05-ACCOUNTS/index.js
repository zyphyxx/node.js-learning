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
      'Criar conta',
      'Consultar Saldo',
      'Depositar',
      'Sacar',
      'Sair'
    ]
  }]).then((answer) =>{
    const action = answer['action'];
    console.log(action);
  })
  .catch((err) => console.log(err));
}