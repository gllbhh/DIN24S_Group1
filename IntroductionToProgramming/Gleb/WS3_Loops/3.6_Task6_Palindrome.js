/*Palindrome by Gleb Bulygin
for Introduction to Programming Course
Functionality:
    1. Ask the user to enter a string
    2. Check if it is a palindrome (a word, phrase, or sequence that reads the same backwards
as forwards, e.g. madam or nurses run) or not
    * use loops to solve this
*/

process.stdout.write("Please enter a string:\n");
const util = require("util");
process.stdin.on("data", function (inputFromUser) {
	// store input from user in input variable
	let input = inputFromUser.toString().trim().toLowerCase();
	//remove all the ' ' characters
	//\s: Matches any whitespace character (spaces, tabs, etc.).
	//+: Matches one or more occurrences of the preceding pattern.
	//g: Global flag, which means it will replace all occurrences, not just the first one.
	input = input.replace(/\s+/g, "");
	//console.log(input); // print the input with spaces removed
	// counter
	i = 0;
	// for half of the string do
	while (i < input.length / 2) {
		// check if the first symbol is matching the last symbol
		// if not, print a message and exit the program
		// if yes, move to the next symbol and compare second character with second character from the end
		if (input.charAt(i) != input.charAt(input.length - i - 1)) {
			console.log("Your input is not a palindrome.");
			process.exit();
		}
		i++;
	}
	console.log("Your input is a palindrome.");

	// exit the program
	process.exit();
});
