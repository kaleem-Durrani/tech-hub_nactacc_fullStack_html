function numberPressed(num) {
  const input = document.getElementById("numberInput");

  if (
    (num === "0" && input.value === "0") ||
    (num === "00" && input.value === "0")
  ) {
    return;
  }

  if (num === "00" && input.value === "") {
    input.value = "0";
    return;
  }

  if (input.value === "0") {
    input.value = num;
    return;
  }

  input.value += num;
}

function clearInput() {
  document.getElementById("numberInput").value = "";
}

function delPressed() {
  const input = document.getElementById("numberInput");
  input.value = input.value.slice(0, -1);
}

function operatorPressed(op) {
  const input = document.getElementById("numberInput");

  if (input.value === "" && op !== "-") {
    return;
  }

  if (isOperator(input.value.slice(-1))) {
    return;
  }

  input.value += op;
}

function equalPressed() {
  const input = document.getElementById("numberInput");

  if (isOperator(input.value.slice(-1))) {
    return;
  }

  input.value = eval(input.value);
}

function isOperator(char) {
  return char === "*" || char === "-" || char === "+" || char === "/";
}

function dotPressed() {
  const input = document.getElementById("numberInput");

  input.value += ".";
}
