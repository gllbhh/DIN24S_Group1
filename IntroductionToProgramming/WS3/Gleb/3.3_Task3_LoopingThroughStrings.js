/*Looping Through Strings by Gleb Bulygin
for Introduction to Programming Course
Functionality:
    1. Ask the user to enter a string
    2. Loop through the string and print out the string letter by letter saying “1.
character is [first letter of given string.]”
*/

// print a welcome message
process.stdout.write("Please enter a string:\n");
// use util to acces .format() method
const util = require("util");
process.stdin.on("data", function (inputFromUser) {
	// save input to a string removing '\n' from the end and spaces before and after the string
	let inputString = inputFromUser.toString().trim();
	// start a counter
	let i = 0;
	// for every character in the string print a formatted line
	while (i < inputString.length) {
		// save a formatted string to a variable 'output'
		let output = util.format(
			"%d. character is '%s'.\n",
			i + 1,
			inputString.charAt(i)
		);
		//print output at constant line width for better looks
		process.stdout.write(output.padStart(22, " "));
		//increment i
		i++;
	}
	// exit the program
	process.exit();
});
