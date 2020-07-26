/*
 * STRING MANIPULATION:
 *
 * Strings are simple datatypes that can be manipulated in many ways
 *
 */
 

// 1. WITH OPERATORS //
/*
 * Manipulating strings with operators (more info on operators in the operators section)
 */
 
 // Combine strings with "+"
 console.log("Snow" + "ball!") // will print "Snoball!"
 
 //Access a charcter inside a sting with bracket notation
 var snowball = "Snowball!";
 console.log(snowball[3]) // will print "w"
 
 
 
// 2. WITH STRING METHOD //
/*
 * Other methods of manipulating strings
 */
 
 // Find the length of a string//
 snowball.length // equals 8
 
 //Force lowercase or uppercase on a string
 console.log(snowball.toLowerCase())// snowball!
 console.log(snowball.toUpperCase())// SNOWBALL!
 
 //Replace part of the string//
 snowball.replace("!", "<3") // Snowball<3
 
 //slice a part of the string//
 snowball.slice(1, 4) // results "now". The indexes in the parthensis allow you to chose the portion you want to slice
 snowball.slice(6) // results "all<3". Use one index if you want to slice to the end of the string
 
 //Search a string//
 /*
 * use indexOf() and lastindexof() to find the starting index of a portion of the string
 * use search() to find the starting point of a portion of the string
 */
 let treat = "I want a snowball. I want a weddingcake snowball!"
 let snowballPos = treat.indexOf("snowball") // 9 - index of where the first occurance of "snowball" starts
 let lastSnowballPos = treat.lastIndexOf("snowball") // 40 - index of where the last occurance of "snowball" starts
 let weddingcakePos = treat.search("weddingcake snoball") // 28 - index of where the first occurance of "weddingcake snowball" starts
 
//Join Strings
let myFavorite = snowball.concat("", "my favorite dessert") // "Snowball<3 is my favorite dessert"

//Access a Character in a String
let w = snowball.charAt(3) //w 

//change string to an array
let snowballLetters = snowball.split("")// ["s","n","o","w","b","a","l","l"]
