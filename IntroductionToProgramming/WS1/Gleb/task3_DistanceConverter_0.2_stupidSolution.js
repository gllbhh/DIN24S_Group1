/*Distance converter 0.2 by Gleb Bulygin
for Introduction to programming course
Functionality:
Programm askes user to input a distance in meters 
and converts it to distance in:
        * kilometers
        * miles
        * yards
        * feet
        * inches
        * light years
*/


const util = require("util");
const metersToKilometers = 0.001;
const metersToMiles = 0.000621371;
const metersToYards = 1.09361;
const metersToFeet = 3.28084;
const metersToInches = 39.3701;
const metersToLightYears = 1.057e-16;
//Print a message at the start
process.stdout.write("This is a simple meters to different distance units converter.\n" +
                     "Please, type in distance is meters: ");
//Read input from the user
process.stdin.on("data", function(inputFromUser)
{
    //Calculate the distance in different units
    let distanceInKilometers = Number(inputFromUser) * metersToKilometers;
    let distanceInMiles = Number(inputFromUser) * metersToMiles;
    let distanceInYards = Number(inputFromUser) * metersToYards;
    let distanceInFeet = Number(inputFromUser) * metersToFeet;
    let distanceInInches = Number(inputFromUser) * metersToInches;
    let distanceInLightYears = Number(inputFromUser) * metersToLightYears;

    //print out the distance
    process.stdout.write(inputFromUser.toString().trim() + " meters is:\n")
    process.stdout.write(distanceInKilometers.toFixed(3).padStart(25, " ") + " kilometers\n");
    process.stdout.write(distanceInMiles.toFixed(3).padStart(25, " ") + " miles\n");
    process.stdout.write(distanceInYards.toFixed(3).padStart(25, " ") + " yards\n");
    process.stdout.write(distanceInFeet.toFixed(3).padStart(25, " ") + " feet\n");
    process.stdout.write(distanceInInches.toFixed(3).padStart(25, " ") + " inches\n");
    process.stdout.write(distanceInLightYears.toFixed(3).padStart(25, " ") + " light years\n");
    
    process.exit();
});