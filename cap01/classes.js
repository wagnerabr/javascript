class Piloto {
    voar(){
        console.log(`Voou`)
    }
    pousar(){
        console.log('Pousar')
    }
}

const piloto1 = new Piloto();

piloto1.voar();
piloto1.pousar();

class Piloto2 {
    constructor(name, age){
        this._name = name
        this._age = age
    }
    voar(){
        console.log(`O piloto ${this._name} voou`)
    }
    pousar(){
        console.log(`O piloto ${this._name} pousou`)
    }
}

const piloto2 = new Piloto2("Santos", 33);

piloto2.voar();
piloto2.pousar();


class Piloto3 {
    static obterAnoNascimento(idade) {
        return 2020 - idade;
    }
}

const anoNascimento = Piloto3.obterAnoNascimento(32);

console.log(`Ano nascimento: `, anoNascimento);