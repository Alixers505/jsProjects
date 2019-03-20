(function () {
  const calculator = {
    displayValue: '0',
    initialNumber: null,
    operator: null,
    secondNumber: '',
    waitingForNumber: false
  };
  const calculatorButtons = document.querySelectorAll('.calculator-button');
  const calculatorDisplay = document.getElementById('calculatorDisplay');
  let {
    displayValue,
    initialNumber,
    operator,
    secondNumber,
    waitingForNumber
  } = calculator; // Add an event listener to each calculator button

  calculatorButtons.forEach(button => {
    button.addEventListener('click', event => {
      const {
        target
      } = event;
      const verifyValue = `ID: ${target.id} | Value: ${target.value}`;

      if (target !== button) {
        return;
      }

      if (target.classList.contains('operator')) {
        console.log(verifyValue);

        if (initialNumber === null) {
          alert("Please enter a number before attempting to perform a calculation.");
        } else {
          displayValue = '';
          operator = target.id;
          secondNumber = '';
          waitingForNumber = true;
          return;
        }

        return;
      }

      if (target.id === 'performCalculation') {
        console.log(verifyValue);
        console.log(initialNumber, operator, secondNumber);
        initialNumber = performCalculation(initialNumber, secondNumber, operator);
        operator = null;
        return;
      }

      if (target.id === 'decimal') {
        console.log(verifyValue);

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
        console.log(verifyValue);
        displayResult(target.value);
        return;
      }

      if (target.classList.contains('modify-value')) {
        console.log(verifyValue);
        console.log(displayValue);

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
        console.log(verifyValue);
        clearDisplay();
      }
    });
  });

  function clearDisplay() {
    displayValue = '0';
    initialNumber = null;
    operator = null;
    secondNumber = '';
    waitingForNumber = false;
    calculatorDisplay.innerHTML = displayValue;
  }

  function displayResult(newResult) {
    if (!waitingForNumber) {
      if (displayValue === '0') {
        initialNumber = newResult;
        displayValue = initialNumber;
        calculatorDisplay.innerHTML = newResult;
        return initialNumber;
      } else {
        initialNumber += newResult;
        displayValue = initialNumber;
        calculatorDisplay.innerHTML = displayValue;
        return initialNumber;
      }
    } else {
      if (secondNumber === undefined) {
        secondNumber = newResult;
        displayValue = secondNumber;
        calculatorDisplay.innerHTML = newResult;
        return secondNumber;
      } else {
        secondNumber += newResult;
        displayValue = secondNumber;
        calculatorDisplay.innerHTML = displayValue;
        return secondNumber;
      }
    }
  }

  function convertToPercentage() {
    displayValue = parseFloat(calculatorDisplay.innerHTML) / 100; //console.log(displayValue);

    displayValue = displayValue.toString();
    calculatorDisplay.innerHTML = displayValue;
  }

  function additiveInverse() {
    displayValue = parseFloat(calculatorDisplay.innerHTML);
    displayValue = -displayValue; //console.log(displayValue);

    displayValue = displayValue.toString();
    calculatorDisplay.innerHTML = displayValue;
  }

  function performCalculation(initialNumber, secondNumber, operator) {
    let calculation;

    if (operator === 'add') {
      calculation = parseFloat(initialNumber) + parseFloat(secondNumber);
      calculatorDisplay.innerHTML = calculation.toString();
      initialNumber = calculation;
    }

    if (operator === 'subtract') {
      calculation = parseFloat(initialNumber) - parseFloat(secondNumber);
      calculatorDisplay.innerHTML = calculation.toString();
      initialNumber = calculation;
    }

    if (operator === 'divide') {
      calculation = parseFloat(initialNumber) / parseFloat(secondNumber);
      calculatorDisplay.innerHTML = calculation.toString();
      initialNumber = calculation;
    }

    if (operator === 'multiply') {
      calculation = parseFloat(initialNumber) * parseFloat(secondNumber);
      calculatorDisplay.innerHTML = calculation.toString();
      initialNumber = calculation;
    }

    console.log(calculation);
    return initialNumber;
  }
})();