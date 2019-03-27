/*
Implement every as a function that takes an array and a predicate function as parameters. Write two versions, one using a loop and one using the some method.
 */


// Version using a loop
/*
function every(array, test) {
  let falsy = 0;
  for(let i = 0; i < array.length; i++) {
    if(!test(array[i])) {
      falsy++;
    }
  }

  return falsy <= 0;

}
*/

// Version using the some method
function every(array, test) {
  return !array.some(value => !test(value));
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true