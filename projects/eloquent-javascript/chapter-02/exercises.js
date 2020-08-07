
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
It may be useful to know that you can find the length of a string by writing .length after it.

*/

function triangles(number) {
 for(let hash = '#'; hash.length <= number; hash += '#'){
        console.log(hash);
    }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
Write a program that uses console.log to print all the numbers from 1 to 100, 
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, 
and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers
that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/



function fizzBuzz(start, end) {
  //loop through numbers 1-100
for(let i= start; i <= end; i++){
    if(i % 3 !== 0 && i % 5 !== 0){
        console.log(i);
    }else if(i % 3 === 0 && i % 5 === 0){
        console.log("fizzbuzz")
    }else if(i % 3 === 0){
        console.log("fizz");
    }else if(i % 5 === 0){
        console.log("buzz")
    }
}

  
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a 
space or a "#" character. The characters should form a chessboard.
*/



function drawChessboard(board) {


 let chessboard = '';
   
 for(let row1 = 0; row1 < board; row1++){
     
  for(let row2 = 0; row2 < board; row2++){
    if((row1+ row2) % 2 === 0){
      chessboard +=" ";
    } else {
      chessboard += "#";
    }
  }chessboard += "\n";
 
} console.log(chessboard);
}
   
 


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
