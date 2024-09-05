/* 
Other Way Around by Gleb Bulygin
for Introduction to Programming Course
Functionality:
    1. Ask user to enter a string
    2. Print it out in reverse order
    Example:
        input: Hello
        output: olleH
*/

// Prompt the user to enter a string
process.stdout.write("Please enter a string: ");

// Set up an event listener for when the user provides input
process.stdin.on("data", function (inputFromuser) {
	// Convert the input from the user into a string and trim any whitespace
	let string = inputFromuser.toString().trim();

	// Loop through the string from the last character to the first
	for (let i = 0; i <= string.length; i++) {
		// Print each character starting from the end of the string
		process.stdout.write(string.charAt(string.length - i));
	}

	// Print a newline character to end the output neatly
	process.stdout.write("\n");

	// Exit the process after printing the reversed string
	process.exit();
});
