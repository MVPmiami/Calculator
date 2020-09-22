let numbers = document.querySelectorAll(".number");
let operations = document.querySelectorAll(".operator");
let decimalBtn = document.getElementById("decimal");
let c = document.getElementById("c");
let ce = document.getElementById("ce");
let result = document.getElementById("result");

for(let i = 0; i < numbers.length; i++) {
  let number = numbers[i];

  number.addEventListener('click', function(e){
    console.log(`клик по кнопке с номером`);
  });
}


function numberPress() {

};

function operation() {

};

function decimal() {

};

function clear() {

};