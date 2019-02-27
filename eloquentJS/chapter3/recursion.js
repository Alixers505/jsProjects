// Recursion
  // Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.
  // Use the following regulations to determine the function:
    // Zero is even.
    // One is odd.
    // For any other number N, its evenness is the same as N –2.
  // Test it on 50 and 75. See how it behaves on –1. Why? Can you think of a way to fix this?


function isEven(x) {

  if(x === 0) {
    return true;
  } else if(x === 1) {
    return false;
  }  else if(x < 0) {
    return isEven(-x);
  } else {
    return isEven(x - 2)
  }

}

console.log("50 is even: " + isEven(50));
console.log("75 is even: " + isEven(75));
console.log("-1 is even: " + isEven(-1));