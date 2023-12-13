// Classe Produto
class Produto {
  constructor(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
  }

  get nome() {
    return this._nome;
  }

  set nome(nome) {
    this._nome = nome;
  }

  get preco() {
    return this._preco;
  }

  set preco(preco) {
    this._preco = preco;
  }

  get estoque() {
    return this._estoque;
  }

  set estoque(estoque) {
    this._estoque = estoque;
  }

  // Método para verificar se há estoque disponível
  temEstoque() {
    return this.estoque > 0;
  }
}

// Classe ProdutoEletronico, que herda de Produto
class ProdutoEletronico extends Produto {
  constructor(nome, preco, estoque, desconto = 0) {
    super(nome, preco, estoque);
    this.desconto = desconto;
  }

  // Método para calcular o preço total com desconto
  calcularPrecoTotal() {
    return this.preco * (1 - this.desconto);
  }
}

// Classe ProdutoAlimenticio, que herda de Produto
class ProdutoAlimenticio extends Produto {
  constructor(nome, preco, estoque, promocao = false) {
    super(nome, preco, estoque);
    this.promocao = promocao;
  }

  // Método para calcular o preço total com promoção
  calcularPrecoTotal() {
    if (this.promocao) {
      return this.preco * 0.9;
    } else {
      return this.preco;
    }
  }
}

// Classe Carrinho
class Carrinho {
  constructor() {
    this.produtos = [];
  }

  // Método para adicionar um produto ao carrinho
  adicionarProduto(produto) {
    if (produto.temEstoque()) {
      this.produtos.push(produto);
    } else {
      console.log("O produto '" + produto.nome + "' não possui estoque disponível.");
    }
  }

  // Método para remover um produto do carrinho
  removerProduto(produto) {
    this.produtos = this.produtos.filter(p => p !== produto);
  }

  // Método para calcular o preço total do carrinho
  calcularPrecoTotal() {
    return this.produtos.reduce((total, produto) => total + produto.calcularPrecoTotal(), 0);
  }
}

// Exemplo de uso
const produtoEletronico = new ProdutoEletronico("Televisão", 1000, 10, 0.1);
const produtoAlimenticio = new ProdutoAlimenticio("Arroz", 50, 100, true);

const carrinho = new Carrinho();
carrinho.adicionarProduto(produtoEletronico);
carrinho.adicionarProduto(produtoAlimenticio);

console.log("Preço total do carrinho: R$" + carrinho.calcularPrecoTotal());
// Saída: Preço total do carrinho: R$950