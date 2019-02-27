// The Sum of a Range

/*
Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
 */

// Range Function

function range(start, end) {
    let rangeArray = [];

    for(let i = start; i <= end; i++) {
        rangeArray.push(i);
    }

    return rangeArray;
}

//console.log(range(1, 10));

// Sum Function

function sum(numbers) {
    let sumTotal = 0;
    for(let number of numbers) {
        sumTotal += number;
    }
    return sumTotal;
}

//console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//console.log(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10);

// Step Range Function

function stepRange(start, end, increment) {
    let rangeArray = [];

    if(start > end) {
        for(let i = start; i >= end; i += increment) {
            rangeArray.push(i);
        }
    } else {

        for(let i = start; i <= end; i += increment) {
            rangeArray.push(i);
        }
    }

    return rangeArray;
}

//console.log(stepRange(1, 10, 2)); // --> [1, 3, 5, 7, 9]
//console.log(stepRange(5, 2, -1)); // --> [5, 4, 3, 2]