// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-megankosmo");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *      
 *          //make sure you are in github.io directory in terminal 
 * 
 *    npm start -- prefix ./projects/let-s-get-functional
 * npm install --global lodown-yourPackage
npm link lodown-yourPackage
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */ 

var maleCount = function(array) {
    //I: an array of customer ojectects (from customer.json page) *Everything is a string
    //O: number of male customers
    //C: I need to use the _.filter function
    //E:
    return _.filter(array, function(customerObj){
    //filter out the male customers
         return customerObj.gender === "male";
    }).length;
};

var femaleCount = function(array){
    //I:customer array
    //O: number female customers
    //C: must use REDUCE
    //If the first element of the
    //  let females = 0;
 return _.reduce(array, function(counter, custObj){
       
        if (custObj.gender === "female"){
        counter ++;
        } return counter
    }, 0);
    
};

var oldestCustomer = function(array){
    //Find the oldest customer's name
  let oldestAge = 0; //set oldest age place holder to 0
  return _.reduce(array, function(maxAge, currAge){
    if(currAge.age > oldestAge){
        oldestAge = currAge.age;
        return  currAge.name;        
    } return maxAge;
  }, 0);
}
    


var youngestCustomer = function(array){
//     //Find the youngest customer's name
 var youngestAge = Infinity
 return _.reduce(array, function(prevAge, currAge){
    if(currAge.age < youngestAge){
        youngestAge = currAge.age;
        return currAge.name;
 } return prevAge;
 }, );
}

var averageBalance = function(array){
  let numberBalance = array.map(user => user.balance.replace(/[^\d.-]/g, ''));
 let average = _.reduce(numberBalance, function(sum, currentValue){
    sum = +sum + +currentValue;
    return sum
 }, 0); 
 return average / array.length;
};


var firstLetterCount = function(array, letter){
//  Find how many customer's names begin with a given letter
// Input: `Array`, `Letter`
// Output: `Number`
 return   _.reduce(array, function(total, person, index){
  // find the names that start with a given letter
  if(person.name.charAt(0).toUpperCase() === letter.toUpperCase()){
    // increment 
            total++
        }
        return total;
  }, 0)
  
}    
    

var friendFirstLetterCount = function(array, customer, letter){
//  Find how many friends of a given customer have names that start with a given letter
// Input: `Array`, `Customer`, `Letter`
// Output: `Number`
 return   _.reduce(array, function(total, person, index){
  // Get the object of the person but identifying their name
  if(person.name === customer){
    // loop through the array of friend objects 
    for (var key of person.friends){
        // compare the first character to the letter given
        if(key.name.charAt(0).toUpperCase() === letter.toUpperCase()){
            //if it matches increment
            total++
        }
    };
  }
  return total;
}, 0);     
    
}

var friendsCount = function(customers, name){
    let arrFriends= [];
    _.each(customers, function(e, i, array){
        for (let i = 0; i<e.friends.length; i++){
            if(name === e.friends[i].name){
                arrFriends.push(e.name);
            }
        }
    })
    return arrFriends;
}

var topThreeTags = function(array){
//Find the three most common tags among all customers' associated tags
//**Input**: `Array`
//*Output**: `Array`
//.pluck a new array of only tags
let tagArray1 = [];
tagArray1 = _.pluck(array, 'tags')
let tagArray = []
for (var i = 0; i < tagArray1.length; ++i) {
  for (var j = 0; j < tagArray1[i].length; ++j)
    tagArray.push(tagArray1[i][j]);
}

//create an object with tags an # of times tags appear
var tagsCount = _.reduce(tagArray, function(tagObj, tag, index){
  // check the object if the tag exists as a key yet
  if(tagObj[tag]){
    // increment it's count value if it does
    tagObj[tag]++;
  } else { 
      // if the obj does not contain the tag as a key
    // create a new key/val pair w/ the tag as key and 1 as value
    tagObj[tag] = 1;
  }
  return tagObj;
}, {})

var arrayOftags = [];


//make an nested array of that obj to compare index 1s
for(let key in tagsCount){
  // Push an array with an element of the word and its count 
  arrayOftags.push([key, tagsCount[key]]);
}


arrayOftags.sort(function(a, b){
    return b[1] - a[1];
})

let topThreeArray = arrayOftags.slice(0, 3);



let topThreeWords = _.map(topThreeArray, function(array){
    return array[0];
})

return topThreeWords;
};


var genderCount = function(array){

let genders = _.map(array, function(customers, i , a){
    return customers.gender
})

var genderObj = _.reduce(genders, function(cust, element){
  // check the object if the tag exists as a key yet
  if(cust[element]){
    // increment it's count value if it does
    cust[element]++;
  } else { 
      // if the obj does not contain the tag as a key
    // create a new key/val pair w/ the tag as key and 1 as value
    cust[element] = 1;
  }
  return cust;
}, {})

return genderObj 

}


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
