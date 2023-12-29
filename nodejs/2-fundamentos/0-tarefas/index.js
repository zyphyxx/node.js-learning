// importando os modulos

const inquirer = require('inquirer');
const chalk = require('chalk');

inquirer.prompt([
    {
        name: 'nomeT',
        message: 'Qual seu nome?'
    },

    {
        name: 'idadeT',
        message: 'Qual a sua idade?'
    }
]).then((answers) => {

    const nome = answers.nomeT;
    const idade = answers.idadeT;

    console.log(chalk.bgYellow.black(`Seu nome é ${nome1} e você tem ${idade} anos.`));

}).catch((err) => {

    throw new Error(`erro pois atribui uma variavel que não existe: ${err}`);

});




