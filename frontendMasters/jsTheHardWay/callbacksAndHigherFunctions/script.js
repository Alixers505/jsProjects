// Type JavaScript here and click "Run Code" or press Ctrl + s
//console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
//console.log(addTwo(3));
//console.log(addTwo(10));


// Challenge 2
function addS(word) {
  return word + "s";
}

// uncomment these to check your work
//console.log(addS('pizza'));
//console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
  let newArray = [];
  for(let i = 0; i < array.length; i++) {
    newArray[i] = callback(array[i])
  }
  return newArray;
}

//console.log(map([1, 2, 3], addTwo));


// Challenge 4
function forEach(array, callback) {

  for(let i = 0; i < array.length; i++) {
    callback(array[i])
  }

}

// see for yourself if your forEach works!

let alphabet = '';
let letters = ['a', 'b', 'c', 'd'];
forEach(letters, function(char) {
  alphabet += char;
});
//console.log(alphabet);

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
  let newArray = [];
  forEach(array, function(i) {
    newArray.push(callback(i));
  });
  return newArray;
}

//console.log(mapWith([1, 2, 3], addTwo));

//Extension 2
function reduce(array, callback, initialValue) {
  // initialValue accumulates the output of each loop
  // the array is iterated over, passing the accumulator and the next array element as arguments to callback
  // the callback's return value becomes the new accumulator value
  // the next loop executes with this new accumulator value
  forEach(array, function(i) {
    console.log("Initial Value: " + initialValue, "Index Value: " + i);
    initialValue = callback(initialValue, i);
  })
  return initialValue;
}

let nums = [4, 1, 3];
let add = function(a, b) { return a + b; };
//console.log("Reduced Value: " + reduce(nums, add, 0));   //-> 8



//Extension 3
function intersection(arrays) {
  const argumentNumber = arguments.length;
  //console.log(argumentNumber);
  let sameInputs = [];
  const numbersSeen = {};

  for(let i = 0; i < argumentNumber; i++) {
    let currentArray = arguments[i];

    for(let j = 0; j < currentArray.length; j++) {
      let currentNumber = currentArray[j];

      // if number exists in the object
      // increase key count
      // else
      // add number to object
      if(numbersSeen[currentNumber]) {
        numbersSeen[currentNumber] += 1;
      } else {
        numbersSeen[currentNumber] = 1;
      }

    }


  }

  // if the value of a key = argumentNumber, then add the key to the sameInputs array

  for(let key in numbersSeen) {
    if(numbersSeen[key] === argumentNumber) {
      sameInputs.push(key);
    }
  }

  //console.log(numbersSeen);
  // return values which appear in all arguments
  return sameInputs;
}

//console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
// Take in multiple arrays
function union(arrays) {
  const argumentNumber = arguments.length;
  //console.log(argumentNumber);
  // Create a new array which contains distinct numbers only (no duplicates)
  const newArray = [];

  // Run through each array
  for(let i = 0; i < argumentNumber; i++) {
    let currentArray = arguments[i];

    for (let j = 0; j < currentArray.length; j++) {
      let currentNumber = currentArray[j];
      // if the newArray is empty, add the first number
      // else loop through the new array to see if the current number matches any number in the array
      // add any numbers which don't already exist in the array
      if(newArray.length < 1) {
        newArray.push(currentNumber);
      } else {
        for (let k = 0; k < newArray.length; k++) {
          if(!newArray.includes(currentNumber)) {
            newArray.push(currentNumber);
          }

        }
      }
    }

  }

  // Return an array which contains all numbers in the original arrays (minus duplicates)
  return newArray;

}

//console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
  const newObj = {};

  for(let i = 0; i < array1.length; i++) {
    if( callback(array1[i]) === array2[i] ) {
      newObj[array1[i]] = array2[i];
    }
  }

  return newObj;

}

//console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
  const newObj = {};

  // For each item in the array, run each of the callbacks
  // Assign callback returns as values to the keys listed in the arrVals

  for(let i = 0; i < arrVals.length; i++) {
    let arrayKey = arrVals[i];
    //console.log(arrayKey);
    let valArray = [];

    for(let j = 0; j < arrCallbacks.length; j++) {
      let currentCallback = arrCallbacks[j];
      //console.log(currentCallback);

      valArray.push(currentCallback(arrayKey));

      newObj[arrayKey] = valArray;

    }
  }

  return newObj;
}

//console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }