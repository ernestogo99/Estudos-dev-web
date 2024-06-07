"use strict";
var Cores;
(function (Cores) {
    Cores[Cores["black"] = 0] = "black";
    Cores[Cores["white"] = 1] = "white";
    Cores[Cores["red"] = 2] = "red";
    Cores[Cores["yellow"] = 3] = "yellow";
    Cores[Cores["blue"] = 4] = "blue";
    Cores[Cores["silver"] = 5] = "silver";
})(Cores || (Cores = {}));
var Veiculos;
(function (Veiculos) {
    class Carro {
        nome;
        motor;
        cor;
        constructor(nome, motor, cor) {
            this.nome = nome;
            this.motor = motor;
            this.cor = Cores[cor];
        }
        ligar() {
            this.motor.liga = true;
        }
        desligar() {
            this.motor.liga = false;
        }
        get minhacor() {
            return this.cor;
        }
        get nomecarro() {
            return this.nome;
        }
        get estaligado() {
            if (this.motor.liga) {
                return "sim";
            }
            else {
                return "não";
            }
        }
        get minhapotencia() {
            return this.motor.potenciaa;
        }
    }
    Veiculos.Carro = Carro;
    class Carroesportivo extends Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(6, 300, new Motores.Turbo(100)), 2);
        }
    }
    Veiculos.Carroesportivo = Carroesportivo;
    class Carropopular extends Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(6, 240), 3);
        }
    }
    Veiculos.Carropopular = Carropopular;
})(Veiculos || (Veiculos = {}));
var Motores;
(function (Motores) {
    class Turbo {
        potencia;
        constructor(potencia) {
            this.potencia = potencia;
        }
        get Pot() {
            return this.potencia;
        }
    }
    Motores.Turbo = Turbo;
    class Motor {
        ligado;
        cilindros;
        potencia;
        constructor(potencia, cilindros, turbo) {
            this.potencia = potencia + (turbo ? turbo.Pot : 0);
            this.cilindros = cilindros;
            this.ligado = false;
        }
        set liga(ligado) {
            this.ligado = ligado;
        }
        get liga() {
            return this.ligado;
        }
        get potenciaa() {
            return this.potencia;
        }
    }
    Motores.Motor = Motor;
})(Motores || (Motores = {}));
const carro1 = new Veiculos.Carroesportivo("rapid", 5);
carro1.ligar();
console.log(`nome: ${carro1.nomecarro} cor: ${carro1.minhacor}, potencia: ${carro1.minhapotencia} , ligado: ${carro1.estaligado}`);
const carro2 = new Veiculos.Carropopular("nus", 1);
carro2.ligar();
console.log(`nome: ${carro2.nomecarro} cor: ${carro2.minhacor}, potencia: ${carro2.minhapotencia} , ligado: ${carro2.estaligado}`);
