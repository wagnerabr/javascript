const readLine = require('readline');
const terminal = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

function questionAsync(texto) {
    return new Promise((resolve, reject) => {
        terminal.question(`${texto}\n`, resolve);
    })
}

let nome = "";
let telefone = "";

Promise.resolve()
    .then(() => questionAsync('Qual é o seu nome? '))
    .then(respostaNome => { 
        if (!respostaNome) {
            throw new Error('Campo nome vazio!');
        }
        nome = respostaNome; 
    })
    .then(() => questionAsync('Qual é o seu telefone? '))
    .then(respostaTelefone => { 
        if (!respostaTelefone) {
            throw new Error('Campo telefone vazio!');
        }
        telefone = respostaTelefone; 
    })
    .then(() => {
        console.log(`Nome: ${nome}, Telefone: ${telefone}`);
    })
    .catch((error) => {
        console.error("Deu ruim", error);
    })
    .finally(() => {
        terminal.close();
    })


    // terminal.close();