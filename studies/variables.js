/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration using var //
var myName;


/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything.
 * It is good practice to name your variable something that describes how or why you are using it! 
 * It will help your code be easier to read
 *
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
/*
* Giving your variable value is called intializing it. If you do not initialize your variable will remain undefined until you do
*/
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
/*
* Variables declared with var or let can be reassigned. To do so simply write it in a new statement
* Remember that once you have reassigned that variable your new value will only effect the code after the new assignment
*/
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";


//4.0 var vs let vs const
/*
* In javascript ES6 you can also use let and const to declare variables. 
* var, let, and const have differences in how they will work and be read in your code
*/

//4.1 var
/*
* Properties of var: 
* 0. reassignable- you can reassign value to this variable type
* 1. hoisted- the declaration of a variable is brought to the top of the code when the JS interpreter starts to read the code (more info on hoisting in the hoisted section)
* 2. scoped to functions - when declared in a function they stay in the function, but var is not scoped to blocks, you can access the var outside of the code blocks of loops or if statements (more info on scope in the scope section)
*/

var businessName = "Lynn the Professional"
businessName = "Mistress Lynn the Professional Corp" // <- reassigned

//4.2 let
/*
* Properties of let:
* 0. reassignable- you can reassign value to this variable type
* 1. scoped to functions, if blocks, and loop blocks
*/

let petName = "hedwig";
petName = "luna"; // <- reassigned

//4.3 const
/*
* Properties of let:
* 0. NOT reassignable- you cannot reassign value to this variable type
* 1. scoped to functions, if blocks, and loop blocks
*/
const robotName = "halleybot";
// robotName = "hal"; will not re assign robotName, robotName will remain "sparky" because it is a constant

//5. Hoisting
/*
* hoisting is when a variable it brought to the top of the program or code block.
* all var and function declarations are brought to the top once a program is executed.
* NOTE: only the declarations not the values are hoisted
*
* let and const variables not hoisted
*/