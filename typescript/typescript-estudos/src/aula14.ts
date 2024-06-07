// o javascript eleva a function,por isso executar ela antes do codigo function vai funcionar
teoste();
function teoste(): void {
  console.log("teste");
}
//mas isso não funciona na arrow function

const arrow = (txt: string): void => {
  console.log(txt);
};
arrow("curso de postgres");

const soma3 = (n1: number, n2: number): number => {
  return n1 + n2;
};

console.log(soma3(3, 40));

const soma_array = (n: number[]): number => {
  let s: number = 0;
  n.forEach((number) => (s += number));
  return s;
};

let numbers: number[] = [10, 20, 30, 40];
console.log(soma_array(numbers));
