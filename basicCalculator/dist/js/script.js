(function () {
  // this object will be updated later on, mostly holding values
  const calculator = {
    displayValue: '0',
    initialNumber: null,
    operator: null,
    waitingForNumber: false
  };
  const calculatorButtons = document.querySelectorAll('.calculator-button');
  let displayValue = calculator.displayValue;
  let newResult = ''; // Add an event listener to each calculator button
  // Return the value or action performed

  calculatorButtons.forEach(button => {
    button.addEventListener('click', event => {
      const {
        target
      } = event;
      newResult = target.value.toString();

      if (target !== button) {
        return;
      }

      if (target.classList.contains('calculate-function')) {
        console.log("Target: " + 'calculate-function', "| Function: " + target.value);
      }

      if (target.id === 'decimal') {
        //console.log("Target: " + 'decimal', "| ID: " + target.value);
        return newResult;
      }

      if (target.classList.contains('number')) {
        console.log("Target: " + 'number', "| Value: " + target.value);
        return newResult;
      }

      if (target.classList.contains('modify-value')) {
        //console.log("Target: " + 'modify-value', "| Modify By: " + target.value);
        return newResult;
      }

      if (target.id === 'clearAll') {
        //console.log("Target: " + 'clearAll', "| ID: " + target.id);
        clearDisplay();
      }
    });
  });

  function clearDisplay() {
    calculator.displayValue = '0';
  }

  function displayResult(newResult) {
    const calculatorDisplay = document.getElementById('calculatorDisplay');
    calculatorDisplay.innerHTML = displayValue;

    if (newResult !== undefined) {
      calculatorDisplay.innerHTML = newResult;
    } else if (newResult === '0') {
      calculatorDisplay.innerHTML = newResult;
    }
  }

  displayResult();
})();