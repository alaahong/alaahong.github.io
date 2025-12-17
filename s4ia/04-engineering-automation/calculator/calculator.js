(function () {
  'use strict';

  var displayMain = document.getElementById('calc-display-main');
  var keyboard = document.getElementById('calc-keyboard');
  var clearAllBtn = document.getElementById('calc-key-clear-all');
  var clearEntryBtn = document.getElementById('calc-key-clear-entry');

  var currentInput = '0';
  var previousValue = null;
  var operator = null;
  var lastOperand = null; // for repeated equals
  var hasError = false;

  function updateDisplay(value) {
    displayMain.value = value;
  }

  function resetAll() {
    currentInput = '0';
    previousValue = null;
    operator = null;
    lastOperand = null;
    hasError = false;
    updateDisplay(currentInput);
  }

  function clearEntry() {
    if (hasError) {
      resetAll();
      return;
    }
    currentInput = '0';
    updateDisplay(currentInput);
  }

  function appendDigit(digit) {
    if (hasError) {
      resetAll();
    }
    if (currentInput === '0') {
      currentInput = String(digit);
    } else {
      currentInput += String(digit);
    }
    updateDisplay(currentInput);
  }

  function appendDecimal() {
    if (hasError) {
      resetAll();
    }
    if (currentInput.indexOf('.') === -1) {
      currentInput += '.';
      updateDisplay(currentInput);
    }
  }

  function performOperation() {
    if (operator === null || previousValue === null) {
      return;
    }
    var currentValue = parseFloat(currentInput);
    if (isNaN(currentValue)) {
      currentValue = 0;
    }

    var result;
    if (operator === 'add') {
      result = previousValue + currentValue;
    } else if (operator === 'sub') {
      result = previousValue - currentValue;
    } else if (operator === 'mul') {
      result = previousValue * currentValue;
    } else if (operator === 'div') {
      if (currentValue === 0) {
        hasError = true;
        updateDisplay('Error');
        return;
      }
      result = previousValue / currentValue;
    }

    // basic precision handling: round to 10 decimal places then trim
    result = parseFloat(result.toFixed(10));

    previousValue = result;
    currentInput = String(result);
    updateDisplay(currentInput);
  }

  function setOperator(newOp) {
    if (hasError) {
      resetAll();
    }
    var currentValue = parseFloat(currentInput);
    if (previousValue === null) {
      previousValue = isNaN(currentValue) ? 0 : currentValue;
    } else if (operator !== null && currentInput !== '0') {
      performOperation();
      previousValue = parseFloat(currentInput);
    }
    operator = newOp;
    lastOperand = null;
    currentInput = '0';
  }

  function handleEqual() {
    if (hasError) {
      resetAll();
      return;
    }
    var currentValue = parseFloat(currentInput);
    if (operator !== null && !isNaN(currentValue)) {
      lastOperand = currentValue;
      performOperation();
      operator = null;
    } else if (operator === null && previousValue !== null && lastOperand !== null) {
      // repeat last operation if desired (optional behavior)
      currentInput = String(lastOperand);
      performOperation();
    }
  }

  function handleKeyClick(event) {
    var target = event.target;
    if (!target || !target.getAttribute) {
      return;
    }
    if (!target.classList.contains('calc-key')) {
      return;
    }

    var role = target.getAttribute('data-role');

    if (role === 'key-digit') {
      appendDigit(target.getAttribute('data-value'));
    } else if (role === 'key-decimal') {
      appendDecimal();
    } else if (role === 'key-operator') {
      setOperator(target.getAttribute('data-op'));
    } else if (role === 'key-equal') {
      handleEqual();
    }
  }

  // Attach events
  if (keyboard) {
    keyboard.addEventListener('click', handleKeyClick);
  }
  if (clearAllBtn) {
    clearAllBtn.addEventListener('click', resetAll);
  }
  if (clearEntryBtn) {
    clearEntryBtn.addEventListener('click', clearEntry);
  }

  // initialize
  resetAll();
})();

