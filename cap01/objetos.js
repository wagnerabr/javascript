const pessoa = {
    nome: "Wagner",
    idade: 32,
}

//Você pode inserir um novo atributo em objeto mesmo ele sendo uma const
pessoa.nomeDaMae = "Adriana";

console.log(pessoa) 
//No javascript a diferença entre let e const é que na const você não pode reassinar valores;

const heroi = {
    name: "Flash",
    idade: 100
}

console.log(heroi.name)
console.log(heroi['idade'])

//console.log(heroi.id)
//Dá erro porque não existe o atributo id

//Pode inserir um atributo mesmo sendo uma consta, 
//pois não está sendo reassinado o valor que no caso é objeto heroi.
//Pode alterar o objeto mesmo sendo const
heroi.id = 0001
console.log(heroi)

//Imprimindo todas as chaves do objetos
console.log(Object.keys(heroi));

//Imprimindo somente os valores
console.log(Object.values(heroi));


//Criando um novo objeto a partir de um já existente - isso é muito utilizado
//Está misturando 2 objetos
//Por padrão no JAVASCRIPT sempre evite alterar um objeto, procure sempre criar um novo
const novoObjeto = Object.assign(pessoa, heroi)
console.log(novoObjeto);

//Apaga o atributo de um objeto
delete novoObjeto.idade;

console.log(novoObjeto);

