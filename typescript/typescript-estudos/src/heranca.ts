//classe pai
//assunto:herança
//public:acessado de qualquer lugar
//private:acessado somente na sua propria classe
//protected:acessado somente na sua propria classe e nas classes filhas
//setter:modificar algo na classe
//getter:obter algo da classe,eu uso como propriedade , não como função, essa é a vantagem
abstract class Conta {
  private readonly numero: number;
  protected titular: string;
  private saaldo: number;

  constructor(titular: string) {
    this.numero = this.gerarnumeroconta();
    this.titular = titular;
    this.saaldo = 0;
  }

  private gerarnumeroconta(): number {
    return Math.floor(Math.random() * 10000) + 1;
  }

  protected info(): void {
    console.log(`titular ${this.titular}`);
    console.log(`numero da conta ${this.numero}`);
  }

  get saldo(): number {
    return this.saaldo;
  }

  //setter-me permite settar um valor na conta
  private set saldo(saldo: number) {
    this.saaldo = saldo;
  }

  protected deposito(valor: number): void {
    if (valor < 0) {
      console.log("valor inválido");
      return;
    }
    this.saldo += valor;
  }

  protected saque(valor: number): void {
    if (valor < 0) {
      console.log("valor inválido");
      return;
    }
    if (valor <= this.saaldo) {
      this.saldo -= valor;
    } else {
      console.log("saldo insuficiente");
    }
  }
}
//esse extends indica que a classe esta herdando da classe conta
//tudo que foi implementado em conta , tambem vale para pessoa fisica

interface tributos {
  taxaCalculo: number;
  calcularTrib(valor: number): number;
}
// esse implements diz que  a classe vai implementar a interface tributos

class Contapf extends Conta implements tributos {
  taxaCalculo = 10;
  calcularTrib(valor: number): number {
    return valor * this.taxaCalculo;
  }
  cpf: number;
  constructor(cpf: number, titular: string) {
    //o operador super invoca a classe pai da classe que eu estou
    // se eu não passar nada para o super,ele sabe que é o construtor
    // eu passei o numero e o titular para o construtor da classe pai
    super(titular);
    this.cpf = cpf;
  }
  info(): void {
    //chamando as informações do outro info pelo super
    console.log(`tipo.....: Pf`);
    super.info(); //chamando o info da classe pai para obter os outros parametros
    console.log(`cpf..... ${this.cpf}`);
    console.log("-------------------------");
  }
  deposito(valor: number): void {
    if (valor > 1000) {
      console.log("valor de depósito muito grande");
    } else {
      super.deposito(valor);
    }
  }
  saque(valor: number): void {
    if (valor > 1000) {
      console.log("valor de saque muito grande");
    } else {
      super.saque(valor);
    }
  }
}

class Contapj extends Conta {
  cnpj: number;
  constructor(cnpj: number, titular: string) {
    super(titular);
    this.cnpj = cnpj;
  }
  info(): void {
    console.log(`tipo.....: Pj`);
    super.info();
    console.log(`cnpj...... ${this.cnpj}`);
    console.log("-------------------------");
  }
  deposito(valor: number): void {
    if (valor > 10000) {
      console.log("valor muito alto para depositar");
    } else {
      super.deposito(valor);
    }
  }
  saque(valor: number): void {
    if (valor > 10000) {
      console.log("valor muito alto para sacar");
    } else {
      super.saque(valor);
    }
  }
}

//const conta1 = new Conta(12345, "ernestogo");
const conta1 = new Contapf(519991489, "erbet");
const conta2 = new Contapj(123450092, "cfbcursos");

conta1.info();
conta2.info();

conta1.deposito(101);
conta1.deposito(50);
console.log(conta1.saldo);
conta2.deposito(1000000);
conta2.deposito(5000);

conta2.saque(3000);
conta1.saque(200);

console.log(conta2.saldo);
