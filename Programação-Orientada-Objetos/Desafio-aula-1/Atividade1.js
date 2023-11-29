class Pessoa {
  constructor(nome, idade, cidade) {
    this.nome = nome;
    this.idade = idade;
    this.cidade = cidade;
  }

  isBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
  }

  calcularIdadeBissextos(anoDesejado) {
    const anoAtual = new Date().getFullYear();
    let idade = this.idade;

    for (let i = anoAtual; i < anoDesejado; i++) {
      if (this.isBissexto(i)) {
        idade++;
      }
    }

    return idade;
  }
}

const pessoa = new Pessoa('Exemplo', 20, 'Cidade Exemplo');
const anoDesejado = 2050;

const idadeEm2050 = pessoa.calcularIdadeBissextos(anoDesejado);

console.log(`${pessoa.nome} terá ${idadeEm2050} anos em ${anoDesejado}.`);
