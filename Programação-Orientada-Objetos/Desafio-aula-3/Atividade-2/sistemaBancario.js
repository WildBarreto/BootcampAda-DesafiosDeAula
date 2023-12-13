class Cliente {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.contas = [];
  }

  adicionarConta(conta) {
    this.contas.push(conta);
  }
}

class Conta {
  #saldo;
  constructor(saldo = 0) {
    this.#saldo = saldo;
  }
  depositar(valor) {
    try {
      if (valor > 0) {
        this.#saldo += valor;
        alert(`Deposito de R$${valor} realizado com sucesso. Novo saldo ${this.#saldo}`)
        this.consultarSaldo()
      } else {
        throw new Error("Valor do deposito deve ser maior que zero.")
      }
    } catch (error) {
      alert(error.message)
    }

  }

  saque(valor) {
    try {
      if (valor > 0 && valor < this.#saldo) {
        this.#saldo -= valor;
        alert(`Saque de R$${valor} realizado com sucesso. Novo saldo ${this.#saldo}`)
        this.consultarSaldo()
      } else if (valor < this.#saldo) {
        throw new Error("Excedeu limite da conta, saldo insuficiente")
      } else if (valor < 0) {
        throw new Error("Valor do saque deve ser maior que 0")
      }
    } catch (error) {
      alert(error.message)
    }
  }

  consultarSaldo() {
    console.log(`Saldo atual é ${this.#saldo}`)
  }
}

class ContaCorrente extends Conta {
  constructor(saldo = 0) {
    super(saldo);
    super.depositar();
    super.saque();
    super.consultarSaldo()
    this.taxaDeJuros = taxaDeJuros;
  }
}

class ContaPoupanca extends Conta { 
  constructor(saldo = 0, rendimentoMensal = 0.05) {
    super(saldo);
    this.rendimentoMensal = rendimentoMensal;
  }
  renderRendimento() {
    return this.saldo * this.rendimentoMensal;
  }
}


let teste = new Conta()

teste.depositar(100)
teste.depositar(300)

//teste.consultarSaldo()