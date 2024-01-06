const chalk = require('chalk');

const nota = 6;

if (nota >= 7) {
    console.log(chalk.green(`Parabens nota ${nota}! voce esta aprovado!`));
} else {
    console.log(chalk.bgRed('Você precisa fazer a prova de recuperação!'));
}
