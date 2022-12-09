"use strict";
class Pessoa {
    constructor(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
}
const guilherme = new Pessoa("Guilherme", 22, 1.75);
console.log(guilherme.nome, guilherme.idade, guilherme.altura);
guilherme.nome = "Alacoc";
console.log(guilherme.nome, guilherme.idade, guilherme.altura);
//# sourceMappingURL=primeira_classe.js.map