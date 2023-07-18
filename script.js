//Create a basic calculator
//Set up the initial data variables
const numberBtns = document.querySelectorAll('[data-number]')
const opsBtns = document.querySelectorAll('[data-operation]')
const equalsBtn = document.querySelectorAll('[data-equals]')
const clearEntryBtn = document.querySelectorAll('[data-clear-entry]')
const clearAllBtn = document.querySelectorAll('[data-clear-all]')

//Set up the initial JS variables
let firstValue = '';
let secondValue = '';
let sumTotal = 0;
let firstOperator = '';
let secondOperator = '';
let displayOperator = '';
let inputCalc ='';
document.getElementById("inputScreen").textContent = ('');

//Add event listener to number buttons to record click and perform action 
numberBtns.forEach(button => {
  button.addEventListener('click', function(e){
    if (button.getAttribute("data-number") >= "0" && button.getAttribute("data-number") <= "9") {
      firstValue = firstValue + parseInt(button.getAttribute("data-number"), 10);
      document.getElementById("inputScreen").textContent = (inputCalc);
      document.getElementById("outputScreen").textContent = (firstValue);
      return firstValue;
  }
})
})

//Add event listener to operator buttons to record click and perform action 
opsBtns.forEach(button => {
  button.addEventListener('click', function(e){
    secondOperator = button.getAttribute("data-operation");
    if (secondOperator == "+") {
      setOperation();
      
    } else if (secondOperator == "-") {
      setOperation();

    } else if (secondOperator == "*") {
      setOperation();

    } else if (secondOperator == "/") {
      setOperation();
    }
  })
})

//Add event listener to the equals buttons to record click and perform action 
equalsBtn.forEach(button => {
  button.addEventListener('click', function(e){
    if (firstOperator == "+") {
      addValue(firstValue,secondValue)
      setAfterEquals()

  } else if (firstOperator == "-") {
      subtractValue(firstValue,secondValue)
      setAfterEquals()

  } else if (firstOperator == "*") {
      mulitplyValue(firstValue,secondValue)
      setAfterEquals()

  } else if (firstOperator == "/") {
      divideValue(firstValue,secondValue)
      setAfterEquals()
  }
})
})

//Add event listener to clear button to record click and perform action 
clearAllBtn.forEach(button => {
  button.addEventListener('click', function(e){
    if (button.getAttribute("data-clear-all") == "C") {
      clearScreens()
  }
})
})

//Add event listener to clear current entry button to record click and perform action 
clearEntryBtn.forEach(button => {
  button.addEventListener('click', function(e){
    if (button.getAttribute("data-clear-entry") == "CE") {
      if(firstOperator == '='){
        clearScreens()
      } else {
          firstValue = '';
          document.getElementById("inputScreen").textContent = (inputCalc + firstValue);
          document.getElementById("outputScreen").textContent = ('0');
          return firstValue;
      }
  }
})
})

//Set up functions to perform calculations based on operator
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

//Set up function to clear inputs
function clearScreens() {
  firstOperator = '';
  secondValue = '';
  firstValue = '';
  inputCalc = '';
  document.getElementById("inputScreen").textContent = ('');
  document.getElementById("outputScreen").textContent = ('0');
}

//Set up function for screen display after equals press
function setAfterEquals() {
  document.getElementById("inputScreen").textContent = (inputCalc + firstValue + ' = ');
  document.getElementById("outputScreen").textContent = (sumTotal);
  firstOperator = '=';
}

//Set up function to show current sum and operator 
function setOperation(){
  if(firstOperator == '='){
    setScreen();

} else if(firstOperator == '+'){
    addValue(firstValue,secondValue)
    setScreen()
    document.getElementById("outputScreen").textContent = (sumTotal);
    sumtotal = sumTotal + firstValue

} else if (firstOperator == "-") {
    subtractValue(firstValue,secondValue)
    setScreen()
    document.getElementById("outputScreen").textContent = (sumTotal);
    sumtotal = sumTotal + firstValue

} else if (firstOperator == "*") {
    mulitplyValue(firstValue,secondValue)
    setScreen()
    document.getElementById("outputScreen").textContent = (sumTotal);
    sumtotal = sumTotal + firstValue

} else if (firstOperator == "/") {
    divideValue(firstValue,secondValue)
    setScreen()
    document.getElementById("outputScreen").textContent = (sumTotal);
    sumtotal = sumTotal + firstValue

} else {
    firstOperator = secondOperator;
    secondOperator = '';
    secondValue = firstValue;
    convertOperator()
    inputCalc = secondValue + displayOperator;
    document.getElementById("inputScreen").textContent = (inputCalc);
    firstValue = '';
    return firstValue, inputCalc, firstOperator;
}
}

//Set up function to display correct values during the calculations
function setScreen(){
  firstOperator = secondOperator;
  secondOperator = '';
  secondValue = sumTotal;
  firstValue = '';
  convertOperator()
  inputCalc = sumTotal + displayOperator;
  document.getElementById("inputScreen").textContent = (inputCalc);
  return firstValue, inputCalc, firstOperator;
}

//Set up function to display correct symbols 
function convertOperator() {
  if(firstOperator == '+'){
      displayOperator = ' + ';
  } else if (firstOperator == '-') {
      displayOperator = ' - ';
  } else if (firstOperator == '*') {
      displayOperator = ' x ';
  }  else if (firstOperator == '/') {
      displayOperator = ' ÷ '
    }
  }