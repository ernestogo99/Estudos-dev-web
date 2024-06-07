"use strict";
class Computador {
    nome;
    ram;
    cpu;
    ligado;
    constructor(nome, ram, cpu) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
    }
    info() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Ram: ${this.ram}`);
        console.log(`Cpu: ${this.cpu}`);
        console.log(`Ligado: ${this.ligado}`);
        console.log("---------------------");
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
}
const c1 = new Computador("rapidão", 4, 123);
const c2 = new Computador("carão", 8, 456);
const c3 = new Computador("gamer", 16, 690);
console.log(c1);
console.log(c2);
console.log(c3.nome);
c1.ligar();
c1.info();
c2.info();
c3.info();
