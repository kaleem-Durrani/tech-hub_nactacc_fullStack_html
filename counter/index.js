function increment() {
  const textDisplay = document.getElementById("numberDisplay");

  let currentNumber = parseInt(textDisplay.textContent);

  currentNumber += 1;

  textDisplay.textContent = currentNumber;
}

function decrement() {
  const textDisplay = document.getElementById("numberDisplay");

  let currentNumber = parseInt(textDisplay.textContent);

  currentNumber -= 1;

  textDisplay.textContent = currentNumber;
}

function reset() {
  const textDisplay = document.getElementById("numberDisplay");

  let currentNumber = parseInt(textDisplay.textContent);

  currentNumber = 0;

  textDisplay.textContent = currentNumber;
}
