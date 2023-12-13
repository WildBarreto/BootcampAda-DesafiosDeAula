class Produto {
  constructor(nome, preco, quantidade, categoria) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
    this.categoria = categoria;
  }
}

class Categoria {
  constructor(nome) {
    this.nome = nome;
  }
}

class MovimentacaoEstoque {
  constructor(produto, quantidade, tipo, data) {
    this.produto = produto;
    this.quantidade = quantidade;
    this.tipo = tipo;
    this.data = data;
  }
}

class Estoque {
  constructor() {
    this.produtos = [];
    this.categorias = [];
    this.movimentacoes = [];
  }

  adicionarProduto(produto) {
    this.produtos.push(produto);
  }

  adicionarCategoria(categoria) {
    this.categorias.push(categoria);
  }

  realizarMovimentacao(movimentacao) {
    if (movimentacao.tipo === 'entrada') {
      movimentacao.produto.quantidade += movimentacao.quantidade;
    } else if (movimentacao.tipo === 'saída') {
      if (movimentacao.produto.quantidade >= movimentacao.quantidade) {
        movimentacao.produto.quantidade -= movimentacao.quantidade;
      } else {
        console.log('Operação inválida: estoque insuficiente.');
      }
    }

    this.movimentacoes.push(movimentacao);
  }

  calcularValorTotal() {
    return this.produtos.reduce((total, produto) => total + produto.preco * produto.quantidade, 0);
  }

  exibirInformacoesProduto(produto) {
    console.log(`Informações sobre o produto ${produto.nome}:`);
    console.log(`Preço: R$${produto.preco.toFixed(2)}`);
    console.log(`Quantidade em estoque: ${produto.quantidade}`);
    console.log(`Categoria: ${produto.categoria.nome}`);
  }

  exibirInformacoesCategoria(categoria) {
    console.log(`Informações sobre a categoria ${categoria.nome}:`);
    const produtosCategoria = this.produtos.filter(produto => produto.categoria === categoria);
    produtosCategoria.forEach(produto => {
      console.log(`- ${produto.nome}: ${produto.quantidade} unidades`);
    });
  }

  exibirHistoricoMovimentacoes() {
    console.log('Histórico de movimentações:');
    this.movimentacoes.forEach(movimentacao => {
      console.log(`${movimentacao.data.toISOString()} - ${movimentacao.tipo.toUpperCase()} de ${movimentacao.quantidade} unidades do produto ${movimentacao.produto.nome}`);
    });
  }
}

// Exemplo de Uso
const categoriaAlimentos = new Categoria("Alimentos");
const produtoArroz = new Produto("Arroz", 10, 50, categoriaAlimentos);
const produtoFeijao = new Produto("Feijão", 8, 30, categoriaAlimentos);

const movimentacaoEntrada = new MovimentacaoEstoque(
  produtoArroz,
  20,
  "entrada",
  new Date("2023-01-15")
);
const movimentacaoSaida = new MovimentacaoEstoque(
  produtoFeijao,
  10,
  "saída",
  new Date("2023-01-16")
);

const sistemaEstoque = new Estoque();
sistemaEstoque.adicionarCategoria(categoriaAlimentos);
sistemaEstoque.adicionarProduto(produtoArroz);
sistemaEstoque.adicionarProduto(produtoFeijao);
sistemaEstoque.realizarMovimentacao(movimentacaoEntrada);
sistemaEstoque.realizarMovimentacao(movimentacaoSaida);

// Exibir informações sobre o estoque
console.log(`Valor total em estoque: R$${sistemaEstoque.calcularValorTotal().toFixed(2)}`);
sistemaEstoque.exibirInformacoesProduto(produtoArroz);
sistemaEstoque.exibirInformacoesCategoria(categoriaAlimentos);
sistemaEstoque.exibirHistoricoMovimentacoes();



