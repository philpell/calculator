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
let workingCalc ='';
let sumCalc ='';
let decimalPoint = false;
let plusMinus = false;
let percentageValue = '';

document.getElementById("inputScreen").textContent = ('');

//Add event listener to number buttons to record click and perform action 
numberBtns.forEach(button => {
  button.addEventListener('click', function(e){
    //Clear the screen if the first button after equals is a number i.e. start new calculation
    if(firstOperator == '='){
      clearScreens();
      if (firstValue.toString().length < 15 && 
        (button.getAttribute("data-number") >= "0" && button.getAttribute("data-number") <= "9")) {
        firstValue = firstValue + parseInt(button.getAttribute("data-number"), 10);
        document.getElementById("inputScreen").textContent = (workingCalc);
        document.getElementById("outputScreen").textContent = (firstValue);
        sumCalc = '';

  }
    }

    else if (firstValue.toString().length < 15 && 
        (button.getAttribute("data-number") >= "0" && button.getAttribute("data-number") <= "9")) {
        firstValue = firstValue + parseInt(button.getAttribute("data-number"), 10);
        document.getElementById("inputScreen").textContent = (workingCalc);
        document.getElementById("outputScreen").textContent = (firstValue);
        sumCalc = '';

  }
})
})

//Add event listener to decimal point button to record click and perform action 
numberBtns.forEach(button => {
  button.addEventListener('click', function(e){
    //If decimal point has already been pressed, do nothing
    if (decimalPoint == true && button.getAttribute("data-number") == ".") {
      
  } else if(firstValue.toString().length < 15 && button.getAttribute("data-number") == ".") {
        firstValue = firstValue + button.getAttribute("data-number");
        document.getElementById("inputScreen").textContent = (workingCalc);
        document.getElementById("outputScreen").textContent = (firstValue);
        decimalPoint = true;
  }
  }
)}
)

//Add event listener to operator buttons to record click and perform action 
opsBtns.forEach(button => {
  button.addEventListener('click', function(e){
    secondOperator = button.getAttribute("data-operation");
    if (secondOperator == "+") {
      setOperation();
      decimalPoint = false;

    } else if (secondOperator == "-") {
      setOperation();
      decimalPoint = false;

    } else if (secondOperator == "*") {
      setOperation();
      decimalPoint = false;

    } else if (secondOperator == "/") {
      setOperation();
      decimalPoint = false;

    } else if (secondOperator == "%") {
      if(secondValue != ''){
        percentageValue = (secondValue/100) * firstValue
        document.getElementById("outputScreen").textContent = (firstValue + '%');
        decimalPoint = false;
        firstValue = percentageValue
      }

    } else if (secondOperator == "+/-"){
        if(firstOperator == '='|| firstValue == ''){

      } else if(plusMinus == false){
          firstValue = ('-' + firstValue)
          document.getElementById("outputScreen").textContent = (firstValue);
          plusMinus = true;
          
      } else if(plusMinus == true){
          firstValue = firstValue.slice(1);
          document.getElementById("outputScreen").textContent = (firstValue);
          plusMinus = false; 
          
      } 
    }
  })
})

//Add event listener to the equals buttons to record click and perform action 
equalsBtn.forEach(button => {
  button.addEventListener('click', function(e){
    decimalPoint = false;
    plusMinus = false;
    if (firstOperator == "+") {
      addValue(firstValue,secondValue)
      setAfterEquals();

  } else if (firstOperator == "-") {
      subtractValue(firstValue,secondValue)
      setAfterEquals();

  } else if (firstOperator == "*") {
      mulitplyValue(firstValue,secondValue)
      setAfterEquals();

  } else if (firstOperator == "/") {
      divideValue(firstValue,secondValue)
      setAfterEquals();
  }
})
})

//Add event listener to clear button to record click and perform action 
clearAllBtn.forEach(button => {
  button.addEventListener('click', function(e){
    plusMinus = false;
    decimalPoint = false;
    if (button.getAttribute("data-clear-all") == "C") {
      clearScreens()
  }
})
})

//Add event listener to clear current entry button to record click and perform action 
clearEntryBtn.forEach(button => {
  button.addEventListener('click', function(e){
    decimalPoint = false;
    if (button.getAttribute("data-clear-entry") == "CE") {
      if(firstOperator == '='){
        clearScreens()

    } else {
        firstValue = '';
        plusMinus = false;
        document.getElementById("inputScreen").textContent = (workingCalc + firstValue);
        document.getElementById("outputScreen").textContent = ('0');
      }
    }
})
})

//Set up functions to perform calculations based on operator
function addValue(firstValue,secondValue) {
  sumTotal = parseFloat(secondValue) + parseFloat(firstValue);

};

function divideValue(firstValue,secondValue) {
  sumTotal = parseFloat(secondValue) / parseFloat(firstValue);

};

function subtractValue(firstValue,secondValue) {
  sumTotal = parseFloat(secondValue) - parseFloat(firstValue);

};

function mulitplyValue(firstValue,secondValue) {
  sumTotal = parseFloat(secondValue) * parseFloat(firstValue);

};

//Set up function to clear inputs
function clearScreens() {
  firstOperator = '';
  secondValue = '';
  firstValue = '';
  workingCalc = '';
  document.getElementById("inputScreen").textContent = ('');
  document.getElementById("outputScreen").textContent = ('0');
}

//Set up function for screen display after equals press
function setAfterEquals() {
  sumCalc = workingCalc + firstValue + ' = '
  document.getElementById("inputScreen").textContent = (sumCalc);
  document.getElementById("outputScreen").textContent = (sumTotal);
  firstOperator = '=';
  firstValue = '';
  secondValue = '';
  workingCalc = '';
}

//Set up function to show current sum and operator 
function setOperation(){
  plusMinus = false;
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
    workingCalc = secondValue + displayOperator;
    document.getElementById("inputScreen").textContent = (workingCalc);
    firstValue = '';

}
}

//Set up function to display correct values during the calculations
function setScreen(){
  firstOperator = secondOperator;
  secondOperator = '';
  secondValue = sumTotal;
  firstValue = '';
  convertOperator()
  workingCalc = sumTotal + displayOperator;
  document.getElementById("inputScreen").textContent = (workingCalc);

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