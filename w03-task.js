/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
  }

function addNumbers() {
    let num1 = document.getElementById("add1").value;
    let num2 = document.getElementById("add2").value;
    let sum = Number(num1) + Number(num2);
    return sum;
  }
  document.getElementById("addNumbers").addEventListener("click", addNumbers); 

/* Function Expression - Subtract Numbers */
function subtract (number1, number2){
    return number1 - number2;
}
function subtractNumbers() {
  let num1 = Number(document.getElementById("subtract1").value);
  let num2 = Number(document.getElementById("subtract2").value);
  let difference = subtract(num1, num2);
  document.getElementById("difference").value = difference;
}
document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
function multiply (number1, number2){
return number1 * number2;
}
const multiplyNumbers = () => {
  let factor1 = Number(document.getElementById("factor1").value);
  let factor2 = Number(document.getElementById("factor2").value);
  let product = multiply(factor1, factor2);
  document.getElementById("product").value = product;
};
document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide (number1, number2){
return number1 / number2;
}
const divideNumbers = () => {
  let dividend = Number(document.getElementById("dividend").value);
  let divisor = Number(document.getElementById("divisor").value);
  let quotient = divide(dividend, divisor);
  document.getElementById("quotient").value = quotient;
};
document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
// Declare and instantiate a variable of to store the current date.
const now = new Date();
// Declare a variable to hold the current year.
let currentYear;
// Using the variable declared in number 1, call the built-in getFullYear() method/function and assign it to the variable declared in 2.
currentYear = now.getFullYear();
// Assign the current year variable to an HTML form element with an ID of year.
document.getElementById("year").value = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

/* Output Odds Only Array */
document.getElementById("array").value = numbers;
/* Output Evens Only Array */
const odds = numbers.filter((number) => number % 2 === 1);
document.getElementById("odds").value = odds;
/* Output Sum of Org. Array */
const evens = numbers.filter((number) => number % 2 === 0);
document.getElementById("evens").value = evens;
/* Output Multiplied by 2 Array */
const sumOfArray = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.getElementById("sumOfArray").value = sumOfArray

/* Output Sum of Multiplied by 2 Array */
const multiplied = numbers.map((number) => number * 2);
document.getElementById("multiplied").value = multiplied;