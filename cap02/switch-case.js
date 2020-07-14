const readLine = require('readline');
const terminal = readLine.createInterface({
    //definir o modo de entrada via terminal
    input: process.stdin,
    //definir o modo de saida
    output: process.stdout
});

// const args = process.argv;
// const indice = args[args.length - 1];
// console.log(indice);

// switch (indice) {
//     case 1:
//         console.log("WhatsApp")
//         break;
//     case 2:
//         console.log("Facebook")
//         break;
//     default:
//         console.log("Botão não encontrado")
//         break;
// }

// terminal.question("Qual é o seu nome?", (msg) => {
//     console.log("Seu nome é :", msg);
//     terminal.close();
// })

// const textoMenu = `
//     Digite 1: para menu inicial
//     Digite 2: para acessar o menu de Herois
//     Digite 3: para acessar o menu de Guerreiras
//     Digite 0: para sair
// `;

// const questoes = {
//     menuInicial: {
//         texto: textoMenu,
//         fn: menuInicial
//     },
//     opcao1: {
//         texto: "Submenu! Pressione enter para selecionar mais opções...",
//         fn: opcao1
//     }
// }

// function opcao1() {
//     console.log("Não tem mais opções");
//     terminal.close();
// }

// function menuInicial(msg) {
//     const opcao = Number(msg);
//     if (isNaN(msg)) {
//         throw new Error("Não é um número", msg);
//     }
//     switch (opcao) {
//         case 0:
//             console.log("Sair")
//             terminal.close();
//             break;
//         case 1:
//             console.log("Menu Inicial")
//             terminal.question(
//                 questoes.opcao1.texto,
//                 questoes.opcao1.fn,
//                 terminal.close()
//             )
//             break;
        
//         default:
//             console.log("Opção inválida")
//             break;
//     }
// }

// terminal.question(
//     questoes.menuInicial.texto,
//     questoes.menuInicial.fn
// )


switch (0) {
    case 0:
        console.log('Hello world')
        
        case 1:
        console.log('Hello 1')
}

switch (true) {
    case 1>2:
        console.log('1>2');
        break;
    case 1===1:
        console.log('1===1');
        break;

    default:
        console.log("Nenhum deles")
        break;
}

switch (0) {
    default:
        console.log("Funciona sem case!");
        break;
}

switch (true) {
    case 1<2:
        console.log("1<2");
        break;
    case 1===1:
        console.log("1===1")
    default:
        console.log('pode ter mais de uma opção')
        break;
}