const salesRecipt = 'régua/valor3=cupom0;lápis/valor0.5=cupom0;mochila/valor50=cupom10;estojo/valor8=cupom0;cola/valor4=cupom0;cola/valor4=cupom0;mochila/valor50=cupom10;lápis/valor0.5=cupom0;cola/valor4=cupom0;lápis/valor0.5=cupom0;mochila/valor50=cupom10;tesoura/valor5=cupom0;caneta/valor1=cupom0;cola/valor4=cupom0;estojo/valor8=cupom0;borracha/valor2=cupom0;caderno/valor15=cupom5;lápis/valor0.5=cupom0;lápis/valor0.5=cupom0;tesoura/valor5=cupom0;'

const salesList = [];

let products = salesRecipt.split(';');

let totalNoteValue = 0;
let fullDiscount = 0;


for (let productInformations of products) {
  let [name, informations] = productInformations.split('/');
  var [value, cupom] = informations ? informations.split('=') : [0, 'cupom0'];

  value = String(value);
  value = value.startsWith('valor') ? parseFloat(value.slice(5)) : parseFloat(value);
  totalNoteValue += value;

  cupom = String(cupom);
  cupom = cupom.startsWith('cupom') ? parseFloat(cupom.slice(5)) : parseFloat(cupom);
  fullDiscount += cupom;

  salesList.push({ produto: name, valor: value, cupom: cupom + '%' });
}

const totais = {
  valorTotal: 'R$' + totalNoteValue.toFixed(2),
  valorTotalDesconto: 'R$' + (totalNoteValue - (totalNoteValue * fullDiscount / 100)).toFixed(2),
  quantidadeDeProdutos: salesList.length
}

console.log(salesList)
console.log(totais)