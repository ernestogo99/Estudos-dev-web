"use strict";
class Computador {
    nome;
    ram;
    cpu;
    ligado;
    constructor(nome, ram, cpu, ligado) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = ligado;
    }
}
const c1 = new Computador("rapidão", 4, 123, true);
const c2 = new Computador("carão", 8, 456, false);
const c3 = new Computador("gamer", 16, 690, true);
console.log(c1);
console.log(c2);
console.log(c3.nome);
