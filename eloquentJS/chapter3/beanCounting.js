// Bean Counting
  // Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.
  // Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.

// Version 1
// function countBs(x) {
//   let count = 0;
//   for(let i = 0; i < x.length; i++) {
//     if(x[i] === "B") {
//       count++;
//     }
//   }
//
//
//   return count;
// }

// Rewrite based on the "Next" statement

function countBs(x) {
  return countChar(x, "l");
}


let string = "Welcome to Bean Counting: where only the letter B matters.";
//console.log(string[11]);
//console.log(string[48]);

console.log("There are " + countBs(string) + " of this letter in the string.");

function countChar(x, y) {
  let charCount = 0;
  for(let i = 0; i < x.length; i++) {
    if(x[i] === y) {
      charCount++;
    }
  }

  return charCount;
}

// console.log("There are " + countChar(string, 'l') + " l's in the string.");
