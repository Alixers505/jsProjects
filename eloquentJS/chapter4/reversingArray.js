// Reversing An Array

/* Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method. */

const array1 = [1, 2, 3, 4, 5, 6, 7];
const array2 = [23, 49, 56, 37, 12];
const array3 = ["walk", "this", "way"];

// Produce a new array in inverse order

function reverseArray(array) {
  let newArray = [];

  for(let i = 0; i < array.length; i++) {
    newArray.unshift(array[i]);
  }

  return newArray;
}

//console.log(reverseArray(array1)); //--> [7, 6, 5, 4, 3, 2, 1]
//console.log(reverseArray(array2)); //--> [12, 37, 56, 49, 23]
//console.log(reverseArray(array3)); //--> ["way", "this", "walk"]


// Modify an array to reverse it's elements

function reverseArrayInPlace(array) {
  const halfArray = Math.floor(array.length / 2);
  //console.log(halfArray);

  for(let i = 0; i < halfArray; i++) {
    let value = array[i];
    //console.log("Value: " + value);
    let newValue = array.length - 1 - i;
    //console.log("New Value: " + newValue);

    array[i] = array[newValue];
    array[newValue] = value;

    //console.log(array);
  }

  return array;
}

//console.log(reverseArrayInPlace(array1)); //--> [7, 6, 5, 4, 3, 2, 1]
//console.log(reverseArrayInPlace(array2)); //--> [12, 37, 56, 49, 23]
//console.log(reverseArrayInPlace(array3)); //--> ["way", "this", "walk"]