class Pessoa {
  nome: string;
  altura: number;
  constructor(nome: string, altura: number) {
    this.nome = nome;
    this.altura = altura;
  }
}

class Objeto {
  nome: string;
  constructor(nome: string) {
    this.nome = nome;
  }
}

const Coisas: string[] = ["corda", "pilha", "lampada"];
// fica fora da chave o elemento exportado no export default, pois ele é o padrão
export default Pessoa;
export { Coisas, Objeto };
