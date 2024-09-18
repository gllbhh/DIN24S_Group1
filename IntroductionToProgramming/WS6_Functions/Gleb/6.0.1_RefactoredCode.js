// function getLargestNumber
function getLargestNumber(numbers) {
	// assign the largestNumber to the first number in the array
	let largestNumber = numbers[0];
	// find the largest number in a loop
	for (let i = 1; i < numbers.length; i++) {
		if (numbers[i] > largestNumber) {
			largestNumber = numbers[i];
		}
	}
	// return the largest number
	return largestNumber;
}

// function getSmallest number
function getSmallestNumber() {
	// assign smallestNumber to the first number in the array
	let smallestNumber = numbers[0];
	// find the smallest number in a loop
	for (let i = 1; i < numbers.length; i++) {
		if (numbers[i] < smallestNumber) {
			smallestNumber = numbers[i];
		}
	}
	// return the smallestNumber
	return smallestNumber;
}

let numbers = [];
process.stdout.write(
	"\n\nPlease enter a number (zero terminates the program): "
);

process.stdin.on("data", function (inputFromUser) {
	let userInput = inputFromUser.toString().trim();

	if (userInput == 0) {
		// pint out the largest number by calling getLargest number function
		process.stdout.write(
			"\nLargest number is " + getLargestNumber(numbers) + "\n"
		);

		// print out the smallest number by calling getSmallestNumber function
		process.stdout.write(
			"Smallest number is " + getSmallestNumber(numbers) + "\n\n"
		);

		process.exit();
	} else {
		// Add the number into array
		numbers.push(userInput);
		// Keep asking for numbers
		process.stdout.write(
			"\n\nPlease enter a number (zero terminates the program): "
		);
	}
});
