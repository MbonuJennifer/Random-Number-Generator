const generateBtn = document.getElementById("generateBtn");
const randomNumberEl = document.getElementById("randomNumber");

generateBtn.addEventListener("click", generateRandomNumber);

function generateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  randomNumberEl.textContent = `Random Number: ${randomNumber}`;
}
