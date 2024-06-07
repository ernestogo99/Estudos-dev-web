import { negociacao } from "./negociacao.js";

export class Negociacoes {
  private negociacoes: negociacao[] = [];

  public adiciona(negociacao: negociacao) {
    this.negociacoes.push(negociacao);
  }

  public lista(): readonly negociacao[] {
    return this.negociacoes;
  }
}
