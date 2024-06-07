export class negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    static criade(datastring, quantidadestring, valorstring) {
        const exp = /-/g;
        const date = new Date(datastring.replace(exp, ","));
        const quantidade = parseInt(quantidadestring);
        const valor = parseFloat(valorstring);
        return new negociacao(date, quantidade, valor);
    }
}
