/* 
toMixedCase() by Gleb Bulygin
for Introduction to Programming Course
Functionality:
    1. Ask user to enter a string
    2. Print it out so that all odd characters are in uppercase
       and all even characters are in lowercase.
    * use for loop
*/

// Prompt the user to enter a string
process.stdout.write("Please enter a string: ");

// Set up an event listener that will trigger when the user provides input
process.stdin.on("data", function (inputFromUser) {
	// Convert the input from the user into a string, trim any leading/trailing whitespace,
	// and convert the entire string to lowercase
	let string = inputFromUser.toString().trim().toLowerCase();

	// Initialize an empty string to store the result
	let result = "";

	// Loop through each character in the string
	for (let i = 0; i < string.length; i++) {
		// Check if the index is even (i.e., if the character is in an odd position in 1-based indexing)
		if (i % 2 == 0) {
			// Convert the character to uppercase and add it to the result string
			result += string[i].toUpperCase();
		} else {
			// Add the character as is (already in lowercase) to the result string
			result += string[i];
		}
	}

	// Output the resulting string with the specified character casing
	process.stdout.write(result + "\n");

	// Exit the process since we're done
	process.exit();
});
