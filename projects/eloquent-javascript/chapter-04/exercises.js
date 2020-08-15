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
  
  array.forEach(function(num, index, array) {
  range(array[0], array[array.length-1])

})
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList() {

}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray() {

}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend() {

}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth() {

}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual() {

}

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