/*
 * CONTROL FLOW
 *
 * If and Switch statments direct how your code will pan out or flow.
 * These statments offer a conditional that if met will execute one direction of
 * code and if not met will execute another direction of the code. 
 * There is no limit on how many directions a code can take!
 *
 */
 

// 1. IF STATMENTS //
/*
 * If statemtnt is named because it starts with an IF giving the code options 
 * based on if something is true or false.
 * If it is true run this code. If not don't! The code will be skipped
 *
 *Structure:
  if (condition){
      //code you want to run
   };
 *
 */
 var fruit = "not ripe"
 if (fruit === "ripe" ){
 console.log("harvest");
 };
 
// 2. ELSE-IF STATMENTS //
/*
 * You can extend your if statements with more conditionals  
 * giving your code more options on how to flow
 *
 *structure:
 if (condition1){
   //code you want to run if condition1 is true
 } else if(condition2){
   //code you want to run if condition2 is true
 };
 *
 */
 var fruit = "not ripe"
 if (fruit === "ripe" ){
   console.log("harvest");
 } else if(fruit === "not ripe"){
   console.log("leave alone");
 }

// 3. ELSE STATEMENTS
/*
 * To cover all your bases end your if statement with an else statement
 * This gives you a default code to run incase what you predicted would happen 
 * didn't.
 *
 *Structure:
 if (condition1){
   //code you want to run if condition1 is true
 } else if(condition2){
   //code you want to run if condition2 is true
 } else {
  //code to run as default if other conditions all run false
 }
 *
 */

var fruit = "not ripe"
 if (fruit === "ripe" ){
   console.log("harvest");
 } else if(fruit === "not ripe"){
   console.log("check again in a few days");
 } else {
   console.log("I'm not sure that is a fruit");
 };
 
 // 4. SWITCH STATEMENTS
/*
 * Switch statements work similarily to if statments but have a different 
 * structure starting off with a given input the switch statement will compare 
 * with it's case and run code based on which case is true
 *
 *Structure:
 
 switch(base input){
  case ______:
    //run this code;
   break;
  case ______:
    //run this code;
   break;
  case ______:
    //run this code;
    break; 
  default:
    //run this code;
 }
 * NOTE: you can have many cases before you break!
 */
 
 var wizard = "Ginny"

switch(wizard){
 case "Nevil":
 case "Luna":
 case "Ginny":
  console.log("Student at Hogwarts");
 case "Minerva":
 case "Albus":
  console.log("Professor at Hogwarts");
 case "Filch":
  console.log("Squib");
 default:
  console.log("I solemly swear I'm up to no good")
}