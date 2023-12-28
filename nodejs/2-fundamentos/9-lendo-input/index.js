const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question('Qual sua linguagem preferida?', (language) => {
    if (language === 'python') {
        console.log('A cobra vai fumar!');
    }
    console.log(`A minha linguagem preferida é ${language}`);
    readline.close();
});