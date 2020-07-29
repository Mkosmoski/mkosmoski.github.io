/*
 * DATATYPES:
 *
 * Simple datatypes include: numbers, strings, booleans, undefuned, null
 * Simple datatypes values are stored directly in a variable because they have 
 * a fixed sized memory no bigger than 8 bytes this is called BY COPY cause when 
 * reused the value is simply copied becuase it is small enough to do so!
 *
 * Complex datatypes include: array, objects, function
 * Complex datatypes are an indefinite size and cannot fit all its value into 
 * one 8 byte variable therefore most of its value has to BY REFERENCE, 
 * referencing outside of the variable it was declared in 
 *
 *
 */
 
 var a = 1;
 var b = "string";
 var c = true
 
 typeof(a); // will return number
 typeof(b); // will return string
 typeof(c); // will return boolean

// 1. NUMBER //
/*
 * Numbers can be positive/negative/decimals 
 * Numbers are used arithmetic expression
 */
 42;
 -8;
 .007;
 
// 2. STRING //
/*
 * Strings are text. Always write strings in  double or single quotes 
 * Combine multiple strings with + operator
 */

"cats in space" // one string
"cats"+"the"+ "musical" // three strings combined with + operator

// 3. BOOLEAN//
/*
 * Booleans are conditional statements that result in true or false 
 * Can also be thought of as an on/off switch
 */

true;
false;
(3 === 3); //true
(2 != 2); //false

// 4. ARRAY //
/*
 * Arrays store simple datatypes in a list
 * You can use indexing to access certain data in the list
 */
var exArray= [33, "spaceship", true, -99]; // arrays are always in []
// index  =  (0)   (1)         (2)    (5)

var multiDimensionalArray= [[7, "lucky"], [27, "rockstar"], [42, "the answer"]]

// 5. OBJECT //
/*
 * Objects store a collection of simple datatypes in the structure of key/value
 * pairs
 */
 var exObject = { // delcare object and contain data with {}
     character : "Daenerys", // Structure is  key : "value",
     throne: true,
     dragons: 3,
 }
 
// 6. FUNCTION//
/*
 * Functions are a reusable piece of code that takes an argument to act 
 * differently.
 * Functions are comprised on inputs, outputs, constraints, and edgecases. 
 * For a deeper understanding go to the FUNCTIONS Section of the page
 */
function exFunction(parameters) {
    //code to execute during the function
    return 
}

exFunction() //<- structure to call a function

// 7. UNDEFINED/
/*
 * Undefined is a variable that is declared but is still undefined.
 * to define the variable assign a datatype to the variable
 */

var notDefined // typeof(notdefined) === undefined
var defined = "I am defined as a string" // typeof(defined === string)

// 8. NULL /
/*
 * Null is a defined variable with an empty value. 
 * "null" appears when other datatypes are not present
 */

var x = null;

// 9. NanN /
/*
 * NaN stands for Not A Number even though its datatype is funnily enough a number.
 * NaN is a numeric datatype but value cannot be represented by a number
 */
var nan = 4 % "gak"


// 10. INFINITY AND -INFINITY/
/*
 * Infinity is a global object with numeric value
 * Positve infinity is bigger than any other number
 * Infinity is displayed when a number exceeds the upper limit of the floating 
 * point numbers.
 
 * Negative infinity is smaller than any other number
 * -Infinitey is displayed when a number exceeds the lower limit of the 
 * floating point numbers
 */
 
console.log(Infinity);                 // Infinity will result in Infinity
console.log(Number.POSITIVE_INFINITY); // result in Infinity

console.log(-Infinity);                 // -Infinity will result in -Infinity
console.log(Number.NEGATIVE_INFINITY); //  result in -Infinity
 