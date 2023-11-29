class Animal {
  constructor(nome, tipo) {
    this.nome = nome;
    this.tipo = tipo;
  }
}

class Mamifero extends Animal{
  amamentar(){
    console.log("Amamentar");
  }
}

class Ave extends Animal{
  voar(){
    console.log("Voar");
  }
}