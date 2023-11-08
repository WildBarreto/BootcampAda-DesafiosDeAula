const partners = {
  19660156627897: "Fernanda Santos",
  23998058019370: " Rafael Souza",
  92291338611: "Maria Silva",
  55443795656: "Maria Souza",
  77743761456: "Ana Costa",
  47202302326: "Maria Ferreira",
  58017232567: "Sofia Costa",
  16733009491247: "Lucas Silva",
  63351859919: "Rafael Souza",
  84297701780: "Carlos Oliveira",
}
const groupedPartners = {
  PF: [],
  PJ: [],
}

for (let id in partners) {
  if (id.length == 11) {
    groupedPartners.PF.push({ partnersId: id, name: partners[id] });
  } else {
    groupedPartners.PJ.push({ partnersId: id, name: partners[id] });
  }
}
console.log(groupedPartners)