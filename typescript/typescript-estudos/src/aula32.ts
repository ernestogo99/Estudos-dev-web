// colocar o que eu quero relacionado a veiculos no namespace

enum Cores {
  "black",
  "white",
  "red",
  "yellow",
  "blue",
  "silver",
}

namespace Veiculos {
  export abstract class Carro {
    private nome: string;
    private motor: Motores.Motor;
    private cor: string;
    constructor(nome: string, motor: Motores.Motor, cor: Cores) {
      this.nome = nome;
      this.motor = motor;
      this.cor = Cores[cor];
    }
    ligar() {
      this.motor.liga = true;
    }
    desligar() {
      this.motor.liga = false;
    }
    get minhacor() {
      return this.cor;
    }

    get nomecarro() {
      return this.nome;
    }

    get estaligado() {
      if (this.motor.liga) {
        return "sim";
      } else {
        return "não";
      }
    }

    get minhapotencia() {
      return this.motor.potenciaa;
    }
  }

  export class Carroesportivo extends Carro {
    constructor(nome: string, cor: Cores) {
      super(nome, new Motores.Motor(6, 300, new Motores.Turbo(100)), 2);
    }
  }

  export class Carropopular extends Carro {
    constructor(nome: string, cor: Cores) {
      super(nome, new Motores.Motor(6, 240), 3);
    }
  }
}

namespace Motores {
  // o export me permite usar a classe fora de motores
  export class Turbo {
    potencia: number;
    constructor(potencia: number) {
      this.potencia = potencia;
    }
    get Pot() {
      return this.potencia;
    }
  }

  export class Motor {
    private ligado: boolean;
    private cilindros: number;
    private potencia: number;
    constructor(potencia: number, cilindros: number, turbo?: Turbo) {
      this.potencia = potencia + (turbo ? turbo.Pot : 0);
      this.cilindros = cilindros;
      this.ligado = false;
    }
    set liga(ligado: boolean) {
      this.ligado = ligado;
    }

    get liga() {
      return this.ligado;
    }

    get potenciaa() {
      return this.potencia;
    }
  }
}

const carro1 = new Veiculos.Carroesportivo("rapid", 5);
carro1.ligar();
console.log(
  `nome: ${carro1.nomecarro} cor: ${carro1.minhacor}, potencia: ${carro1.minhapotencia} , ligado: ${carro1.estaligado}`
);
const carro2 = new Veiculos.Carropopular("nus", 1);
carro2.ligar();
console.log(
  `nome: ${carro2.nomecarro} cor: ${carro2.minhacor}, potencia: ${carro2.minhapotencia} , ligado: ${carro2.estaligado}`
);
