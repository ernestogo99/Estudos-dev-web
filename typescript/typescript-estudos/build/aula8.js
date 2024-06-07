"use strict";
let dados = {
    nome: "ernesto",
    idade: 25,
    status: "ativo",
    ola: () => {
        console.log("oi");
    },
    info: (p) => console.log(p),
};
console.log(typeof dados);
console.log(dados);
dados.ola();
dados.info("postgres");
