"use strict";
function soma(n1 = 0, n2 = 0) {
    return n1 + n2;
}
console.log(soma(5));
function novoUser(user, password, nome) {
    let dados = { user, password, nome };
    console.log(dados);
}
novoUser("ernestogo", "1243");
