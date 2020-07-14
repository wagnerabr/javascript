//meses começam do zero
// const dataAniversario = new Date(2020, 0, 20);
// console.log(dataAniversario);

//pegar a primeira data do JS - 1970-01-01
// const primeiraData = new Date(0);
// console.log(primeiraData);

const hoje = new Date();
// console.log(hoje.toString());

//Formato Global Recomendado
//console.log(hoje.toISOString());

//Adicionando dias a minha data
// const dia = hoje.getDate();
// hoje.setDate(dia + 10);

//Adicionando meses a minha data
// const mes = hoje.getMonth();
// hoje.setMonth(mes + 1);

//Adicionando anos a minha data
// const ano = hoje.getFullYear();
// hoje.setFullYear(ano + 1);

console.log(`
    Dia: ${hoje.getDate()},
    Mes: ${hoje.getMonth()},
    Ano: ${hoje.getFullYear()},
    Hora: ${hoje.getHours()},
    Minutos: ${hoje.getMinutes()},
    Segundos: ${hoje.getSeconds()},
`)

//Comparando datas
console.log(
    new Date(2020, 07, 14) > new Date (2020, 07, 13)
)