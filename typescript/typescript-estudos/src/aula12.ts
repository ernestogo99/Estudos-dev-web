function Teste(): void {
  console.log("teste");
}

Teste();

function logar(user: string, senha: string): void {
  console.log(`user: ${user}`);
  console.log(`Senha: ${senha}`);
}

logar("ernestogo", "curioso");

function soma2(n1: number, n2: number): number {
  return n1 + n2;
}
let resposta: number = soma2(10, 2);
let string_res: string = soma2(10, 5).toString();
console.log(resposta);
console.log(string_res);
