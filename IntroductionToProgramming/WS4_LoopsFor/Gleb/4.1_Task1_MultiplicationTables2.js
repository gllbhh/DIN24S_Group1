/*Multiplication tables 2 by Gleb Bulygin
for Introduction to Programming Course
Functionality:
    * print multiplication tables for numbers [1..10] using nested for loops
*/
const util = require("util");
//print welcome messge
for (let i = 1; i <= 10; i++) {
	process.stdout.write("Multiplication table for " + i + "\n");
	// print 30 '*' characters
	console.log("*".repeat(30));
	for (let j = 1; j <= 10; j++) {
		// output is rendered as:
		// s1 = n * " " + i.toString() - to make a uniform spacing from the beginning of the line
		// then we pass j and i * j to complete the string
		// at this point we will have strings where the last digit of i will be allined to the right
		let output = util.format(
			"%s * %d = %d",
			// i is converted to string to align the first colun of nubers to the right
			j.toString().padStart(10),
			i,
			i * j
		);
		// print out the output in between "*" characters
		// with padEnd we add n " " characters to fill the line up the length of 28
		// with two "*" characters we will have a line with length of 30 characters
		process.stdout.write("*" + output.padEnd(28) + "*\n");
	}
	// print 30 '*' characters
	console.log("*".repeat(30));
}
