/*basic calculations by Gleb Bulygin
for Introduction to programming course
Functionality:
Programm askes user to input a number and peroms following 
calculations with this number and a predefined secret number:
    * Addition ("+")
    * Substraction ("-")
    * Multiplication ("*")
    * Division ("/")
    * Modulus ("%")
    * Increment ("++")
    * Decrement ("--")
*/

const util = require("util");
//Array with symbols for basic operations
chars = ["+", "-", "*", "/", "%", "++", "--"];
//Define secret number
const x = 42;
//Print a message at the start
process.stdout.write("This is a basic calculations program.\n" +
                     "Please, type in a number: ");
//Read input from the user
process.stdin.on("data", function(inputFromUser)
{
    //Convert inputFromUser to number removing "\n" character from the end of the string
    let givenInput = Number(inputFromUser.toString().trim());
    //Create an empty array
    let results = [];
    //Store the addition result in results[0], substruction in results[1], etc.
    results[0] = givenInput + x;
    results[1] = givenInput - x;
    results[2] = givenInput * x;
    results[3] = givenInput / x;
    results[4] = givenInput % x;
    results[5] = givenInput + 1;
    results[6] = givenInput - 1;
    //Print out basic calculations in for loop
    for (let i = 0; i < chars.length; i++){
        //Output for operations with secret number
        if (i < chars.length - 2){
            process.stdout.write(util.format("%d %s x = %d \n",givenInput, chars[i], results[i]));
        }
        //Output for increment and decrement
        else{
            process.stdout.write(util.format("%d%s = %d \n",givenInput, chars[i], results[i]));
        }
    }
    //exit the program
    process.exit();
});