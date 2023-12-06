class ConversorDeMoedas {
  constructor(taxaCambio) {
    this.taxaCambio = taxaCambio
  }

  converter(valor, moedaOrigem, moedaDestino) {
    const valorConvertido = valor * this.taxaCambio;
    alert(`${valor} ${moedaOrigem}  valor convertido: ${valorConvertido} ${moedaDestino}`)
    return valorConvertido;
  }

}

const conversorMoeda = new ConversorDeMoedas(5.0); // Taxa de câmbio: 5.0

// Convertendo moeda
const valorConvertido = conversorMoeda.converter(100, 'USD', 'BRL');