const array1 = [1, 4, 9, 16];

//passar a função map

const map1 = array1.map((element) => element * 2);
console.log(map1);
// [2,4,18,32]

// exercicio
const livros = [
  { nome: "python", preco: 20 },
  { nome: "postgree", preco: 30 },
  { nome: "js", preco: 10 },
];

const livros2 = livros.map((element) => {
  return { ...element, preco: element.preco * 0.8 };
});

console.log(livros2);
