/*Distance converter by Gleb Bulygin
for Introduction to programming course
Functionality:
Programm askes user to input a distance in miles and converts it to distance kilometers.
The result is printed with basic wtite() and util.format()
*/


const util = require("util");
const milesToKilometers = 1.60934;
//Print a message at the start
process.stdout.write("This is a simple miles to kilometers converter.\n" +
                     "Please, type in distance is miles: ");
//Read input from the user
process.stdin.on("data", function(inputFromUser)
{
    //Calculate the distance in kilometers
    let distanceInKilometers = Number(inputFromUser) * milesToKilometers;
    
    //Output with standard write()
    //inputFromUser is a string and it has a '\n' character in the end
    //To print the rest of the message on the same line it is converted to a number
    //The result is rounded to 3 decimals
    process.stdout.write(Number(inputFromUser) + " miles is " + 
        distanceInKilometers.toFixed(3) + " kilometers.\n");
    
    //Output with util.format()
    process.stdout.write(util.format("%d miles is %d kilometers.\n", 
        inputFromUser, distanceInKilometers.toFixed(3) ));
    
    process.exit();
});