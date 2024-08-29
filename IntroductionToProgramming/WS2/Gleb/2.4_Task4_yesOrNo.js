/*Yes or No by Gleb Bulygin
for Introduction to Programming Course
Functionality:
    1. Ask user Yes or No question
    2. Print a message depending on the input ("Y" or "N" expected)
    3. Hanle incorrect input
*/

//Print initial message
process.stdout.write("Are you ok?\nY / N\n");
//Read input from the user
process.stdin.on("data", function (inputFromUser) {
	//convert the input to lowercase string
	let answer = inputFromUser.toString().trim().toLowerCase();
	//print message depending on the answer
	// switch reference:
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
	switch (answer) {
		case "y":
			process.stdout.write("There you go!\n");
			process.exit();
		case "n":
			process.stdout.write("It's okay to feel down. You'll get there!\n");
			process.exit();
		default:
			process.stdout.write("Please answer only 'Y' or 'N'\n");
	}
});
