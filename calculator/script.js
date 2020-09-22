let numbers = document.querySelectorAll(".number");
let operations = document.querySelectorAll(".operator");
let decimalBtn = document.getElementById("decimal");
let clearBtns = document.querySelectorAll(".clear-btn");
let result = document.getElementById("result");
let display = document.getElementById("display");
let MemoryCurrentNumber = 0;
let MemoryNewNumber = false;
let MemoryPendingOperation = '';

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
  if(MemoryNewNumber) {
    display.value = num;
    MemoryNewNumber = false;
  }else {
    if(display.value === '0') {
      display.value = num;
    }else{
      display.value += num;
    }
  }
};

function operation(op) {
  let localOperationMemory = display.value;

  if(MemoryNewNumber && MemoryPendingOperation !== '=') {
    display.value = MemoryCurrentNumber;
  }else {
    MemoryNewNumber = true;
    if(MemoryPendingOperation === '+') {
      MemoryCurrentNumber += parseFloat(localOperationMemory);
    }else if(MemoryPendingOperation === '-') {
      MemoryCurrentNumber -= parseFloat(localOperationMemory);;
    }
    else if(MemoryPendingOperation === '*') {
      MemoryCurrentNumber *= parseFloat(localOperationMemory);;
    }else if(MemoryPendingOperation === '/') {
      MemoryCurrentNumber /= parseFloat(localOperationMemory);;
    }else {
      MemoryCurrentNumber = parseFloat(localOperationMemory);
    }
    display.value = MemoryCurrentNumber;
    MemoryPendingOperation = op;
  }
};

function decimal() {
  let LocalDecimalMemory = display.value;

  if(MemoryNewNumber) {
    LocalDecimalMemory = '0.';
    MemoryNewNumber = false;
  }else {
    if(LocalDecimalMemory.indexOf('.') === -1) {
      LocalDecimalMemory += '.';
    }
    display.value = LocalDecimalMemory;
  }
};

function clear(id) {
  if(id === 'ce') {
    display.value = '0';
    MemoryNewNumber = true;
  }else if(id === 'c') {
    display.value = '0';
    MemoryNewNumber = true;
    MemoryCurrentNumber = 0;
    MemoryPendingOperation = '';
  }
};