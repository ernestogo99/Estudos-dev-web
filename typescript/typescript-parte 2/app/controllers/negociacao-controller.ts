import { Diasdasemana } from "../enuns/dias-da-semana.js";
import { negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { Mensagemview } from "../views/mensagem-view.js";
import { Negociacoesview } from "../views/negociacoes-view.js";

export class Negociacaocontroller {
  private inputdata: HTMLInputElement;
  private inputquantidade: HTMLInputElement;
  private inputvalor: HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacoesview = new Negociacoesview("#negociacoesview", true);
  private mensagensview = new Mensagemview("#mensagemView");

  constructor() {
    this.inputdata = document.querySelector("#data") as HTMLInputElement;
    this.inputquantidade = document.querySelector(
      "#quantidade"
    ) as HTMLInputElement;
    this.inputvalor = document.querySelector("#valor") as HTMLInputElement;
    this.negociacoesview.update(this.negociacoes);
  }

  public adiciona(): void {
    const Negociacao = negociacao.criade(
      this.inputdata.value,
      this.inputquantidade.value,
      this.inputvalor.value
    );
    if (!this.ehdiautil(Negociacao.data)) {
      this.mensagensview.update("apenas negociações em dias úteis são aceitas");
      return;
    }
    this.negociacoes.adiciona(Negociacao);
    this.limparformulario();
    this.atualizaview();
  }

  public ehdiautil(data: Date) {
    return (
      data.getDay() > Diasdasemana.domingo &&
      data.getDay() < Diasdasemana.sabado
    );
  }

  private crianegociacao(): negociacao {
    const exp = /-/g;
    const date = new Date(this.inputdata.value.replace(exp, ","));
    const quantidade = parseInt(this.inputquantidade.value);
    const valor = parseFloat(this.inputvalor.value);
    return new negociacao(date, quantidade, valor);
  }

  private limparformulario(): void {
    this.inputdata.value = "";
    this.inputquantidade.value = "";
    this.inputvalor.value = "";
    this.inputdata.focus();
  }

  private atualizaview(): void {
    this.negociacoesview.update(this.negociacoes);
    this.mensagensview.update("negociacao adicionada com sucesso");
  }
}
