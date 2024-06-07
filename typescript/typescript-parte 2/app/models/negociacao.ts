export class negociacao {
  constructor(
    private readonly _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  get volume(): number {
    return this.quantidade * this.valor;
  }

  get data(): Date {
    const data = new Date(this._data.getTime());
    return data;
  }

  public static criade(
    datastring: string,
    quantidadestring: string,
    valorstring: string
  ): negociacao {
    const exp = /-/g;
    const date = new Date(datastring.replace(exp, ","));
    const quantidade = parseInt(quantidadestring);
    const valor = parseFloat(valorstring);
    return new negociacao(date, quantidade, valor);
  }
}
