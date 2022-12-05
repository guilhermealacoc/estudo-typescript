"use strict";
let primeiraSoma;
primeiraSoma = (numero1, numero2) => {
    return numero1 + numero2;
};
let calculadora;
function soma(a, b) {
    return a + b;
}
const subtracao = (a, b) => {
    return a - b;
};
const multiplicar = (a, b) => {
    return a * b;
};
const dividir = (a, b) => {
    return a / b;
};
soma(10, 5);
subtracao(10, 5);
multiplicar(10, 5);
dividir(10, 5);
calculadora = {
    soma: soma,
    subtracao: subtracao,
    multiplicar: multiplicar,
    dividir: dividir,
};
console.log(soma, subtracao, multiplicar, dividir);
console.log({ calculadora });
//# sourceMappingURL=interface_funcoes.js.map