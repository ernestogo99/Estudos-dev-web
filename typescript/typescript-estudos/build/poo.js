"use strict";
class Computador {
    nome;
    id;
    ram;
    cpu;
    ligado;
    constructor(nome, ram, cpu, id) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
        this.id = id;
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
    upRam(qtde) {
        if (qtde >= 0 && qtde <= 1000) {
            this.ram = qtde;
        }
        else {
            console.log(`a quantidade ${qtde} para o computador ${this.nome} não é permitida `);
        }
    }
}
const c1 = new Computador("rapidão", 4, 123, 1);
const c2 = new Computador("carão", 8, 456, 2);
const c3 = new Computador("gamer", 16, 690, 3);
console.log(c1);
console.log(c2);
console.log(c3.nome);
c1.ligar();
c2.upRam(100);
c1.info();
c2.info();
c3.info();
