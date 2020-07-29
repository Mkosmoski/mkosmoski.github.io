/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* 1. Open up the file `functions.js` in your editor.
 2. Implement a function declaration called `search` that:
   - Takes a paramater representing an Array of `animals`.
   - Takes a paramater representing a String, the name of an animal on which to perform a search.
   - Looks through the `animals` Array, and returns the animal's Object if an animal with that name exists.
   - Returns `null` if no animal with that name exists
 3. Use the search bar at the top of the page to make sure your function works.
*/

function search(animals, name){
    for(let i = 0; i < animals.length; i++){
        if(animals[i].name === name){
            return animals[i]; 
         
        }
         
    }
  return null
}
//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*1. Write a function declaration called `replace` with a signature of `replace(animals, name, replacement) { //... } ` that:
   - Takes 3 parameters, an Array of animals, a String representing  the name of an animal on which to perform a search, and an Object that represents the replacement animal.
   - If an animal with that name exists within the `animals` Array, replace it's entire Object with the replacement Object.
   - Otherwise do nothing.
 2. Preview the `index.html` page to test it on the website.
*/

function replace(animals, name, replacement){
    //animals in an array, name is a string, replacement is an object of a replacement animal
    
    //loop through the array searching for an with the name === name
    for (let animalArray of animals){
 if (animalArray.name === name){
     //when found replace using splice with parameter 'replacement'
     animals.splice(animals.indexOf(animals.name), 1, replacement);
 }
  //no else needed because if the name doesnt equal name we want our arrray to stay the same
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/* 1. Write a function declaration called `remove` with a signature of `remove(animals, name)` that:
   - Takes 2 parameters, an Array of animals, and a name of an animal on which to perform a search.
   - If an animal with that name exists within the `animals` Array, remove it.
 2. Test that it works on the website.
*/
function remove(animals, name, remove) {
    for (var i = 0; i < animals.length; i++) {
        return animals[i].name === name ? animals.splice([i],1) : console.log(animals[i].name);
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*1. Write a function declaration called `add` with a signature of `add(animals, animal) { //... }` that:
   - Takes 2 parameter, an Array of animals, and an Object representing a new animal to be added.
   - Checks that the animal Object has a `name` property with a length > 0.
   - Checks that the animal Object has a `species` property with a length > 0.
   - Has a **unique** name, meaning no other animals have that name.
   - Adds this new Object to the `animals` Array, **only** if all the other conditions pass.
   - Make sure it works.
  */ 
function add(animals,animal) {
 //animals is an array, animal is a new object
 //check if animal.name is >0 in length 
 if (animal.name.length >0 && animal.species.length >0 ){
     //loop through animals array 
     for (var i = 0; i< animals.length; i++){
         //if the name property of the new object equals any name property of the orignal array objects return nothing
         if(animals[i].name === animal.name){
             return
        //if the name property if animal.name does not equal a name already present in the array add the animal object to the array
         } else if(animals[i].name !== animal.name){
         return animals.push(animal);
         }
         
     }
 }
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
