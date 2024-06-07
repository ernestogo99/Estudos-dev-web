const elementoParaInserir = document.getElementById("livros");
const elementoComvalortotal = document.getElementById(
  "valor_total_livros_disponiveis"
);
function exibirlivrosnatela(listadelivros) {
  elementoComvalortotal.innerHTML = "";
  elementoParaInserir.innerHTML = "";
  listadelivros.forEach((livro) => {
    let disponibilidade = verificardisponibilidade(livro);
    elementoParaInserir.innerHTML += `<div class="livro">
      <img
        class="${disponibilidade}"
        src="${livro.imagem}"
        alt="${livro.alt}"
      />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao"> ${livro.autor}</p>
      <p class="livro__preco" id="preco">R$ ${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>`;
  });
}

function verificardisponibilidade(livro) {
  if (livro.quantidade > 0) {
    return "livro_imagens";
  } else {
    return "livro_imagens indisponivel";
  }
}
