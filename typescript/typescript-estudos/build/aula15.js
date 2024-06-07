"use strict";
function fsoma(...n) {
    let soma = 0;
    n.forEach((numero) => (soma += numero));
    return soma;
}
console.log(fsoma(1, 5, 4, 40, 50, 80, 100));
