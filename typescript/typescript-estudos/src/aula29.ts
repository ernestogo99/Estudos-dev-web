//generics
// <> essa é a sintaxe de generics , esse T  seria o tipo
// nao preciso usar os dois tipos,mas devo especificar na hora de chamar a função
const f_teste = <T, U>(v: T, r: U): U => {
  return r;
};

console.log(f_teste<number, string>(10, "oi"));
console.log(f_teste<string, number>("oi", 10));
console.log(f_teste<boolean, boolean>(true, false));

class C_teste<T> {
  valor: T;
  constructor(valor: T) {
    this.valor = valor;
  }
}

const ct1 = new C_teste<number>(10);
const ct2 = new C_teste<string>("oi");
console.log(ct1.valor);
console.log(ct2.valor);
