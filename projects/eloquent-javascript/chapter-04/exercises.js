////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//create a range function that takes two numbers and returns an array
//of all the numbers starting from the first number and going to the end number including the numbers given
function range(start, end, step) {
//if start = end return empty array
 let rangeArray = [];
 if(start === end ){
    return rangeArray;
  } else if (step > 0) {
    for(let i = start; i < end+ 1; i+= step)
    rangeArray.push(i);  
  } else if(step < 0){
     for(let i = end; i < start+ 1; i+= step)
    rangeArray.push(i);
  } else {
    for(let i = start; i < end+ 1; i++)
    rangeArray.push(i);
  }
  
  return rangeArray;

}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//create a function that takes an array of a range of numbers and returns their sum
function sum(range) {
  let total = 0
  if(!range.length){
    return total;
  } else {
    for (let nums of range){
      total += nums;
    }
  }
  return total;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//create a function that takes in an array and returns a NEW array of the same values in backwards order
function reverseArray(array) {
  if(!array.length){
    return [];
  }else{
    let reverse = reverseArray(array.slice(1));
    reverse.push(array[0]);
    return reverse;
  }

}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//create a function that takes in an array and returns the same array in reverse order

function reverseArrayInPlace(array) {
  
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let swap = array[i];
    array[i] = array[array.length-i-1];
    array[array.length-i-1] = swap;
  }
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  let arrayList = null;
  
  for(let i = array.length-1; i >= 0; i--){
    arrayList = { value: array[i], rest: arrayList }
  }
return arrayList
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//"converts list into array"
//param list
function listToArray(list) {
 let result = [];
  if (typeof list === 'undefined' || list.value === undefined || list.rest === undefined) {
    return result;
  } else {
    result.push(list.value);
    while (list.hasOwnProperty('rest') && list.rest !== null) {
      list = list.rest;
      if (list.hasOwnProperty('value')) {
      	result.push(list.value);
      }
    }
  }
  return result;
}
////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//takes a number and adds it to the front of an arraytolist array
function prepend(num, list) {
  return {value: num, rest: list}
  

}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, number) {
  if (number === 0) {
    return list.value;
  } else if (list.rest === null) {
    return undefined;
  } else {
    return nth(list.rest, number-1);
  }
}


////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(thing1, thing2) {
  
  if(!thing1 && !thing2){
    return false;
  } else if(typeof thing1 !== typeof thing2){
    return false;
  }else if (typeof thing1 === 'number'){
    return thing1 === thing2
  
    
  } else if (typeof thing1 === 'object') {
  
      for(let keys in thing1){
         if(!(keys in thing2) || !deepEqual(thing1[keys], thing2[keys]))
         return false;
      }
      return true;
    
  } else{
    return thing1 === thing2;
  }
}



/*
  for (let prop in a) {
      if (!(prop in b) || !deepEqual(a[prop], b[prop])) return false;
    }
    return true;
  } else {
    return a === b;
  }
}*/


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
