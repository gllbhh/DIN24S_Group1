/*
Linear Search
by Gleb Bulygin
for Introduction to Programming Course
Functionality:
    Program finds a specific items in an array
    1. Create an array with the following items: 55, 23, 6456, 324, 21, 234, 72, 21
    2. Ask the user what they want to search for in the integer array.
    3. Loop through the array and compare the values with the input given by the user.
    4. If the item is found, print out in which index the value was found.
    5. If the item is not found, print out a message saying item was not found
*/

let numbers = [55, 23, 6456, 324, 21, 234, 72, 21];

// Prompt the user to enter a number
process.stdout.write("Enter a number you'd like to search: ");

// Set up an event listener to handle data entered by the user (when the user presses Enter)
process.stdin.on("data", function (inputFromUser) {
	// Convert the input to a string and trim any extra whitespace
	let number = inputFromUser.toString().trim();

	// Check if the input is a valid number and not an empty string
	if (!isNaN(Number(number)) && number !== "") {
		// loop through the numbers and compare each element to the user input
		// If there is a match print a messasge and exit
		for (let i = 0; i < numbers.length; i++) {
			if (numbers[i] == number) {
				process.stdout.write(
					number + " was found in index " + i.toString() + "\n"
				);
				process.exit();
			}
		}
		// if code run until to here the number wa not found
		// print a message and exit
		process.stdout.write(number + " was not found\n");
		process.exit();

		// if the input was not a number ask user to input it again
	} else {
		process.stdout.write(
			"Seems like it was not a number. Enter a number you'd like to search: "
		);
	}
});
