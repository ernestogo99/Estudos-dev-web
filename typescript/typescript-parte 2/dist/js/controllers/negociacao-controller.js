import { Diasdasemana } from "../enuns/dias-da-semana.js";
import { negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { Mensagemview } from "../views/mensagem-view.js";
import { Negociacoesview } from "../views/negociacoes-view.js";
export class Negociacaocontroller {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesview = new Negociacoesview("#negociacoesview", true);
        this.mensagensview = new Mensagemview("#mensagemView");
        this.inputdata = document.querySelector("#data");
        this.inputquantidade = document.querySelector("#quantidade");
        this.inputvalor = document.querySelector("#valor");
        this.negociacoesview.update(this.negociacoes);
    }
    adiciona() {
        const Negociacao = negociacao.criade(this.inputdata.value, this.inputquantidade.value, this.inputvalor.value);
        if (!this.ehdiautil(Negociacao.data)) {
            this.mensagensview.update("apenas negociações em dias úteis são aceitas");
            return;
        }
        this.negociacoes.adiciona(Negociacao);
        this.limparformulario();
        this.atualizaview();
    }
    ehdiautil(data) {
        return (data.getDay() > Diasdasemana.domingo &&
            data.getDay() < Diasdasemana.sabado);
    }
    crianegociacao() {
        const exp = /-/g;
        const date = new Date(this.inputdata.value.replace(exp, ","));
        const quantidade = parseInt(this.inputquantidade.value);
        const valor = parseFloat(this.inputvalor.value);
        return new negociacao(date, quantidade, valor);
    }
    limparformulario() {
        this.inputdata.value = "";
        this.inputquantidade.value = "";
        this.inputvalor.value = "";
        this.inputdata.focus();
    }
    atualizaview() {
        this.negociacoesview.update(this.negociacoes);
        this.mensagensview.update("negociacao adicionada com sucesso");
    }
}
