function calcSoma(a, b) {
    return a+b;
}

console.log(calcSoma(10,11))

const calcSoma2 = function (a, b) {
    return a+b; 
}

console.log(calcSoma2(10,12))

const calcSoma3 = (a, b) => {
    return a+b; 
}

console.log(calcSoma3(10,13))

const calcSoma4 = (a, b) => a+b 

console.log(calcSoma4(10,14))

const obj = {
    calcSoma5: (a, b) => a+b 
}

console.log(obj.calcSoma5(10,15));