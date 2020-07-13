//Metodos assessores get/set
const pessoa = {
    _nome:'',
    _idade: '',
    get getName()  {
        //convensao criar variavel privada com underline na frente, pois não vai ter acesso externo
        return this._nome
    },
    set setName(name) {
        this._nome = name
    },
    set setIdade(idade) {
        this._idade = idade
    },
    get podeDirigir() {
        return this._idade >= 18
    }
}

pessoa.setName = "Wagner";

console.log(pessoa.getName)

pessoa.setIdade = 19;

if (pessoa.podeDirigir) {
    console.log("Essa pessoa pode dirigir:", pessoa.podeDirigir);    
}

//A variavel pessoa.podeDirigir, no caso um metodo da classe, é considerada uma variavel calcula,
//que se alterada um outro valor ela também se alterar. No caso, se alterar a variavel idade, a variavel 
// podeDirigir será alterada

