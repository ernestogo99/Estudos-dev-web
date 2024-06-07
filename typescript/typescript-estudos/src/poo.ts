class Computador {
  nome: string; //parametro dentro da classe
  private id: number;
  private ram: number;
  private cpu: number;
  private ligado: boolean;

  constructor(nome: string, ram: number, cpu: number, id: number) {
    this.nome = nome;
    this.ram = ram;
    this.cpu = cpu;
    this.ligado = false;
    this.id = id;
  }
  info(): void {
    console.log(`Nome: ${this.nome}`);
    console.log(`Ram: ${this.ram}`);
    console.log(`Cpu: ${this.cpu}`);
    console.log(`Ligado: ${this.ligado}`);
    console.log("---------------------");
  }

  ligar(): void {
    this.ligado = true;
  }

  desligar(): void {
    this.ligado = false;
  }
  upRam(qtde: number): void {
    if (qtde >= 0 && qtde <= 1000) {
      this.ram = qtde;
    } else {
      console.log(
        `a quantidade ${qtde} para o computador ${this.nome} não é permitida `
      );
    }
  }
}

//instanciando a classe--criar o objeto da classe, a classe é o modelo,para operar a classe eu preciso do objeto
const c1 = new Computador("rapidão", 4, 123, 1); //objeto da classe computador
const c2 = new Computador("carão", 8, 456, 2);
const c3 = new Computador("gamer", 16, 690, 3);

console.log(c1);
console.log(c2);
console.log(c3.nome);
c1.ligar();
c2.upRam(100);
c1.info();
c2.info();
c3.info();
