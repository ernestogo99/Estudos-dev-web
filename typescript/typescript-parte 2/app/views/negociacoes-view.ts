import { negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class Negociacoesview extends View<Negociacoes> {
  protected template(model: Negociacoes): string {
    return `
    <table class="table table-hover ta  ble-bordered">
        <thead>
            <tr>
                <th>Data</th>
                <th>Quantidade</th>
                <th>Valor</th>
            </tr>
        </thead>
        <tbody>
            ${model
              .lista()
              .map((negociacao) => {
                return `
                    <tr>
                        <td>
                            ${this.formatar(negociacao.data)}
                        </td>
                        <td>
                            ${negociacao.quantidade}
                        </td>
                        <td>
                            ${negociacao.valor}
                        </td>
                    </tr>
                `;
              })
              .join(" ")}
        </tbody>
    </table>
    
    
    `;
  } //serve para declarar o template da minha view

  private formatar(data: Date): string {
    return new Intl.DateTimeFormat().format(data);
  }
}
