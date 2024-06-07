const tecla_pom = document.querySelector(".tecla_pom");
const som_tecla_pom = document.querySelector("#som_tecla_pom");
const lista = document.querySelectorAll(".tecla");

tocasom = (id_elemento_audio) => {
  const elemento = document.querySelector(id_elemento_audio).play();
  if (elemento === null) {
    alert("elemento não encontrado");
  }
};

for (let i = 0; i < lista.length; i++) {
  const teclas = lista[i];
  const instrumento = teclas.classList[1];

  teclas.onclick = () => {
    tocasom(`#som_${instrumento}`);
  };

  teclas.onkeydown = (evento) => {
    if (evento.code === "Space" || evento.code === "Enter") {
      teclas.classList.add("ativa");
    }
  };

  teclas.onkeyup = () => {
    teclas.classList.remove("ativa");
  };
}
