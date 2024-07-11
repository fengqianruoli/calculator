let display = document.getElementById('display');
let currentInput = '';
let operator = null;
let firstOperand = null;

function input(value) {
    if (display.innerText === '0' && value !== '.') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
    currentInput += value;
}

function clearDisplay() {
    display.innerText = '0';
    currentInput = '';
    operator = null;
    firstOperand = null;
}

function deleteLast() {
    display.innerText = display.innerText.slice(0, -1) || '0';
    currentInput = currentInput.slice(0, -1);
}

function calculate() {
    try {
        display.innerText = eval(currentInput.replace('÷', '/').replace('×', '*'));
        currentInput = display.innerText;
    } catch {
        display.innerText = 'Error';
        currentInput = '';
    }
}
