/*Logical operators by Gleb Bulygin
for Introduction to Programming Course
Functionality:
    1. Ask user to type in three numbers separated by space
    2. Print message depending on the user input:
        * If all three numbers are equal print out “You entered three matching numbers”.
        * If all three numbers are different print out “You entered three different numbers”.
        * If first two are the same, but the third one is different, print out “Third one doesn’t fit”.
        * If any of the numbers is 2, enter “You entered the magic number 2!”
    
*/

//Print instructions
process.stdout.write("Enter three numbers separated by a space:\n");
//Read input from the user
process.stdin.on("data", function (inputFromUser) {
	// create an array from inputFromUser with .split() using " " as a separator
	let givenInput = inputFromUser.toString().trim().split(" ");
	// check if all three numbers are equal
	// (a0 == a1) && (a1 == a2)
	if (givenInput[0] == givenInput[1] && givenInput[1] == givenInput[2]) {
		process.stdout.write("You entered three matching numbers\n");
	}
	// check if all numbers are different
	// (a0 != a1) && (a0 != a2) && (a1 != a2)
	if (
		givenInput[0] != givenInput[1] &&
		givenInput[0] != givenInput[2] &&
		givenInput[2] != givenInput[3]
	) {
		process.stdout.write("You entered three different numbers\n");
	}
	// check if first two are equal and the third is different
	// (a0 == a1) && (a1 != a2)
	if (givenInput[0] == givenInput[1] && givenInput[1] != givenInput[2]) {
		process.stdout.write("Third one doesn’t fit\n");
	}
	// this one is done inside a for loop
	// if any of the numbers is equal to 0 it will ptint the message and exit loop
	// if a[i] == 2 >> ptint message, exit loop
	for (let i = 0; i < givenInput.length; i++) {
		if (givenInput[i] == 2) {
			process.stdout.write("You entered the magic number 2!\n");
			break;
		}
	}
	//exit the process
	process.exit();
});
