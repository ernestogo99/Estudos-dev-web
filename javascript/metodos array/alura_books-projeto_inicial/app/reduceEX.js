const array = [1, 2, 3, 4];

const initialvalue = 0;
const SumwhithInitial = array.reduce(
  (previousvalue, currentvalue) => previousvalue + currentvalue + initialvalue
);

console.log(SumwhithInitial);
//saida esperada:10
//ex2
const preco = [10, 20, 70];
const precototal = preco.reduce((acc, atual) => acc + atual);
console.log(precototal);
