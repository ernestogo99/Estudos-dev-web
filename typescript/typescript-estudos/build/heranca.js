"use strict";
class Conta {
    numero;
    titular;
    saaldo;
    constructor(titular) {
        this.numero = this.gerarnumeroconta();
        this.titular = titular;
        this.saaldo = 0;
    }
    gerarnumeroconta() {
        return Math.floor(Math.random() * 10000) + 1;
    }
    info() {
        console.log(`titular ${this.titular}`);
        console.log(`numero da conta ${this.numero}`);
    }
    get saldo() {
        return this.saaldo;
    }
    set saldo(saldo) {
        this.saaldo = saldo;
    }
    deposito(valor) {
        if (valor < 0) {
            console.log("valor inválido");
            return;
        }
        this.saldo += valor;
    }
    saque(valor) {
        if (valor < 0) {
            console.log("valor inválido");
            return;
        }
        if (valor <= this.saaldo) {
            this.saldo -= valor;
        }
        else {
            console.log("saldo insuficiente");
        }
    }
}
class Contapf extends Conta {
    taxaCalculo = 10;
    calcularTrib(valor) {
        return valor * this.taxaCalculo;
    }
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
    }
    info() {
        console.log(`tipo.....: Pf`);
        super.info();
        console.log(`cpf..... ${this.cpf}`);
        console.log("-------------------------");
    }
    deposito(valor) {
        if (valor > 1000) {
            console.log("valor de depósito muito grande");
        }
        else {
            super.deposito(valor);
        }
    }
    saque(valor) {
        if (valor > 1000) {
            console.log("valor de saque muito grande");
        }
        else {
            super.saque(valor);
        }
    }
}
class Contapj extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
    }
    info() {
        console.log(`tipo.....: Pj`);
        super.info();
        console.log(`cnpj...... ${this.cnpj}`);
        console.log("-------------------------");
    }
    deposito(valor) {
        if (valor > 10000) {
            console.log("valor muito alto para depositar");
        }
        else {
            super.deposito(valor);
        }
    }
    saque(valor) {
        if (valor > 10000) {
            console.log("valor muito alto para sacar");
        }
        else {
            super.saque(valor);
        }
    }
}
const conta1 = new Contapf(519991489, "erbet");
const conta2 = new Contapj(123450092, "cfbcursos");
conta1.info();
conta2.info();
conta1.deposito(101);
conta1.deposito(50);
console.log(conta1.saldo);
conta2.deposito(1000000);
conta2.deposito(5000);
conta2.saque(3000);
conta1.saque(200);
console.log(conta2.saldo);
