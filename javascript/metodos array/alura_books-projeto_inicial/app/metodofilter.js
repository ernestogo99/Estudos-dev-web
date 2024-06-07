const botoes = document.querySelectorAll(".btn");

botoes.forEach((botao) => botao.addEventListener("click", filtrarlivros));

function filtrarlivros() {
  const elementoBtn = document.getElementById(this.id);
  const categoria = elementoBtn.value;
  let livrosFiltrados =
    categoria == "disponivel"
      ? livros.filter((livro) => livro.quantidade > 0)
      : livros.filter((livro) => livro.categoria == categoria);

  exibirlivrosnatela(livrosFiltrados);
  if (categoria == "disponivel") {
    const valortotal = calcularvalortotal(livrosFiltrados);

    exibirvalortotallivros(valortotal);
  }
}

function exibirvalortotallivros(valortotal) {
  elementoComvalortotal.innerHTML = ` <div class="livros__disponiveis">
  <p>Todos os livros disponíveis por R$ <span id="valor">${valortotal}</span></p>
</div>`;
}
