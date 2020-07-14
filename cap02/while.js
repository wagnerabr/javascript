//enquanto nao mudar, não para
let termoDeParada = true;
let cont = 0
while (termoDeParada) {
    termoDeParada =  cont <10
    console.log(termoDeParada);
    if(cont %2===0) {
        console.log("Número par", cont)
    }
    cont++;
}

//roda primeiro e testa depois
do {
    console.log('Só uma vez, pois o termo de parada é:', termoDeParada);
} while (termoDeParada);


let termoParada = true

let contador = 0

while(termoParada) {

console.log(contador)

if(contador++ < 3)

continue

else

termoParada = false

}