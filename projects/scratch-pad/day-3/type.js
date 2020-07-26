// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    
    //decipher the value of an object .isArray
 if(Array.isArray(value)){
     
     //return true if it is true to be an array
     return true;
     
     // if not return false
 }   else {
     return false;
 }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    //decipher is the value is an object 
   
    if(Array.isArray(value)){
        
        // if array return false
        return false;
    
        // value is null return false
    } else if( value === null){
        return false;
        
        // value is a date return false
    }else if(value instanceof Date){
        return false;
        
        //value is object with {} return true
    } else if (typeof(value) === "object"){
        return true
        
        //if not an object when using typeof() return false
    } else {
        return false
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    
    if(Array.isArray(value)){
        
        // if array return true
        return true;
    
        // value is null return false
    } else if( value === null){
        return false;
        
        // value is a date return false
    }else if(value instanceof Date){
        return false;
        
        //value is object with {} return true
    } else if (typeof(value) === "object"){
        return true
        
        //if not an object when using typeof() return false
    } else {
        return false
    }
       
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    
    //if the value parameter does not have the type ‘object’, return the type of the value
    if (typeof value !== 'object') {
        return typeof value;
    } else {
        //if the value parameter does have the type ‘object’, do the following:
        //if the value is null, return ‘null’
        if (value === null) {
            return 'null';
        } else if (value instanceof Date) {
            //if the value is a Date, return ‘date’
            return 'date';
        } else if (Array.isArray(value)) {
            //if the value is an array, return ‘array’
            return 'array';
        } else {
            //if no previous conditions are met, return an error message
            return 'something is seriously wrong here'
        }
    }
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
