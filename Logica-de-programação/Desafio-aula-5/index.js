
let peso = prompt("Digite seu peso em KG");
let altura = parseFloat(prompt("Digite sua altura:").replace(',', '.'))

let imc = peso / (altura * altura);

let pesoIdeal = 22 * altura ** 2;
console.log(pesoIdeal)

console.log("Seu peso é: " + peso + "KG");
console.log("Sua altura é: " + altura);
console.log("Seu IMC é: " + imc)

if (imc < 18.5) {
  alert(`Seu IMC é: ${imc.toFixed(4)}, você está abaixo do peso, seu peso ideal é: ${pesoIdeal}KG`);
} else if (imc > 18.5 && imc < 24.9) {
  alert(`Seu IMC é: ${imc.toFixed(4)}, seu peso está normal, seu peso ideal é: ${pesoIdeal}KG`);
} else if (imc >= 25 && imc < 29.9) {
  alert(`Seu IMC é: ${imc.toFixed(4)}, você está com sobre peso seu peso ideal é: ${pesoIdeal}KG`);
} else {
  alert(`Seu IMC é: ${imc.toFixed(4)}, você está com obesidade seu peso ideal é: ${pesoIdeal}KG`);
}