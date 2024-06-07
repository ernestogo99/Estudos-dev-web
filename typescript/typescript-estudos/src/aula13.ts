//colocando o =0 ficou como se o parametro fosse opcional

function soma(n1: number = 0, n2: number = 0): number {
  return n1 + n2;
}

console.log(soma(5));

//parametro opcional-colocar o ? no parametro
function novoUser(user: string, password: string, nome?: string): void {
  let dados = { user, password, nome };
  console.log(dados);
}

novoUser("ernestogo", "1243");
