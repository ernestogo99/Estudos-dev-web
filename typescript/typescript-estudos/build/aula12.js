"use strict";
function Teste() {
    console.log("teste");
}
Teste();
function logar(user, senha) {
    console.log(`user: ${user}`);
    console.log(`Senha: ${senha}`);
}
logar("ernestogo", "curioso");
function soma2(n1, n2) {
    return n1 + n2;
}
let resposta = soma2(10, 2);
let string_res = soma2(10, 5).toString();
console.log(resposta);
console.log(string_res);
