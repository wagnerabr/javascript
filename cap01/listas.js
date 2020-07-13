const minhaLista = []

const minhaListaDeTarefas = [
    'mandar email',
    'pagar contas'
]

//O item da lista que não tem nada definido será undefined
console.log(minhaListaDeTarefas[3]);

//Inseri item na lista
minhaListaDeTarefas.push('Formatar note')

//Conta quantos itens tem na lista
console.log(minhaListaDeTarefas.length)

//Mostra todos os itens da lista
console.log(minhaListaDeTarefas)

//Retira o ÚLTIMO item da lista
minhaListaDeTarefas.pop();

console.log(minhaListaDeTarefas);

//Retira o PRIMEIRO item da lista
minhaListaDeTarefas.shift();

console.log(minhaListaDeTarefas);

minhaListaDeTarefas.splice(0, 1)

console.log(minhaListaDeTarefas);

//Verifica o TIPO da variável
console.log(typeof(minhaListaDeTarefas));

//Verifica se é uma ARRAY
console.log(Array.isArray(minhaListaDeTarefas))

//Ordernar lista
const itens = [ 9, 10, 21, 1, 3]
console.log(itens.sort())

//Ordernar lista números
const itens2 = [ 9, 10, 21, 1, 3]
console.log(itens2.sort((a, b) => {
    return a - b;
}))

//Ordernar lista strings
const itens3 = [ "z", "d", "f", "g", "a"]
console.log(itens3.sort());

//Concatenar arrays - juntando elas em uma somente array
const itens4 = itens3.concat([10,11,21])
console.log(itens4);

//Juntar arrays em String
console.log(itens4.join(' - '))

//Localizar indice de um item na lista
console.log(itens4.indexOf('z'))

//Localizar indice de um item que não existe na lista - retorna -1, não use indexOf para booleanos, pois -1 é true
console.log(itens4.indexOf('ze'))

//Localizar indice de um item que não existe na lista - retorna -1, não use indexOf para booleanos, pois -1 é true
let indice = itens4.indexOf('z');
console.log(itens4[indice])