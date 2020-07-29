/*
 * OPERATORS:
 *
 * Operators act on a codes data by assigning the data, comparing data, or 
 * resulting new data from using data in a arithmetic operation
 * Operartors are distinguished by their function and how many operands required
 *--operands are the values that operators work on
 * 
 */
 
     2          +        2;
//(operand) (operator) (operand)

// 1. ASSIGNMENT OPERATORS //
/*
 * Assignment operators are the '=' '+=' '-='
 * This operator is used to assign value to variables
 */
 
 var myTransportation = "bike"; //'=' assigned the var value 'bike' 
 
// 2. ARITHMETIC OPERATORS //
/*
 * Like from grade school! Simple math operators!
 */

3 + 5; // adds the operands
4 - 6; // subtracts the operands
7 * 9; // multiplies the operands
8 / 4; // divides the operands

4 % 4; // % is a modulo that finds the remainder of a division operation

//NOTE: make your life easier! use some shortcuts

var math = 5;
math = math + 2; // math +=
math = math - 2; // math -=
math = math * 2; // math *=
math = math / 2; // math /= 


// 3. COMPARISON OPERATORS//
/*
 * Comparison operators compares 2 operands
 * These operators always result in a boolean, true or false
 */
 
 1 < 2; // result true because 1 is less than 2
 'a' > 'b'; // result false because numerically a is less than b
 100 >= 100; // result true because 100 is greater than or equal to 100
 200 <= 150; // result false because 200 is not less than or equal to 150
 
 //NOTE when comparing you can use strict or not srtict comparison
 
 1 == "1"; // not strict will result true even though they are diff datatypes
 1 === "1"; // strict will result false because a number isn't a string
 2 != "2"; //not strict and will result false because 2 equals "2"
 2 !== "2"; // strict result true because they are different datatypes

// 4. LOGICAL OPERATORS//
/*
 * Logical Operators are AND, OR, NOT comparison operators 
 */
 
 7 && 7; // means 7 AND 7
 "bike" || "streetcar"; // means bike OR streetcar
 !true; // means NOT true result is false
 !!1; // double bang (!) operator coercesses a value to a boolean result is true
 
 // 5. UNARY OPERATORS//
/*
 * Unary operator only works with one operand 
 * 
 * operaters inclue typeof, bang (!), increments (++), decrements (--) 
 */
 
 console.log(typeof 77); 
 //typeof operator works with one operand to return the datatype the operand is
 
 4 != 7 ;
 // ! otherwise known as the 'bang' operator usually means "not"
 
 for (var i=0; i <= 11; i++);
 // i++ i means increments by 1 (i + 1), ++ only works with one operand 
 
 
 
 // 6. TERNARY OPERATORS//
/*
*Ternary operator operates with three operands
*Frequently used as a shortcut for an if-statment this operator uses 
* '?' and ":" to connect condition and the expression to execute based 
* on true or false answers
*/

function studentDiscount(student){
  //function to activate student discount to a show
  return (student ?       '$15'       :                   '$20');
  // they are a student cost is $15.  if they are not  cost is $20
  
}