const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
let firstNumber = '';
let operator = '';
let secondNumber = '';

function updateDisplay(){
    display.textContent = firstNumber + operator  + secondNumber;
}

function operate(){;
    const num1 = parseFloat(firstNumber)
    const num2 = parseFloat(secondNumber);
    let result = 0;

switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        display.textContent = "Error: Divide by zero";
        return;
      }
      result = num1 / num2;
      break;
  }

  firstNumber = result.toString();
  operator = '';
  secondNumber = '';
  updateDisplay();
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.textContent;
      if (!isNaN(value) || value === '.') {
        if (operator === '') {
          firstNumber += value;
        } else {
          secondNumber += value;
        }
        updateDisplay();
      } else if (value === '=') {
        operate();
      } else if (value === 'C') {
        firstNumber = '';
        operator = '';
        secondNumber = '';
        display.textContent = '0';
      } else {
        operator = value;
        updateDisplay();
      }
    });
  });
  
