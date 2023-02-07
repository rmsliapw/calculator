'use strict';

const display = document.querySelector('.display');
const btnNums = document.querySelectorAll('.btn-num');
const btnOps = document.querySelectorAll('.btn-op');
const btnClear = document.querySelector('.btn-clear')
const btnEqual = document.querySelector('.btn-equal');

btnNums.forEach(btn => {
  btn.addEventListener('click', renderNum);
})

btnOps.forEach(btn => {
  btn.addEventListener('click', renderOp);
})

btnEqual.addEventListener('click', () => {
  evaluate(display.textContent);
});

btnClear.addEventListener('click', () => {
  display.textContent = '';
})

function renderNum(e) {
  display.textContent += e.target.textContent;
}

function renderOp(e) {
  display.textContent += " " + e.target.textContent + ' ';
}

function evaluate(str) {
  const operators = ['/', '*', '-', '+']
  const symbols = str.split(' ');
  symbols.forEach((sym, index) => {
    if (operators.includes(sym)) {
      display.textContent = operate(sym, +symbols[index - 1], +symbols[index + 1]) + ' ';
    }
  })
}

function add(num1, num2) {
  return num1 + num2;
}

function substract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  if (operator === '+') {
    return add(num1, num2);
  } else if (operator === '-') {
    return substract(num1, num2);
  } else if (operator === '*') {
    return multiply(num1, num2);
  } else if (operator === '/') {
    return divide(num1, num2);
  }
}