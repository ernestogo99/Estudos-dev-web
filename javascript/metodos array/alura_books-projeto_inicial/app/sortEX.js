const months = ["march", "jan", "feb", "dec"];
months.sort();
console.log(months);
//saida esperada:["dec,feb,jan,march"]

//ex2

const array1 = [1, 30, 4, 21, 1000];
array1.sort();
console.log(array1);
//saida esperada(1,1000,21,30,4)
// o método sort se baseia no unicode , ele observa o primeiro caractere

//ex3

let precos = [29.92, 11, 1, 101, 110];
// o que esperamos normalmente seria: 1,11,29.92,101,110
let precosordenados = precos.sort((a, b) => {
  return b - a; // do menor para o maior , se fosse b-a seria do maior para o menor
});

console.log(precosordenados);
