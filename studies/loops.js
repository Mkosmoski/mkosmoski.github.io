/*
 * LOOPS:
 *
 * Code-block that will run mutiple times "in a loop" within the constraints given 
 * Loops will reduce repetition in your code
 *
 * Loops have three steps:
 *   where does the loop START?
 *   how long does it loop? Or when does it STOP?
 *   what changes as it loops through the data?
 */
 
// 1. WHILE LOOP //
/*
 * The only loop that returns the start before looping through the change
 *
 * structure:
  var myVar : "data";   // start 
  while (_____ ){       // stop
  console.log();        // code to run
  myVar++;              // what changes as it loops
 }
 */
 
 var even = 2           //start at 2
 while (even < 22){     //while the even number is less than 22 continue the loop
  console.log(even);    //print the even number
  even += 2;            //add 2 to even and loop back to the beginning- resulting in couting up by twos
 }
 
// 2. FOR LOOP //
/*
 * An index loop; meaning it loops through the index of data given
 * 
 * structure:
  for (//start; //stop; //what changes){
   //what you do with the code returned from the loop;
  }
 */

for(var i = 22; i>0; i--){   // for (the start/index = 22; as long as the index is more than 0; minus 2)
 console.log(i);              // print the idexes as they loop- resulting in counting down by evens
} 


// 3. FOR-IN vs FOR-OF LOOP//
/*
 * for-in loops loop through object
 * structure:
  for (var key in object){
   //what you do with the code returned from the loop;
  }
 
 * for-of loops loop through arrays
 * structure:
  for (var key of array){
   //what you do with the code returned from the loop;
  }
 * NOTE: use bracket notation with both to access keys or indexes
 */

var meaningfulNumbers = {
 answer: 42,
 rockstar: 27,
 year: 2020
}

for(var key in meaningfulNumbers){    //loop over (key reference in object that has already been declared)
 console.log(key);                    //print the keys in the objects
 console.log(meaningfulNumbers[key]); //bracket notation to print the values of the keys
}

var numbersAgain = [42, 27, 2020]

for(var numbers of numbersAgain){    //loop over referenced index of already declared array
 console.log(numbers);               //print all indexes of array
 console.log(numbersAgain[2])        //use bracket notation to print a specific index in the array
}

//fun different ways to go backwards through an array
 
 for (var i=numbersAgain.length-1; i<=0; i--){   //using for loop
  console.log(i)
 }
 
for (var numbers of numbersAgain.reverse()) { //using for-of but reverses your array in the code and this is not always desirable
    console.log(i); 
}