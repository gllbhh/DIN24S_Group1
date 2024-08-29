/*Largest Number by Gleb Bulygin
for Introduction to Programming Course
Functionality:
    1. Ask user to type in two numbers separated by space
    2. Compare two numbers
    3. Print out the largest number
*/

//Print instruction
process.stdout.write("Enter two numbers separated by a space.\n");
//Read input from the user
process.stdin.on("data", function (inputFromUser) {
	// create an array from inputFromUser using " " as separator
	let givenInput = inputFromUser.toString().trim().split(" ");
	//variable to store the largest number
	let largestNumber = givenInput[0];
	// compare two numbers
	// ??? Will it work without Number() ??? -- proably yes. '4' will be converted to 4 before comparisson
	if (Number(givenInput[1]) > largestNumber) {
		largestNumber = Number(givenInput[1]);
	}

	// print out larger number
	process.stdout.write("The largest number is: " + largestNumber + "\n");
	process.exit();
});
