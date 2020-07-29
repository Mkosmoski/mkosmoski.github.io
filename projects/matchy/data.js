/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {};

animal.species = "cat";
animal['name'] = "Tiger";
animal.noises = [ ];

console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = [];
noises[0] = "chirp";
noises.push("meow");
noises.unshift("RAWR");
noises.push("hiss");
console.log(noises.length);
console.log(noises[noises.length -1]);
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Using **bracket syntax**, assign the `noises` property on `animal` to our new `noises` array
animal["noises"] = noises

//Using any syntax add another noise to the `noises` property on `animal`.

animal.noises.push("bark")
console.log(animal)



/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * Different ways to access properties on objects is by using the . method Ex. person.name or by using the bracket method person[name]

 *
 * 2. What are the different ways of accessing elements on arrays?
 * The only way to access an element on an array is by using the bracket method to invoke the index of the array.
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = [];
animals.push(animal);
console.log(animals);
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
animals.push(duck);
console.log(animals);
var bird = { species: 'parakeet', name: 'Spots', noises: ['chirp', 'tweet'] };
animals.push(bird);
var cat = { species: 'feline', name: "Mcfluffins", noises: ['meow', 'hiss', 'purrrrrrrr']};
animals.push(cat);
console.log(animals);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//making an array of friends
var friends = [];

function getRandom(animals) {
    return friends.push(animals[Math.floor(Math.random() * animals.length)]);
}

console.log(friends);

animal['friends'] = friends;

console.log(animals);
/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}