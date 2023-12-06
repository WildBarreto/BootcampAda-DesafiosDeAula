class ContadorDePalavras {
  constructor(texto) {
    this.texto = texto;
  }

  contarPalavras() {
    const palavras = this.texto.split(' ');
    console.log(`Número de palavras é ${palavras.length}`)
    return palavras.length;
  }
}

// Exemplo de uso
const contadorPalavras = new ContadorDePalavras('JavaScript é uma linguagem poderosa.');
const contagem = contadorPalavras.contarPalavras();
