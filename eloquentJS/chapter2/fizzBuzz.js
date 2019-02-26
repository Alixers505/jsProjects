/* FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

for(let num = 1; num <= 100; num++) {
    if(num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz" + " (" + num + " is divisible by 5 and 3.)");
    } else if (num % 3  === 0) {
        console.log("Fizz "+ " (" + num + " is divisible by 3, but not 5.)");
    } else if (num % 5  === 0) {
        console.log("Buzz" + " (" + num + " is divisible by 5, but not 3.)");
    } else {
        console.log(num);
    }
}

// The eloquent solution is much smaller, but I think my solution is easier to read and provides better user feedback in the output