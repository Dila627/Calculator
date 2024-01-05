let currentInput = '';
let operator = '';
let previousInput = '';

function appendToDisplay(value) {
    currentInput += value;
    updateDisplay();
}

function setOperator(op) {
    operator = op;
    previousInput = currentInput;
    currentInput = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    previousInput = '';
    updateDisplay();
}

function calculateResult() {
    if (operator && currentInput !== '') {
        switch (operator) {
            case '+':
                currentInput = String(parseFloat(previousInput) + parseFloat(currentInput));
                break;
            case '-':
                currentInput = String(parseFloat(previousInput) - parseFloat(currentInput));
                break;
            case '*':
                currentInput = String(parseFloat(previousInput) * parseFloat(currentInput));
                break;
            case '/':
                currentInput = String(parseFloat(previousInput) / parseFloat(currentInput));
                break;
            default:
                break;
        }
        operator = '';
        previousInput = '';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}
