"use strict";
class Computador {
    nome = "computador";
    ram = 0;
    cpu = 0;
    ligado = false;
}
const c1 = new Computador();
const c2 = new Computador();
const c3 = new Computador();
c1.nome = "rapidão";
c2.nome = "carão";
c3.nome = "gamer";
console.log(c1.nome);
console.log(c2.nome);
console.log(c3.nome);
