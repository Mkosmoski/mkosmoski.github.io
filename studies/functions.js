/*
 * FUNCTIONS:
 *
 * Reusable pieces of code that takes an argument to act differently.
 *
 * There are 4 parts of a function: 
 * Name, Parameters, Function Body, & Return Statement
 *
 * When writing functions consider [IOCE]
 * 0. [I]nputs- what datatype is being passed in this function
 * 1. [O]utputs- what should the function return
 * 2. [C]onstraints- are there any specifics in the instructions that involve 
 *                  how we build this function
 * 3. [E]dgecases- what conditions do I have to meet to make sure I am resulting
 *                the desired output
 */
 
// Structure //
/*
 * There are two stages to creating a function: Declaration and Execution
 * When you declare your function use a word that sense for the function you 
 * want it to perform.
 * Since you will be using this function mutiple times you can set parmeters of 
 * your function but make sure they are not concrete values only placeholders 
 * (once again be descriptive in the type of value you expect to use in your 
 * function).
 *
 * You then execute your function with a function call which consist of the 
 * function name and the arguments (which go are your concrete values, 
 * mirroring the parameters)
 *
 * Structure:
 function name(parameters){
     //function body- what you want your function to do
     return
 }

  name(arguments)  //<-- function call
 */
function age(yearBorn, currentYear){  //parameters yearBorn and currentYear
    return currentYear - yearBorn;    //return currentYear minus yearBorn
};

age(1987, 2020); //call the function age with arguments to run function 

//NOTES ABOUT FUNCTIONS
/*function can be assigned to a variable. In that case the function name is not
 * important as you would call it by the variable you assigned it to
 */
let add = function (a,b){     //assigning function to variable "add"
    a + b
}

add(6, 8) // calls function 
var sum = add  //reassigning add to variable sum
sum(10, 1) // calls function 

//functions don't need parameters
function danger(){
    console.log("Danger Will Robinson!");
};

danger(); // call functions with no parameters

/*the scope of your datatypes
* variables var outside of your function exist in the global scope of your code
* variables var, let, and const declared in your function will only exist in the 
* scope of your function, for they are local variables and function scoped
* variables let and const are block scoped and will only exist within a block 
* code (being function or loops) 
*/

//Closures
//a function being called enclosed in another function

function redAlert(){
    for(var i=10; i>0; i--) //for loop enclosed in a function
    console.log(i)
    if (i === 0){           //is statement enclosed in a function
        danger()            //function danger() enclosed in a function
    }
}