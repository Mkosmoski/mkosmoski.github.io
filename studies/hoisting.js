
/*
 * Hoisting 
 *
 * Hoisting is the process where the js intereter loads VARIABLE DECLARATIONS 
 * and FUNCTIONS before executing the code. It reads the functions and variable
 * declarations first as if they were hoisted to the top
 *
 * NOTE: no code actually moves
 *
 * NOTE: JS Interpreter is what reads JavaScript code to execute it by
 * converting higher level source code to lower level computer code so the 
 * computer can read it and execute code for users to interact with!
 */

// 1. Variable Hoisting //
/*
 * Only variables declared with var are hoisted (not let or const)
 * Variables declaration will be hoisted but not the value
 
 var    myVar       =  "String"
     (declaration)     (value) 
 */
 
 console.log(x); //<--will print "undefined"
 var x = "something";
 console.log(x); //<-- will print "something"
 
 // 2. Function Hoisting
 
 /*
  * functions declartation and body are hoisted
  *
  
  function myFunction() { };
           (declartion) (body)
 */
 
  printFunction("You are awesome!");  //can call function before it is declared
 function printFunction(string){
     console.log(string);
 }