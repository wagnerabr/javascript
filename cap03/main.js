const Matematica = require('./matematica');

console.log(Matematica.multiplicar(1,2))

const readline = require('readline');

const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

terminal.question('Insira o primeiro valor', valor1 => {
    terminal.question('Insira o segundo valor', valor2 => {
        terminal.question('Insira a operacao valor', operacao => {
            console.log("Valor1: ", valor1, "Valor2: ", valor2, "Operação: ", operacao);
            const resultado = Matematica[operacao](
                Number(valor1), 
                Number(valor2)
            );
            console.log(resultado);
            terminal.close();
        })
    })
})