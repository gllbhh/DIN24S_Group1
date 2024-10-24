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
	* self task: extend the program to print out multiple indexes if the number is repeated
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
		// initialize an array to store all the instanses of the found number
		let indexArray = [];
		// variable will be set to true if the number will be found
		let numberFound = false;
		// loop through the numbers and compare each element to the user input
		// If there is a match print a messasge and exit
		for (let i = 0; i < numbers.length; i++) {
			if (numbers[i] == number) {
				// set numberFound to true
				numberFound = true;
				// add the index to the array
				indexArray.push(i);
			}
		}
		// if number was found print all the indexes where it was found
		if (numberFound) {
			process.stdout.write(
				number + " was found in index " + indexArray.join(", ") + "\n"
			);
			// if not print corresponding message
		} else {
			process.stdout.write(number + " was not found\n");
		}
		//exit the program
		process.exit();

		// if the input was incorrect ask user to enter a number again
	} else {
		process.stdout.write(
			"Seems like it was not a number. Enter a number you'd like to search: "
		);
	}
});
