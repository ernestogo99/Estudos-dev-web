import { negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class Negociacaocontroller {
  private inputdata: HTMLInputElement;
  private inputquantidade: HTMLInputElement;
  private inputvalor: HTMLInputElement;
  private negociacoes = new Negociacoes();

  constructor() {
    this.inputdata = document.querySelector("#data");
    this.inputquantidade = document.querySelector("#quantidade");
    this.inputvalor = document.querySelector("#valor");
  }

  adiciona(): void {
    const negociacao = this.crianegociacao();
    negociacao.data.setDate(12);
    this.negociacoes.adiciona(negociacao);
    console.log(this.negociacoes.lista());
    this.limparformulario();
  }

  crianegociacao(): negociacao {
    const exp = /-/g;
    const date = new Date(this.inputdata.value.replace(exp, ","));
    const quantidade = parseInt(this.inputquantidade.value);
    const valor = parseFloat(this.inputvalor.value);
    return new negociacao(date, quantidade, valor);
  }

  limparformulario(): void {
    this.inputdata.value = "";
    this.inputquantidade.value = "";
    this.inputvalor.value = "";
    this.inputdata.focus();
  }
}
