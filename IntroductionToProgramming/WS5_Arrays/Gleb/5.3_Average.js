/*
Average
by Gleb Bulygin
for Introduction to Programming Course
Functionality:
    1. Ask the user to enter a number
    2. Store entered numbers in an array
    3. Repeat until a letter is entered
    4. Calculate the average value from entered numbers and print it out
*/

// Initialize an empty array to store the numbers entered by the user
let numbers = new Array();

// Prompt the user to enter a number
process.stdout.write("Please enter a number: ");

// Set up an event listener to handle data entered by the user (when the user presses Enter)
process.stdin.on("data", function (inputFromUser) {
	// Convert the input to a string and trim any extra whitespace
	let number = inputFromUser.toString().trim();

	// Check if the input is a valid number and not an empty string
	if (!isNaN(Number(number)) && number !== "") {
		// If it is a valid number, add it to the numbers array as a Number
		numbers.push(Number(number));
		// Prompt the user to enter another number
		process.stdout.write("Please enter a number: ");
	} else if (number === "") {
		// If the input is empty (i.e., user pressed Enter without typing anything), ask for a number again
		process.stdout.write("Please enter a number: ");
	} else {
		// If the input is not a number (i.e., a letter is entered), calculate the average
		if (numbers.length != 0) {
			// Initialize variables to hold the sum and average of the numbers
			let sum = 0,
				average = 0;

			// Loop through the numbers array and calculate the sum
			numbers.forEach((numberInNumbers) => {
				sum += numberInNumbers;
			});

			// Calculate the average by dividing the sum by the number of elements in the array
			average = sum / numbers.length;

			// Output the average value, formatted to 3 decimal places
			process.stdout.write(
				"\nThe average is: " + average.toFixed(3).toString() + "\n"
			);

			// Exit the program
			process.exit();
		} else {
			// If no numbers were entered, inform the user that there aren't enough numbers to calculate the average
			process.stdout.write(
				"\nThere are not enough numbers to calculate the average.\n"
			);

			// Exit the program
			process.exit();
		}
	}
});
