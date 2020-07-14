console.log('keys', Object.keys({nome: 'Erick'}));

console.log('keys', Object.values({nome: 'Erick'}));

console.log('now', Date.now());

console.log('global', global);

const animal = {
    _idade: '123',
    set idade(valor) {
        this._idade = valor
    },
    get idade() {
        return this._idade
    }
}

animal.idade = 10

console.log(animal.idade)