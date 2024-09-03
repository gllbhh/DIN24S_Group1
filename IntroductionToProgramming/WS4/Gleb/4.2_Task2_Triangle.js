/* 
Triangle by Gleb Bulygin
for Introduction to Programming Course
Functionality:
    1. Ask user to enter the height of the triangle 
    2. Print out the triangle.
    Example: if height = 3
    *
    **
    ***
*/

// Prompt the user to enter the height of the triangle
process.stdout.write("Please enter the height of triangle: ");

// Set up an event listener for when the user provides input
process.stdin.on("data", function (inputFromUser) {
	// Convert the input from the user into a number
	let height = Number(inputFromUser.toString().trim());

	// Check if the input is a valid number
	if (!isNaN(height)) {
		// Loop through from 1 to the entered height
		for (let i = 1; i <= height; i++) {
			// Print out a line of asterisks equal to the current loop number
			process.stdout.write("*".repeat(i) + "\n");
		}
		// Exit the process after printing the triangle
		process.exit();
	} else {
		// If the input is not a number, prompt the user to enter a valid number
		process.stdout.write("Please enter the height of triangle: ");
	}
});
