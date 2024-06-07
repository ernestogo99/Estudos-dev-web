function fsoma(...n: number[]): number {
  let soma: number = 0;
  n.forEach((numero) => (soma += numero));
  //outra soluçao
  //for(let en of n ){
  // s+=en
  //}
  return soma;
}

console.log(fsoma(1, 5, 4, 40, 50, 80, 100));
//spread operators
