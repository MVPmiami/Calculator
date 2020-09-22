let numbers = document.querySelectorAll(".number");
let operations = document.querySelectorAll(".operator");
let decimalBtn = document.getElementById("decimal");
let clearBtns = document.querySelectorAll(".clear-btn");
let result = document.getElementById("result");

for(let i = 0; i < numbers.length; i++) {
  let number = numbers[i];

  number.addEventListener('click', function(e) {
    numberPress(e.target.textContent);
  });
}

for(let i = 0; i < operations.length; i++) {
  let operationBtn = operations[i];

  operationBtn.addEventListener('click', function(e) {
    operation(e.target.textContent);
  });
}

for(let i = 0; i < clearBtns.length; i++) {
  let clearBtn = clearBtns[i];
  clearBtn.addEventListener('click', function(e) {
    clear(e.srcElement.id)
  });
}

decimalBtn.addEventListener('click', decimal);


function numberPress(num) {
  console.log(`клик по кнопке с номером ${num}`);
};

function operation(symbol) {
  console.log(`клик по кнопке с операцией ${symbol}`);
};

function decimal() {
  console.log(`клик по кнопке с операцией точка`);
};

function clear(id) {
  console.log(`клик по кнопке с операцией ${id}`);
};