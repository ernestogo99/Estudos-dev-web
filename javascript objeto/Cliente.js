// quando eu faço um arquivo com letra maiscula, quer dizer que eu quero
// representar uma classe

export class cliente {
  nome;
  _cpf;

  get cpf() {
    return this._cpf;
  }

  constructor(nome, cpf) {
    this.nome = nome;
    this._cpf = cpf;
  }
}
