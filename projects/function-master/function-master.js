//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
 //Should take an object and return its values in an array
 
 var objectOne = {a: "one", b: "two", ponies: "crayons", dingle: "dangle"};
 var objectTwo = {c: "three", d: "four", crayons: "ponies", dangle: "dingle"};

//function to return object values using the Object.values -- could also use a for-in loop      
function objectValues(object) {
    return Object.values(object);
    
} 

objectValues(objectOne);
objectValues(objectTwo);

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object and return all its keys in a string each separated with a space

var objectOne = {a: "one", b: "two", ponies: "crayons", dingle: "dangle"};
var objectTwo = {c: "three", d: "four", crayons: "ponies", dangle: "dingle"};
      
//function to return the keys in an object to a string
function keysToString(object) {
     
       object = Object.keys(object);
       return object.join(" ");

}

keysToString(objectOne);
keysToString(objectTwo);

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object and return all its keys in a string each separated with a space

var objectOne = {a: "one", b: "two", ponies: "crayons", something: {}, dingle: "dangle"};
var objectTwo = {c: "three", boolean: false, d: "four", crayons: "ponies", dangle: "dingle"};
    
//function to return the values of an objet to a string  
function valuesToString(object) {
  //create a new array of object values
  object = Object.values(object);
  
  //for-of loop to loop through array looking for if the typeof a value 
   for (let value of object){
       if(typeof(value) !== "string"){
           //splice out the not strings
       object.splice(object.indexOf(value), 1);
       }
   }
   //join the object with spaces
   return object.join(' ')
}

valuesToString(objectOne);
valuesToString(objectTwo)

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take one argument and return 'array' if its an array and 'object' if its an object"

function arrayOrObject(collection) {
  //check if function is an array with Array.isArray
   if(Array.isArray(collection) ){
       return 'array';
  //use typeof to find if collection equals an object... could also just 'else' but if a string came through typeof would have our bases covered
   } else if (typeof collection === 'object'){
       return 'object';
   }
}

arrayOrObject({a:"one"});
arrayOrObject([1,2,{}]);

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//function to capitalize the first letter in all words of a string and return the string
function capitalizeWord(string) {
//first uppercase the 1st char and concat it to the rest of the srting still lowercased 
   return string.charAt(0).toUpperCase() + string.slice(1, string.length);
}
capitalizeWord("greg");
capitalizeWord("pumpkin");
capitalizeWord("quattuordecillion");


//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

//a string with multiple words, capitalize the first char in all of the words and return new string
function capitalizeAllWords(string) {
    //turn string into an array so it is easy to access the first char of each word
            let stringArray = string.split(" ");
            string = []
            //for loop through the new array capitalizing each word and returning it to a new array
             for(var i = 0 ; i < stringArray.length; i++){
                string.push(stringArray[i].charAt(0).toUpperCase() + stringArray[i].substr(1))
            
            }  
            //make the new array a string with the join() method
            return(string.join(' '))
    }

capitalizeAllWords("one two three four")
capitalizeAllWords("please excuse my dear aunt sally")

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//function to return the value of the 'name' key in a given object with the word welcome before it and an ! after
function welcomeMessage(object) {
    let name = object.name.charAt(0).toUpperCase() + object.name.substr(1);
    
    return "Welcome " + name + "!"
}

welcomeMessage({name: "Charlie"});
welcomeMessage({name: "bert"});

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object with a name an a species and return '<Name> is a <Species>'

function profileInfo(object) {
    // create name variable that capitalizes the first letter and concats with the lowercase letters
    let name = object.name.charAt(0).toUpperCase() + object.name.substr(1);
    //create species variable that capitalizes the first letter and concats with the lowercase letters
    let species = object.species.charAt(0).toUpperCase() + object.species.substr(1);
    //return name concated with species
    return name + " is a " + species
}

profileInfo({name: "jake", species: "dog"});
profileInfo({name: "reggie", species: "dog"});

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object, if this object has a noises array return them as a 
//string separated by a space, if there are no noises return 'there are no noises'

maybeNoises({noises:["bark", "woof", "squeak","growl"]});
maybeNoises({noises: []});
maybeNoises({});

