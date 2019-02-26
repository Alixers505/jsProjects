// Looping a Triangle
    // Write a loop that makes seven calls to console.log to output the following triangle:
//
// #
// ##
// ###
// ####
// #####
// ######
// #######

let hashTag = "#";
for(let i = 0; i < 7; i++) {
    console.log(hashTag);
    hashTag += "#";
}

// After seeing the eloquent solution, I would refactor to match their solution
    // Refactoring would save two lines of code

/*
for(let hashTag = "#"; hashTag.length <= 7; hashTag += "#") {
    console.log(hashTag);
}
*/