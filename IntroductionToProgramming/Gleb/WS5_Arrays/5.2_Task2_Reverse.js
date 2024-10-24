/*
Reverse
by Gleb Bulygin
for Introduction to Programming Course
Functionality:
    1. Ask user to enter a number
    2. Store entered numbers in an array
    3. Repeat until 0 is entered
    4. Print out numbers in a reverse order
    * Don't use array methods for this but only simple loops
*/

// Initialize an empty array to store the numbers entered by the user
let numbers = new Array();

// Prompt the user to enter a number
process.stdout.write("Please enter a number: ");

// Set up an event listener to handle data entered by the user (when the user presses Enter)
process.stdin.on("data", function (inputFromUser) {
	// Convert the input to a string and trim any extra whitespace
	let number = inputFromUser.toString().trim();

	// Check if the input is a valid number
	if (!isNaN(Number(number))) {
		// If it is a number, add it to the numbers array
		numbers.push(number);

		// Check if the entered number is "0", which is the stopping condition
		if (number.toString() == "0") {
			// Once "0" is entered, print the array in reverse order
			process.stdout.write("Reverse order: ");
			// Loop through the array from the last element to the first
			for (let i = numbers.length - 1; i >= 0; i--) {
				// Print each number with a space after it
				process.stdout.write(numbers[i].toString().trim() + " "); // for some reason there were exptre empty spaces after 0. .trim() fixed it
			}
			process.stdout.write("\n");

			// Exit the process as the task is complete
			process.exit();
		}

		// If the input is not 0, prompt the user to enter another number
		process.stdout.write("Please enter a number: ");
	} else {
		// If the input is not a valid number, prompt the user to enter a valid number
		process.stdout.write("Please enter a NUMBER: ");
	}
});
