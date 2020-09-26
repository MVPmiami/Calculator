const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operator");
const decimalBtn = document.getElementById("decimal");
const clearBtns = document.querySelectorAll(".clear-btn");
const result = document.getElementById("result");
const display = document.getElementById("display");
let MemoryCurrentNumber = 0;
let MemoryNewNumber = false;
let MemoryPendingOperation = '';
const fixMath = 1e12;

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

  if(localOperationMemory === '0' && op === '-'){
    return display.value = '-';
  }

  if(op === '√') {
    MemoryCurrentNumber = Math.pow(parseFloat(localOperationMemory), 1/2);
    if(isNaN(MemoryCurrentNumber)){
      return display.value = 'Error';
    }
    return display.value = MemoryCurrentNumber;
  }

  if(MemoryNewNumber && MemoryPendingOperation !== '=') {
    display.value = MemoryCurrentNumber;
  }else {
    MemoryNewNumber = true;
    if(MemoryPendingOperation === '+') {
      MemoryCurrentNumber = (MemoryCurrentNumber * fixMath + parseFloat(localOperationMemory) * fixMath) / fixMath;
    }else if(MemoryPendingOperation === '-') {
      MemoryCurrentNumber = (MemoryCurrentNumber * fixMath - parseFloat(localOperationMemory) * fixMath) / fixMath;
    }
    else if(MemoryPendingOperation === '*') {
      MemoryCurrentNumber *= parseFloat(localOperationMemory);
    }else if(MemoryPendingOperation === '/') {
      MemoryCurrentNumber /= parseFloat(localOperationMemory);
    }else if(MemoryPendingOperation === 'yx') {
      MemoryCurrentNumber = Math.pow(+MemoryCurrentNumber, +localOperationMemory);
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
    MemoryNewNumber = false;
    MemoryCurrentNumber = 0;
    MemoryPendingOperation = '';
  }
};