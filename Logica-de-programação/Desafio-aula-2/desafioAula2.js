
const assessments = {
  "1": 2,
  "2": 15,
  "3": 18,
  "4 ": 25,
  "5 ": 40,
}

let totalScore = 0;

for (let stars in assessments) {
  const numberClients = assessments[stars];
  const score = parseInt(stars, 10);
  totalScore += numberClients * score;

}

const media = totalScore / 100;

const resultElement = document.getElementById("result");

resultElement.innerHTML = media;
console.log(media)