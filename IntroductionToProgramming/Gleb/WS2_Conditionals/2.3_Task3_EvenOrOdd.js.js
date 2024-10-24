/*Even or Odd by Gleb Bulygin
for Introduction to Programming Course
Functionality:
    1. Ask user to enter a number
    2. Check if it is even or odd
    3. Print the result
*/

//Print instruction
process.stdout.write("Enter a number: ");
//Read input from the user
process.stdin.on("data", function (inputFromUser) {
	// if the moduluo (%) is 0 - the number is even, else - odd
	if (inputFromUser % 2 == 0) {
		process.stdout.write(
			inputFromUser.toString().trim() + " is an even number.\n"
		);
	} else {
		process.stdout.write(
			inputFromUser.toString().trim() + " is an odd number.\n"
		);
	}
	process.exit();
});
