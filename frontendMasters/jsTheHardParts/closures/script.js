function createFunction() {
  function sayHello() {
    console.log('hello');
  }
  return sayHello;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
//const function1 = createFunction();
//function1();



function createFunctionPrinter(input) {
  function printInput() {
    console.log(input);
  }
  return printInput;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
//const printSample = createFunctionPrinter('sample');
//printSample();
//const printHello = createFunctionPrinter('hello');
//printHello();



function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

//willCounter();
//willCounter();
//willCounter();

//jasCounter();
//willCounter();



function addByX(x) {

  function returnMe(num) {
    return x + num;
  }

  return returnMe;
}

const addByTwo = addByX(2);

// now call addByTwo with an input of 1
//addByTwo(1);

// now call addByTwo with an input of 2
//addByTwo(2);


//--------------------------------------------------
// Extension
//--------------------------------------------------

function once(func) {
  let run = false;
  let result;

  return function (num) {
    if(!run) {
      result = func(num);
      run = true;
    }
    return result;
  }
}

const onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
//console.log(onceFunc(4));  //should log 6
//console.log(onceFunc(10));  //should log 6
//console.log(onceFunc(9001));  //should log 6


function after(count, func) {
  let called = 1;

  return function() {
    if(called === count) {
      func();
    }
    called++;
  };

}

const called = function() { console.log('hello') };
const afterCalled = after(3, called);

//afterCalled(); // -> nothing is printed
//afterCalled(); // -> nothing is printed
//afterCalled(); // -> 'hello' is printed

function sayHello() {
  console.log('Say Hello');
}

function delay(func, wait) {
  setTimeout(func, wait);
}

delay(sayHello, 1000);