// realiza a requisição
let livros = [];
const endpointAPI =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";

getbuscarlivroAPI();
async function getbuscarlivroAPI() {
  const res = await fetch(endpointAPI);
  livros = await res.json();
  let livrosComdesconto = aplicardesconto(livros);
  exibirlivrosnatela(livrosComdesconto);
}
