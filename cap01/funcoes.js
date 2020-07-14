function name(params) {
    //bloco de código    
}

function queDiaHoje() {
    const date = new Date();
    console.log(`Hoje é dia: ${date.getDate()}`)
}

queDiaHoje()

function soma(a, b) {
    return a+b;
}

soma(11,2);

soma(20000, 500)


const idade = 32;
const peso = 100.

const resultado = soma(idade, peso);

console.log(resultado);

const funcionario1 = {
    nome: "Wagner",
    desconto: 0.2,
    salarioBruto: 7000,
    salarioLiquido: 0
}

const funcionario2 = {
    nome: "Mayara",
    desconto: 0.1,
    salarioBruto: 5000,
    salarioLiquido: 0
}

function calcularDesconto(salarioBruto, desconto) {
    const resultado = salarioBruto - (desconto * salarioBruto);
    return resultado;
}

funcionario1.salarioLiquido = calcularDesconto(funcionario1.salarioBruto,funcionario1.desconto);
funcionario2.salarioLiquido = calcularDesconto(funcionario2.salarioBruto,funcionario2.desconto);

console.log(`
    Funcionario 1: ${funcionario1},
    Funcionario 2: ${funcionario2}
`)

console.log(funcionario1)