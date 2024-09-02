/*Multiplication table by Gleb Bulygin
for Introduction to Programming Course
Functionality:
    * Ask the user to enter a number and then print out corresponding multiplication
table using a loop
    * Render it as image provided with the task
*/

const util = require("util");
//print welcome messge
process.stdout.write("Please enter a number to multiply: ");
// read input from user and print the multiplication table
process.stdin.on("data", function (inputFromUser) {
	// store the input from user in a variavle
	let inputValue = Number(inputFromUser.toString().trim());
	// if it is a number (not a NuN)
	if (!isNaN(inputValue)) {
		process.stdout.write(
			util.format("Multiplication table for %d: \n", inputValue)
		);
		// print 30 '*' characters
		console.log("*".repeat(30));
		let i = 1;
		while (i < 11) {
			// output is rendered as:
			// s1 = n * " " + i.toString() - to make a uniform spacing from the beginning of the line
			// then we pass i and inputValue to complete the string
			// at this point we will have strings where the last digit of i will be allined to the right
			let output = util.format(
				"%s * %d = %d",
				// i is converted to string to align the first colun of nubers to the right
				i.toString().padStart(10),
				inputValue,
				i * inputValue
			);
			// print out the output in between "*" characters
			// with padEnd we add n " " characters to fill the line up the length of 28
			// with two "*" characters we will have a line with length of 30 characters
			process.stdout.write("*" + output.padEnd(28) + "*\n");
			// increment i
			i++;
		}
		// print 30 '*' characters
		console.log("*".repeat(30));
		// exit the program
		process.exit();
	} else {
		process.stdout.write("Please enter a number to multiply: ");
	}
});
