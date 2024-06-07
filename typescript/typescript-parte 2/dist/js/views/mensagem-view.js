import { View } from "./view.js";
export class Mensagemview extends View {
    template(model) {
        return `
        <p class="alert alert-info">${model}</p>
    `;
    }
}
