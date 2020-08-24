// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
//flattens two dimensional array into single array
//reduce method in combination with the concat method to “flatten” 
//an array of arrays into a single array

//param array of arrays
function flatten(arr) {
  
 return arr.reduce((combine, curr) => {
   return combine.concat(curr)
   
  }, )
  

}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
//It takes a value, a test function, an update function, and a body function. 
//Each iteration, it first runs the test function on the current loop value and 
//stops if that returns false. Then it calls the body function, giving it the current value. 
//Finally, it calls the update function to create a new value and starts from the beginning.

function loop(value, test, update, func) {
      //test if true or false, stop if false
      if(test(value)){
        func(value);
      } else {
        return false
     }
     return loop(update(value), test, update, func)
        
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
//should determine if every value passes a test
//takes in an array and a test

function every(array, test) {
  if(!array.length){
    return true;
  }
 let result = false;
  array.forEach(elem => test(elem) ? result = true : result = false )
return result
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

//given by the book
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => code >= from &&
                                           code < to)) {
      return script;
    }
  }
  return null;
}

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}



///////////////////////


//computes the dominant writing direction in a string of text
//param is text 
function dominantDirection(text) {
    let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");
  if(!scripts.length){
    return 'no dominant direction found';
  }else if(scripts.length === 1){
     return scripts[0].name;
  } else {
    
    if (scripts.reduce((acc, cur) => acc.count === cur.count)) {
        return 'no dominant direction found';
      } else {
        return scripts.reduce((acc, cur) => acc.count >= cur.count ? acc.name : cur.name);
      }
  }
}
  
  



// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
