function add() {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  fetch(`/add/${num1}/${num2}`)
    .then(response => response.text())
    .then(data => {
      document.getElementById("result").textContent = data;
    });
}

function subtract() {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  fetch(`/subtract/${num1}/${num2}`)
    .then(response => response.text())
    .then(data => {
      document.getElementById("result").textContent = data;
    });
}

function multiply() {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  fetch(`/multiply/${num1}/${num2}`)
    .then(response => response.text())
    .then(data => {
      document.getElementById("result").textContent = data;
    });
}

function divide() {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  fetch(`/divide/${num1}/${num2}`)
    .then(response => response.text())
    .then(data => {
      document.getElementById("result").textContent = data;
    });
}
