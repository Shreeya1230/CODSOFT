let display = document.getElementById('display');
let currentInput = '0';

function updateDisplay() {
    display.textContent = currentInput;
}

function appendNumber(number) {
    if (currentInput === '0') {
        currentInput = number;
    } else {
        if (number === '.' && currentInput.includes('.')) {
            return;
        }
        currentInput += number;
    }
    updateDisplay();
}

function appendOperator(operator) {
    let lastChar = currentInput[currentInput.length - 1];
    if (['+', '-', '*', '/'].includes(lastChar)) {
        currentInput = currentInput.slice(0, -1) + operator;
    } else {
        currentInput += operator;
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    updateDisplay();
}

function deleteNumber() {
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = '0';
    }
    updateDisplay();
}

function calculate() {
    try {
        let result = eval(currentInput);
        currentInput = result.toString();
    } catch (error) {
        currentInput = 'Error';
    }
    updateDisplay();
}
