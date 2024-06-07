let numeros: number[] = [10, 20, 30];

//outra forma de declarar
//let numbers: Array<number | string> = [40, 50, 60, "c++"];

//outra forma
//let numeros: (number | string)[] = [20, 30, 40, "c++"];

numeros.push(50); //insere no final do array
numeros.unshift(5); //insere no inicio do array
numeros.pop(); //retira o elemento no final do array
numeros.shift(); //retira o elemento no inicio do array
console.log(numeros);
//readonlyarray
let numeros_ro: ReadonlyArray<number> = [100, 200, 300];
//ele descarta métodos de array que podem alterar os elementos desse array, já que não queremos realizar operações nele

const novovetor = numeros_ro.map((numero) => numero * 2);

console.log(numeros_ro);
console.log(novovetor);
