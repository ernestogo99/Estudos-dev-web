const BtnordernarPorPreco = document.getElementById("btnOrdenarPorPreco");

BtnordernarPorPreco.addEventListener("click", ordenarlivrosPorpreco);

function ordenarlivrosPorpreco() {
  let livrosordenados = livros.sort((a, b) => a.preco - b.preco);
  exibirlivrosnatela(livrosordenados);
}
