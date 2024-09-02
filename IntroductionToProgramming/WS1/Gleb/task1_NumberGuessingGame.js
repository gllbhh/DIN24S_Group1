/*Number guessing game by Gleb Bulygin
for Introduction to programming course
Functionality:
    1. Program asks the user to enter a number.
    2. Set secret number to be entered number plus one.
    3. Print out whether the user won or not.
*/

//used for formating output
const util = require("util");
//Print a message at the start
process.stdout.write("This program is a number guessing game.\nPlease, type in a number: ");
//Read input from the user
process.stdin.on("data", function(inputFromUser)
{
    //convert the inputFromUser to a number
    let givenInput = Number(inputFromUser);
    //create a variable myNumber and set it to givenInput plus 1
    let myNumber = givenInput + 1;
    //Write a game result message to the User
    //"%d" is a placeholder for a number
    //"%s" is a placeholder for a string
    //A long string can be split into multiple after an operator or a comma
    process.stdout.write(util.format("Your number is %d.\n" +
                                     "My number is %d.\n" +
                                     "Sorry, you lost. I won. The game is over!\n", 
        givenInput, myNumber));
    //if the is no "process.exit();" the game will repeat from the number input
    //one can use GTRL + C to terminate the process
    process.exit();
});