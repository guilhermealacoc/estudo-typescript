interface ISoma {
    (num1: number, num2: number): number;
}
declare let primeiraSoma: ISoma;
interface ICalculos {
    soma(a: number, b: number): number;
    subtracao(a: number, b: number): number;
    multiplicar(a: number, b: number): number;
    dividir(a: number, b: number): number;
}
declare let calculadora: ICalculos;
declare function soma(a: number, b: number): number;
declare const subtracao: (a: number, b: number) => number;
declare const multiplicar: (a: number, b: number) => number;
declare const dividir: (a: number, b: number) => number;
