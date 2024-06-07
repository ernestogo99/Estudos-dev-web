import { Negociacaocontroller } from "./controllers/negociacao-controller.js";
import { Negociacoesview } from "./views/negociacoes-view.js";
const controller = new Negociacaocontroller();
const form = document.querySelector(".form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    controller.adiciona();
  });
} else {
  throw Error(
    "não foi possível iniciar a aplicação,verifique se o form existe"
  );
}

const negociacoesview = new Negociacoesview("#negociacoesview");
