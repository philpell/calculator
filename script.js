//Create a basic calculator
//Set up the initial data variables
const inputCalculation = document.querySelector('[data-inputScreen]')
const outputSum = document.querySelector('[data-outputScreen]')
const numberBtns = document.querySelectorAll('[data-number]')
const opsBtns = document.querySelectorAll('[data-operation]')
const equalsBtn = document.querySelectorAll('[data-equals]')
const clearEntryBtn = document.querySelector('[data-clear-entry]')
const clearAllBtn = document.querySelectorAll('[data-clear-all]')

//Set up the initial JS variables
let firstValue = '';
let secondValue = '';
let sumTotal = 0;
let operator = '';
let inputCalc ='';
document.getElementById("inputScreen").textContent = ('');

//Add event listener to number buttons to record click and perform action 
numberBtns.forEach(button => {
  button.addEventListener('click', function(e){
    if (button.getAttribute("data-number") >= "0" && button.getAttribute("data-number") <= "9") {
      firstValue = firstValue + parseInt(button.getAttribute("data-number"), 10);
      document.getElementById("inputScreen").textContent = (inputCalc + firstValue);
      document.getElementById("outputScreen").textContent = (firstValue);
      return firstValue;
  }
})
})

//Add event listener to operator buttons to record click and perform action 
opsBtns.forEach(button => {
  button.addEventListener('click', function(e){
    if (button.getAttribute("data-operation") == "+") {
      operator = button.getAttribute("data-operation");
      secondValue = firstValue;
      inputCalc = secondValue + ' + ';
      document.getElementById("inputScreen").textContent = (inputCalc);
      firstValue = '';
      return firstValue, inputCalc;

  } else if (button.getAttribute("data-operation") == "-") {
      operator = button.getAttribute("data-operation");
      secondValue = firstValue;
      inputCalc = secondValue + ' - ';
      document.getElementById("inputScreen").textContent = (inputCalc);
      firstValue = '';
      return firstValue, inputCalc;

  } else if (button.getAttribute("data-operation") == "*") {
      operator = button.getAttribute("data-operation");
      secondValue = firstValue;
      inputCalc = secondValue + ' x ';
      document.getElementById("inputScreen").textContent = (inputCalc);
      firstValue = '';
      return firstValue, inputCalc;

  } else if (button.getAttribute("data-operation") == "/") {
      operator = button.getAttribute("data-operation");
      secondValue = firstValue;
      inputCalc = secondValue + ' ÷ ';
      document.getElementById("inputScreen").textContent = (inputCalc);
      firstValue = '';
      return firstValue, inputCalc;
} 
})
})

//Add event listener to the equals buttons to record click and perform action 
equalsBtn.forEach(button => {
  button.addEventListener('click', function(e){
    if (operator == "+") {
      addValue(firstValue,secondValue)
      document.getElementById("inputScreen").textContent = (inputCalc + firstValue + ' = ');
      document.getElementById("outputScreen").textContent = (sumTotal);

  } else if (operator == "-") {
      subtractValue(firstValue,secondValue)
      document.getElementById("inputScreen").textContent = (inputCalc + firstValue + ' = ');
      document.getElementById("outputScreen").textContent = (sumTotal);

  } else if (operator == "*") {
      mulitplyValue(firstValue,secondValue)
      document.getElementById("inputScreen").textContent = (inputCalc + firstValue + ' = ');
      document.getElementById("outputScreen").textContent = (sumTotal);

  } else if (operator == "/") {
      divideValue(firstValue,secondValue)
      document.getElementById("inputScreen").textContent = (inputCalc + firstValue + ' = ');
      document.getElementById("outputScreen").textContent = (sumTotal);
  }
})
})

//Add event listener to clear button to record click and perform action 
clearAllBtn.forEach(button => {
  button.addEventListener('click', function(e){
    if (button.getAttribute("data-clear-all") == "C") {
      operator = '';
      secondValue = '';
      firstValue = '';
      inputCalc = '';
      document.getElementById("inputScreen").textContent = ('');
      document.getElementById("outputScreen").textContent = ('0');
  }
})
})

//Set up the functions to perform calculations based on operator
function addValue(firstValue,secondValue) {
  sumTotal = parseInt(firstValue) + parseInt(secondValue);
  return sumTotal;
};

function divideValue(firstValue,secondValue) {
  sumTotal = parseInt(secondValue) / parseInt(firstValue);
  return sumTotal;
};

function subtractValue(firstValue,secondValue) {
  sumTotal = parseInt(secondValue) - parseInt(firstValue);
  return sumTotal;
};

function mulitplyValue(firstValue,secondValue) {
  sumTotal = parseInt(secondValue) * parseInt(firstValue);
  return sumTotal;
};
