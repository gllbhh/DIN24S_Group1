/*Largest Number by Gleb Bulygin
for Introduction to Programming Course
Functionality:
    1. Ask user to type in numbers separated by space
    2. Compare numbers
    3. Print out the largest number
*/

//Print instruction
process.stdout.write("Enter three numbers to compare separated by a space:\n");
//Read input from the user
process.stdin.on("data", function (inputFromUser) {
	// create an array from inputFromUser with .split() using " " as a separator
	let givenInput = inputFromUser.toString().trim().split(" ");
	// easy way out
	// Math.max() reference
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
	process.stdout.write("Larger number is: " + Math.max(...givenInput) + "\n");

	//how it probably was planned
	let largestNumber = givenInput[0];
	if (givenInput[1] > largestNumber) {
		largestNumber = givenInput[1];
	}
	if (givenInput[2] > largestNumber) {
		largestNumber = givenInput[2];
	}
	process.stdout.write("The largest number is: " + largestNumber + "\n");
	process.exit();
});
