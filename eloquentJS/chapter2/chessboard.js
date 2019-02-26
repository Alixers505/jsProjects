// ChesschessBoard
// Write a program that creates a string that represents an 8×8 grid, using new-line characters to separate lines. At each position of the grid there is either a space or a # character. The characters should form a chesschessBoard.
//
//     Passing this string to console.log should show something like this:
//
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//
//When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

const square = "#";
const space = " ";
const newLine = "\n";
const grid = 8;

let chessBoard = "";

for( let i = 0; i < (grid * grid); i++ ) {

    if( i % (grid + 1) === 0 ) {

        if( i % (grid + 1) === 0 ) {
            chessBoard += newLine;
        } else if( i % 2 === 0 ) {
            chessBoard += space;
        } else {
            chessBoard += square;
        }

        // console.log("If processed");
        // console.log(i);

    } else {

        if( i % (grid + 1) === 0 ) {
            chessBoard += newLine;
        } else if( i % 2 === 0 ) {
            chessBoard += square;
        } else {
            chessBoard += space;
        }

        // console.log("Else processed");
        // console.log(i);
    }

}

console.log(chessBoard);


// The eloquent solution reduces the code size by more than half
    // and removes any need for the const's defined above

// let size = 8;
//
// let board = "";
//
// for (let y = 0; y < size; y++) {
//     for (let x = 0; x < size; x++) {
//         if ((x + y) % 2 == 0) {
//             board += " ";
//         } else {
//             board += "#";
//         }
//     }
//     board += "\n";
// }
//
// console.log(board);