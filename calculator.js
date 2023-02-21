function add() {
  const input1 = parseFloat(document.getElementById('input1').value);
  const input2 = parseFloat(document.getElementById('input2').value);
  const result = input1 + input2;
  document.getElementById('result').innerHTML = result;
}

function subtract() {
  const input1 = parseFloat(document.getElementById('input1').value);
  const input2 = parseFloat(document.getElementById('input2').value);
  const result = input1 - input2;
  document.getElementById('result').innerHTML = result;
}

function multiply() {
  const input1 = parseFloat(document.getElementById('input1').value);
  const input2 = parseFloat(document.getElementById('input2').value);
  const result = input1 * input2;
  document.getElementById('result').innerHTML = result;
}

function divide() {
  const input1 = parseFloat(document.getElementById('input1').value);
  const input2 = parseFloat(document.getElementById('input2').value);
  const result = input1 / input2;
  document.getElementById('result').innerHTML = result;
}
