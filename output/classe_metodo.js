"use strict";
class Professor {
    constructor(nome, idade, materia) {
        this.nome = nome;
        this.idade = idade;
        this.materia = materia;
    }
    seApresentar() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos. Sou professor de ${this.materia}`;
    }
    dizerNotas(...notas) {
        const notasTotal = notas.reduce((total, notaAtual) => total + notaAtual, 0);
        return notasTotal / notas.length;
    }
}
const glaucio = new Professor("Glaucio Daniel", 30, "Programação");
console.log(glaucio.seApresentar());
console.log("========================================================");
const joaoCarlos = new Professor("João", 25, "Matemática");
console.log(joaoCarlos.seApresentar());
console.log(joaoCarlos.dizerNotas(10, 3, 4, 6));
//# sourceMappingURL=classe_metodo.js.map