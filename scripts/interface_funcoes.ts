interface ISoma {
  (num1: number, num2: number): number;
}

let primeiraSoma: ISoma;

primeiraSoma = (numero1, numero2) => {
  return numero1 + numero2;
};

interface ICalculos {
  soma(a: number, b: number): number;
  subtracao(a: number, b: number): number;
  multiplicar(a: number, b: number): number;
  dividir(a: number, b: number): number;
}

let calculadora: ICalculos;

function soma(a: number, b: number): number {
  return a + b;
}

const subtracao = (a: number, b: number): number => {
  return a - b;
};

const multiplicar = (a: number, b: number): number => {
  return a * b;
};

const dividir = (a: number, b: number): number => {
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
