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

  if (num === "0" || (num === "00" && isOperator(input.value.slice(-1)))) {
    return;
  }

  input.value += num;
}

function clearInput() {
  document.getElementById("numberInput").value = "";
}

function delPressed() {
  const input = document.getElementById("numberInput");

  if (input.value.slice(-1) === "." && input.value.slice(-2, -1) === "0") {
    input.value = input.value.slice(0, -2);
    return;
  }

  input.value = input.value.slice(0, -1);
}

function operatorPressed(op) {
  const input = document.getElementById("numberInput");

  if (input.value === "" && op !== "-") {
    return;
  }

  if (isOperator(input.value.slice(-1))) {
    input.value = input.value.slice(0, -1);

    if (input.value === "") {
      input.value += "-";
      return;
    }
    input.value += op;
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

  if (input.value === "" || isOperator(input.value.slice(-1))) {
    input.value += "0.";
    return;
  }

  if (input.value.slice(-1) === ".") {
    return;
  }

  for (let i = input.value.length - 1; i >= 0; i--) {
    if (isOperator(input.value.at(i))) {
      break;
    }

    if (input.value.at(i) === ".") {
      return;
    }
  }

  input.value += ".";
}
