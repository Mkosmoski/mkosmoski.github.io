
/*
 * SCOPING 
 *
 * Scopes are sections of the code. Depending on what scope a variable is in and what type of variable is being use determines on where you can access that variable
 * There are 3 scopes: global scope, local scope, block scope. 
 */
 

// 1. Global Scope //
/*
 * Think of global scope as the parent scope or the omnipresent scope. It's the largest scope and contains all other scopes inside of it.
 * Everything in the global scope is accessible from the local and block scope. Way to think of it as a parent scope it passes down all genes or properties to the children scopes OR it is omnipresent so it is present in all scopes
 */
 
 // 2. Local Scope (or Function Scoped) //
 /*
 * Think of local scope as a child scope or the function scope. 
 * All variables declared in functions are local-scoped, their variables are only accessible within the particular function
 * Think of them each as different children of the parent scope- they all have the traits of the parents (can access the partent variables) but have their own individual traits (variables) too and all those traits (variable) will be different in different children
 */
 
 var mario = "mario" //<-- exists on the global scope like mario in the mario universe of nintendo
 var yoshi = "yoshi"//<-- exists on the global scope like Yoshi in mario the universe of nintendo
 function yoshisIsland(){
     var babyMario = "baby Mario"; //babyMario var cannot be accessed outside this function, it is function scoped, much like Baby Mario is only a character in certain games like Yoshis Island and cannot be accessed by other games in the Mario universe unless declared in that game
     console.log(babyMario); 
     console.log(mario); //mario can be accessed here because mario is a global-scoped variable and is omnipresent in all scopes
 }
 //console.log(babyMario); <-- babyMario would not exist outside that function. this would print as a referenceError
 
 // 3. Block Scope //
 /*
 * Block scope is similar to local scope but instead of scoped to functions the variables are just scoped to block code in if-statements and loops. 
 * Variables that are blocked scoped are let and const. - var when declared in a block code can be accessed outside the block code
 * let and const variables declared in loop and if statements are block-scoped, their variables are only accessible within the particular if statement or loop
 * Think of them each as different children of the parent scope- they all have the traits of the parents (can access the partent variables) but have their own individual traits (variables) too and all those traits (variable) will be different in different children
 */
 
var characters = ["mario", "luigi", "yoshi", "birdo", "king boo"];

function isInLuigisMansion(char){
  var luigisMansion = [];
for (let player of char){
 if (player === "king boo"){
  luigisMansion.push(player);
} else if (player === "luigi"){
 luigisMansion.push(player);
} else if (player === "mario"){
 luigisMansion.push(player);

 }
}

 console.log("Luigi's Mansion has the characters:" + luigisMansion.join(" & "))
 
}

isInLuigisMansion(characters);