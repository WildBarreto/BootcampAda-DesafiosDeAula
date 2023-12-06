class Autor {
  constructor(nome, nacionalidade) {
    this.nome = nome;
    this.nacionalidade = nacionalidade;
  }

  exibirDetalhes() {
    console.log(`Autor: ${this.nome}  Nacionalidade: ${this.nacionalidade}`)
  }
}

class Livro {
  constructor(titulo, anoPublicacao, autor) {
    this.titulo = titulo;
    this.anoPublicacao = anoPublicacao;
    this.autor = autor;
  }

  detalhesDoLivro() {
    console.log(`
      Título: ${this.titulo}  
      Ano de publicação: ${this.anoPublicacao}
      Autor:
        Nome: ${this.autor.nome}
        Nacionalidade: ${this.autor.nacionalidade}
      `)
  }
}

class Biblioteca {
  constructor() {
    this.livros = []
  }

  adicionar(livro) {
    this.livros.push(livro);
  }

  listar() {
    for (let livro of this.livros) {
      console.log(livro);
    }
  }

  buscar(autor) {
    let resultadoDaBusca = this.livros.filter((livro) => livro.autor.nome === autor);
    
    return resultadoDaBusca
  }
}
// Autores brasileiros
const machadoDeAssis = new Autor("Machado de Assis", "Brasil");
const joséDeAlencar = new Autor("José de Alencar", "Brasil");
const clariceLispector = new Autor("Clarice Lispector", "Brasil");
const pauloCoelho = new Autor("Paulo Coelho", "Brasil");
const jorgeAmado = new Autor("Jorge Amado", "Brasil");

// Livros brasileiros
const domCasmurro = new Livro("Dom Casmurro", 1899, machadoDeAssis);
const iracema = new Livro("Iracema", 1865, joséDeAlencar);
const aHoraDaEstrela = new Livro("A Hora da Estrela", 1977, clariceLispector);
const oAlquimista = new Livro("O Alquimista", 1988, pauloCoelho);
const gabrielaCravoECanela = new Livro("Gabriela, Cravo e Canela", 1958, jorgeAmado);

// Autores internacionais
const jRRTolkien = new Autor("J.R.R. Tolkien", "Inglaterra");
const georgeRRMartin = new Autor("George R.R. Martin", "Estados Unidos");
const cSLewis = new Autor("C.S. Lewis", "Inglaterra");
const jKRowling = new Autor("J.K. Rowling", "Reino Unido");

// Livros internacionais
const oSenhorDosAneis = new Livro("O Senhor dos Anéis", 1954 - 1955, jRRTolkien);
const asCrônicasDeGeloEFogo = new Livro("As Crônicas de Gelo e Fogo", 1996, georgeRRMartin);
const asCrônicasDeNárnia = new Livro("As Crônicas de Nárnia", 1950 - 1956, cSLewis);
const harryPotterEPedraFilosofal = new Livro("Harry Potter e a Pedra Filosofal", 1997, jKRowling);

const biblioteca = new Biblioteca();

biblioteca.adicionar(domCasmurro);
biblioteca.adicionar(iracema);
biblioteca.adicionar(aHoraDaEstrela);
biblioteca.adicionar(oAlquimista);
biblioteca.adicionar(gabrielaCravoECanela);
biblioteca.adicionar(oSenhorDosAneis);
biblioteca.adicionar(asCrônicasDeGeloEFogo);
biblioteca.adicionar(asCrônicasDeNárnia);
biblioteca.adicionar(harryPotterEPedraFilosofal);


biblioteca.buscar("George R.R. Martin")

biblioteca.buscar("Machado de Assis")
console.log("teste")