"use strict";
function somarRenda(...meses) {
    return meses.reduce((rendaTotal, rendaAtual) => rendaTotal + rendaAtual, 0);
}
console.log(somarRenda(1000, 2000, 3000));
//# sourceMappingURL=rest_parameters.js.map