function maybeNoises(object) {   
 // create a new array
 let objectArray = [];
   
   //if statement to find if .noises exists or has any noises 'there are no noises'
    if(object.noises === undefined || object.noises[0] === undefined ){
        //if it has no noises or noise does not exist return 
        return "there are no noises";
        
    } else if(typeof object.noises[0] === 'string'){
      //if there are noises loop through the object.noises and push them into the new arrya
      for(let i = 0; i < object.noises.length; i ++){
        objectArray.push(object.noises[i]);
}
        //return new array as a string with spaces
        return(objectArray.join(" "))
 }
}


//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a string of words and a word and return true if <word> is
//in <string of words>, otherwise return false."


var data = "This is a super awesome string of words";

function hasWord(string, word) {
//creat an array and put the split string into it
var dataArray = [];
dataArray = string.split(" ");
  
  //using the .includes return false if the array includes the ord given
  if(!dataArray.includes(word)){
     return false;
     
  }else {
        return true;
    } 

}

hasWord(data, "awesome");
hasWord(data, "words");
hasWord(data, "turtle");

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a name and an object and add the name to the object's friends array 
//then return the object"

function addFriend (name, object) {
  //add friend by using .push into the friends array
   object.friends.push(name);
   return object;
}

addFriend("lester", {friends:[]});
addFriend("jimmy", {friends:["bobby","jones"]});

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//isFriend() : Should take a name and an object and return true if <name> is a 
//friend of <object> and false otherwise", function(assert){
   
function isFriend(name, object) {
    //if statement to find if name is in object
    //loop through the array in the object to compare to name
    if (object.friends === undefined){
        return false
}
    for (let i = 0; i < object.friends.length; i++){
        if (object.friends[i] === name){
            return true;

        }
    } return false
}

isFriend("jimmy",{friends:["bobby", "ralf"]});
isFriend("ralf",{friends:["bobby", "ralf"]});
isFriend("chuck",{});

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a name and a list of people, and return a list of all the names
// that <name> is not friends with"

var data = [ {name: "Jimmy", friends:["Sara", "Liza"]},
        {name: "Bob", friends:[]},
        {name: "Liza", friends: ["Jimmy"]},
        {name: "Sara", friends: ["Jimmy"]}
      ];
      
function nonFriends(name, array) {
//make an array for the enemies
    let enemies = [];
    
    // loop through array.name  to find the person  of name
    for (let i = 0; i < array.length; i++){
   
   
         //loop through arrays for someone without the name 'name' and without a friend named 'name'
         if( !(array[i]['name'] === name) && !array[i]['friends'].includes(name) ){
             enemies.push(array[i]['name']);
    }


}
return enemies;
}

nonFriends("Jimmy", data);
nonFriends("Bob", data);
nonFriends("Sara", data);

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object, a key and a value. Should update the property <key> on 
//<object> with new <value>. If <key> does not exist on <object> create it.


var data = {a: "one", b: "two", "hokey": false};

function updateObject(object, key, value) {
       //use bracket notation to add a value and or key to the object
        object[key] = value;
    // return the object 
    return object;
}



updateObject(data, "b", "three");

var data = {a: "one", b: "two", "hokey": false};
updateObject(data, "ponies", "yes");

var data = {a: "one", b: "two", "hokey": false};
updateObject(data, "a", Infinity);

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object and an array of strings. Should remove any properties on 
//<object> that are listed in <array>", function(assert){
  

var data = {a: "one", b: "two", "hokey": false};


function removeProperties(object, array) {
//loop through object to find key properties === array
for (var key in object){
    for (var index of array){
       //if the property euqals the array values delete that object property/key
        if (key === index){
            delete object[key]
            
        }
    }
} return object

}


removeProperties(data, ["a","hokey"]);
var data = {a: "one", b: "two", "hokey": false};
removeProperties(data, ["b"]);
var data = {a: "one", b: "two", "hokey": false};
removeProperties(data, []);

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an array and return an array with all the duplicates removed

 var arrayOne = [1,2,2,2,3,4,5,5,5,5,"a","b","b","b","c"];
 var arrayTwo = ["hello", "hello", "hello", "hello", "hello", "world", "hello", "world", "world", "world"];
    

function dedup(array) {
    //loop through array to find the first instance of a value
   var helpfulArray = [];
    for (var i = 0; i < array.length; i++){
        //if the value does not yet exist in the new array push it into the array
        if(helpfulArray.indexOf(array[i]) === -1) {
            helpfulArray.push(array[i]);
        }
        //return the array of all the first instance of a value of the original array
    }return helpfulArray
        

}

dedup(arrayOne);
dedup(arrayTwo);

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}