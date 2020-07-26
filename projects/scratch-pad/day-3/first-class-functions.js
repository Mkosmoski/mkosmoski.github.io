// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    
    return function(value){
        // use if statement to return true if value is greater than base
        if (value >= base){
            return true;
            
        } else {
            return false;
        }
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
     return function(value){
    // use an if statement to return true if value is less than base, if not it is false
        if(value <= base){
            return true;
            
        } else {
            return false;
        }
     }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    

  //return a function with a string parameter
  return function (string) {
      
  //reassign the string to the string with all lowercase letters
  string = string.toLowerCase();
  
  //if the first letter of the string is the same as the lowercased startsWith return true, 

    if (string[0] === startsWith.toLowerCase()) {
        return true;
      
    } else {
  //else, return false
        return false;}
      
  }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
   //return a function with a string parameter
   return function (string) {
    
    //reassign the string to all lowercase string
    string = string.toLowerCase();
       
    //if the last letter of the string is the same as the lowercase startsWith return true
    if (string[string.length-1] === endsWith.toLowerCase()){
        return true

    } else {
        return false;
        
    }
    
   }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //

    //loop over the array of strings executing the function on each string
    //
    for (var i = 0; i<= strings.length-1; i++) {
        strings[i] = modify(strings[i]);
       
    }
    return strings;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
    // create an array to hold test outcomes
    var testArray = []
    
    //for of loop to loop over strings and enter outcome into new array
    for (var i of strings){
      testArray.push(test(i)); 
       
    }
    //if array contains a false - return false else return true
    if (testArray.includes(false)){
        return false;
    } else {
        return true;
    }
     
    //YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}