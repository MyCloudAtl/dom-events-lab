/*-------------------------------- Constants --------------------------------*/
let num1 = null
let num2 = null
let op1 = null
let value = null
const numbers = document.querySelectorAll(".number")
const ops = document.querySelectorAll(".op")
const equals = document.querySelector(`.equals`)
const reset = document.querySelector(`.reset`)
const displayScreen = document.querySelector(`.display`)
/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
numbers.forEach(number => {
    number.addEventListener("click", (event) => {
        console.log(event);
      // This log is for testing purposes to verify we're getting the correct value
      console.log(event.target.innerText);
      if (!num1){
        num1 = event.target.innerText
        displayScreen.innerText = num1
    }
      if (num1 && op1){
        num2 = event.target.innerText
        displayScreen.innerText = (num1 + op1 + num2)
      }
    });
  });
  ops.forEach(op => {
    op.addEventListener("click", (opEvent) => {
        console.log(opEvent);
      // This log is for testing purposes to verify we're getting the correct value
      console.log(opEvent.target.innerText);
      if (!op1){
        op1 = opEvent.target.innerText
        displayScreen.innerText = (num1 + op1)
    }
    });
  });
   equals.addEventListener("click", calculation)
   reset.addEventListener("click", resetC)
/*-------------------------------- Functions --------------------------------*/

function calculation() {
    //value = parseInt(num1) + op1 + parseInt(num2);
    if (op1 === `+`){value = parseInt(num1) + parseInt(num2)};
    if (op1 === `*`){value = parseInt(num1) * parseInt(num2)};
    if (op1 === `-`){value = parseInt(num1) - parseInt(num2)};
    if (op1 === `/`){value = parseInt(num1) / parseInt(num2)};
    displayScreen.innerText = (num1 + op1 + num2 + `=` + value)
console.log(value)
}

function resetC() {
    value = null;
    op1 = null;
    num1 = null;
    num2 = null;
    displayScreen.innerText = ``;
}
////**** Worked with Tom in after hours *****//////
