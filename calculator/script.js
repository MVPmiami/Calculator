let numbers = document.querySelectorAll(".number");
let operations = document.querySelectorAll(".operator");
let decimalBtn = document.getElementById("decimal");
let clearBtns = document.querySelectorAll(".clear-btn");
let result = document.getElementById("result");

for(let i = 0; i < numbers.length; i++) {
  let number = numbers[i];

  number.addEventListener('click', numberPress)
}

for(let i = 0; i < operations.length; i++) {
  let operationBtn = operations[i];

  operationBtn.addEventListener('click', operation)
}

for(let i = 0; i < clearBtns.length; i++) {
  let clearBtn = clearBtns[i];
  clearBtn.addEventListener('click', function(e) {
    console.log(`клик по кнопке с операцией ce или с`);
  });
}

decimalBtn.addEventListener('click', decimal);


function numberPress() {
  console.log(`клик по кнопке с номером`);
};

function operation() {
  console.log(`клик по кнопке с операцией`);
};

function decimal() {
  console.log(`клик по кнопке с операцией точка`);
};

function clear() {
  console.log(`клик по кнопке с операцией ce или с`);
};