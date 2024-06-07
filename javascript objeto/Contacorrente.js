import { cliente } from "./Cliente.js";

export class contacorrente {
  agencia;
  _cliente;
  static numerodecontas = 0;

  set cliente(novovalor) {
    if (novovalor instanceof cliente) {
      this._cliente = novovalor;
    }
  }

  get cliente() {
    return this._cliente;
  }

  _saldo = 0; //_ é convenção para dizer que o campo é privado,
  //para dizer que um campo é privado usamos #

  get saldo() {
    return this._saldo;
  }

  constructor(cliente, agencia) {
    this.cliente = cliente;
    this.agencia = agencia;
    contacorrente.numerodecontas += 1;
  }
  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
  }

  depositar(valor) {
    if (valor <= 0) {
      return;
    }
    this._saldo += valor;
  }

  transferir(valor, conta) {
    const valorsacado = this.sacar(valor);
    conta.depositar(valorsacado);
  }
}
