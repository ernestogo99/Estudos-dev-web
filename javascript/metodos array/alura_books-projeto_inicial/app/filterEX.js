const words = ["spray", "limit", "elite", "exuberant", "destruction"];

const result = words.filter((word) => word.length > 6);
console.log(result);
//exuberant e destruction

//ex2

const idades = [10, 22, 42, 16, 50];

const podeDirigir = idades.filter((idade) => {
  return idade >= 18;
});

console.log(idades);
console.log(podeDirigir);
