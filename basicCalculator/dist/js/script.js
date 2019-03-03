(function () {
  // this object will be updated later on, mostly holding values
  const calculator = {
    displayValue: '0',
    initialNumber: null,
    operator: null,
    waitingForNumber: false
  }; //console.log(calculator);

  const calculatorButtons = document.querySelectorAll('.calculator-button');
  const calculatorDisplay = document.getElementById('calculatorDisplay');
  let displayValue = calculator.displayValue; // Add an event listener to each calculator button

  calculatorButtons.forEach(button => {
    button.addEventListener('click', event => {
      const {
        target
      } = event;

      if (target !== button) {
        return;
      }

      if (target.classList.contains('calculate-function')) {
        //console.log("Target: " + 'calculate-function', "| Function: " + target.value);
        if (displayValue === '0') {
          alert("Please enter a number before attempting to perform a calculation.");
        }

        return;
      }

      if (target.id === 'decimal') {
        //console.log("Target: " + 'decimal', "| ID: " + target.value);
        if (!displayValue.includes('.') && displayValue !== '0') {
          displayResult(target.value);
        } else if (!displayValue.includes('.') && displayValue === '0') {
          displayResult('0' + target.value);
        } else {
          alert('There is already a decimal point in this number. Please choose a different function.');
        }

        return;
      }

      if (target.classList.contains('number')) {
        //console.log("Target: " + 'number', "| Value: " + target.value);
        displayResult(target.value);
        return;
      }

      if (target.classList.contains('modify-value')) {
        //console.log("Target: " + 'modify-value', "| Modify By: " + target.value);
        //console.log(displayValue);
        if (target.id === 'percentage') {
          convertToPercentage();
          return;
        } else {
          if (displayValue === '0') {
            alert("Please enter a number before requesting its additive inverse.");
          } else {
            additiveInverse();
            return;
          }
        }
      }

      if (target.id === 'clearAll') {
        //console.log("Target: " + 'clearAll', "| ID: " + target.id);
        clearDisplay();
      }
    });
  });

  function clearDisplay() {
    displayValue = '0';
    calculator.initialNumber = null;
    calculator.operator = null;
    calculator.waitingForNumber = false;
    calculatorDisplay.innerHTML = displayValue;
  }

  function displayResult(newResult) {
    if (displayValue === '0') {
      displayValue = newResult;
      calculator.initialNumber = newResult;
      calculatorDisplay.innerHTML = newResult;
    } else {
      displayValue += newResult;
      calculator.initialNumber = displayValue + newResult;
      calculatorDisplay.innerHTML = displayValue;
    }
  }

  function convertToPercentage() {
    displayValue = displayValue / 100;
    console.log(displayValue);
    displayValue = displayValue.toString();
    calculatorDisplay.innerHTML = displayValue;
  }

  function additiveInverse() {
    displayValue = -displayValue;
    console.log(displayValue);
    displayValue = displayValue.toString();
    calculatorDisplay.innerHTML = displayValue;
  }
})();