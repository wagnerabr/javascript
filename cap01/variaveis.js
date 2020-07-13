//Var e let são identicas, porém as variaveis let só podem ser acessadas dentro do seu escopo, 
//ja a var pode ser acessada fora do seu escopo
if(true) {
    let name = 'Wagner';

    var sobreNome = "Barros";
    //Funciona somente dentro do seu escopo    
    console.log(name)
}
//Dá erro porque a variavel criada com let só pode ser usada dentro do seu escopo
//console.log(name, sobreNome)

console.log(sobreNome)

// o comportamento fundamental de uma constante é que uma vez atribuído um valor a ela, 
//este não pode ser alterado.
if(true) {
    const idade = 32

    console.log(idade);
    
    //Dá o seguinte erro TypeError: Assignment to constant variable
    //idade = 33

    //Assim como let, const também tem escopo de bloco.
    console.log(idade);
}

//Erro Variavel não está definida, const só funciona dentro do escopo de bloco em que foi inicializada
//console.log(idade);
