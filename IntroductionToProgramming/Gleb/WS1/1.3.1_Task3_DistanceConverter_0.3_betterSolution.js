/*Distance converter 0.3 by Gleb Bulygin
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


// creating an array of objects to store the conversion coefficient and unit abbreviation
// object property can be accesed with units[0].value or units[0].unit
const units = [
    { value: 0.001, unit: "km" },
    { value: 0.000621371, unit: "mi" },
    { value: 1.09361, unit: "yd" },
    { value: 3.28084, unit: "ft" },
    { value: 39.3701, unit: "in" },
    { value: 1.057e-16, unit: "ly" }
];

//Print a message at the start
process.stdout.write("This is a simple meters to different distance units converter.\n" +
                     "Please, type in distance is meters: ");
//Read input from the user
process.stdin.on("data", function(inputFromUser){
    //Write a message
    process.stdout.write(inputFromUser.toString().trim() + " meters is:\n")
   
    //For every item in units calculate the distance and print out the result
    units.forEach(item =>{
        //calculate the distance
        //with item.value we can acces the coefficient
        let converted = Number(inputFromUser) * item.value;
        //print out converted value rounded up to 3 decimals and units 
        process.stdout.write(converted.toFixed(3).padStart(25, " ") + " " + item.unit + "\n");
   });
   
    //exit the program  
    process.exit();
});