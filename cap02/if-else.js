const args = process.argv;
const saldo = args[args.length - 1];
// console.log('args', args);
// console.log('saldo', saldo);

if (isNaN(saldo)) {
    console.log('valor invalido!!!');
    return;
}

let tipoCliente = "premium"

if (saldo<9) {
    tipoCliente = "basic"
}
else if (saldo >=10 && saldo < 20) {
    tipoCliente = "gold"
} else {
    tipoCliente = null
}

//null, undifined

if (!tipoCliente) {
    tipoCliente = "indefinido"
}

console.log("tipoCliente", tipoCliente);

//Operador ternário

const idade = 32;
const resultado = idade >=18 ? "De maior" : "De menor";
console.log(resultado);

const resulado = 1 ? (null || ((1 != '1') ? "Hello World":"Hackezao")) : "não zero";

console.log(resulado);

const valor = 1;

// o operador || é ou
if (valor<2 || valor>4) {
    console.log("1");    
} else if (valor<5) {
    console.log("2")
} else {
    console.log("3")
}

const item = "0"; console.log(!!item);

const item2 = (!0 ? "2a":"3b");
console.log(item2);

const item3 = "abc";

console.log(isNaN(item3) ? "Hey jude":"Hey JUlia");