class Carro {
  constructor(modelo, ano) {
    this.modelo = modelo;
    this.ano = ano;
    this.ligado = false;
    this.velocidade = 0;
  }

  ligar() {
    if (!this.ligado) {
      this.ligado = true;
      console.log("O carro está ligado.");
    } else {
      console.log("O carro já está ligado.");
    }
  }

  desligar() {
    if (this.ligado) {
      this.ligado = false;
      this.velocidade = 0;
      console.log("O carro está desligado.");
    } else {
      console.log("O carro já está desligado.");
    }
  }

  acelerar() {
    if (this.ligado) {
      this.velocidade += 10;
      console.log("Acelerando. Velocidade atual: " + this.velocidade + " km/h");
    } else {
      console.log("Não é possível acelerar. O carro está desligado.");
    }
  }

  frear() {
    if (this.ligado && this.velocidade > 0) {
      this.velocidade -= 10;
      console.log("Freando. Velocidade atual: " + this.velocidade + " km/h");
    } else if (this.ligado) {
      console.log("O carro já está parado.");
    } else {
      console.log("Não é possível frear. O carro está desligado.");
    }
  }

  status() {
    return this.ligado ? "O carro está ligado." : "O carro está desligado.";
  }
}

// Testando a classe Carro
const carro1 = new Carro("Fusca", 1980);
const carro2 = new Carro("Civic", 2022);

console.log(carro1.status()); // O carro está desligado.
carro1.ligar();
console.log(carro1.status()); // O carro está ligado.
carro1.acelerar(); // Acelerando. Velocidade atual: 10 km/h
carro1.frear(); // Freando. Velocidade atual: 0 km/h
carro1.desligar();
console.log(carro1.status()); // O carro está desligado.

console.log(carro2.status()); // O carro está desligado.
carro2.ligar();
carro2.acelerar(); // Acelerando. Velocidade atual: 10 km/h
console.log(carro2.status()); // O carro está ligado.
carro2.desligar();
console.log(carro2.status()); // O carro está desligado.
