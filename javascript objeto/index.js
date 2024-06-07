import { cliente } from "./Cliente.js";
import { contacorrente } from "./Contacorrente.js";

const cliente1 = new cliente("ricardo", 11223309);
const cliente2 = new cliente("alice", 11889908);

const contacorrentericardo = new contacorrente(cliente1, 1001);

contacorrentericardo.depositar(500);

const conta2 = new contacorrente(cliente2, 102);

let valor = 200;
contacorrentericardo.transferir(valor, conta2);

console.log(cliente1);
console.log(cliente2);
console.log(contacorrentericardo);
console.log(conta2);
console.log(contacorrente.numerodecontas);
