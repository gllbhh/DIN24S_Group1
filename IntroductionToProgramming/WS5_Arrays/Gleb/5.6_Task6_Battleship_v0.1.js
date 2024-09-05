/*
Battleship v0.1
by Gleb Bulygin
for Introduction to Programming Course
Functionality:
Create a 5x5 Battleship game using a multidimensional array. 
Use asterisks to mark the ships. 
Ask the user for coordinates to shoot and give feedback to the user whether they hit a ship or not. Keep asking for as
long as there are ships left. Keep count of how many shots the player needed

	"*" — ship
	"x" — hit ship
	"•" — hit empty spot
	" " — empty spot

	for field 5x5:
	***  — x1
	**   — x2
	*    — x3

	Note to self:
	The game is working in 5x5 field. Most functions are scalable.
	Possible improovments:
		* ~~ fix a bug when you can shoot to the same point and win — done
		* ship placing fuctionality
		* automatic ship placment
		* automatic ship placment depending on the field size
		* automatic win/loose conditiond according to the field size/amount of ships
		* make the example and the actual map different xD
		
*/

const util = require("util"); // Import the 'util' module for formatted output

// prints out the field
function displayField(field) {
	for (let i = 0; i < field.length; i++) {
		for (let j = 0; j < field[i].length; j++) {
			process.stdout.write("  " + field[i][j]);
		}
		process.stdout.write("\n");
	}
}

// function to check if there is a ship in given coordinates
function isHit(x, y, fieldWithships) {
	if (
		x <= fieldWidth &&
		y <= fieldHeight &&
		x != 0 &&
		y != 0 &&
		fieldWithShips[y][x] == "*"
	) {
		return true;
	}
	return false;
}

// set a new field
// this field will be displayed to the player
let field = new Array();
let fieldWidth = 5,
	fieldHeight = 5;

// fill field with ' '
for (let i = 0; i <= fieldHeight; i++) {
	field[i] = new Array();
	if (i == 0) {
		field[i][0] = " ";
		for (let j = 1; j <= fieldWidth; j++) {
			field[i][j] = j;
		}
	} else {
		field[i][0] = i;
		for (let j = 1; j <= fieldWidth; j++) {
			field[i][j] = " ";
		}
	}
}

// used as a key to check hits
let fieldWithShips = [
	[" ", "1", "2", "3", "4", "5"],
	["1", "*", " ", "*", " ", "*"],
	["2", " ", " ", " ", " ", "*"],
	["3", "*", "*", " ", " ", "*"],
	["4", " ", " ", " ", " ", " "],
	["5", " ", "*", "*", " ", "*"],
];

// example field to display at start
let exampleFieldWithShips = [
	[" ", "1", "2", "3", "4", "5"],
	["1", "*", " ", "*", " ", "*"],
	["2", " ", " ", " ", " ", "*"],
	["3", "*", "*", " ", " ", "*"],
	["4", " ", " ", " ", " ", " "],
	["5", " ", "*", "*", " ", "*"],
];
// variables to store number of user attempts and number of succesful hits
let shotsCounter = 0,
	hitCounter = 0;

// constants to store win/loose conditions
const shotsLimit = 20,
	hitsToWin = 10;

// store number of ships in array where ships[0] - number of * ships
// ships[1] - amount of ** ships, etc.
let ships = [3, 2, 1];

// body of the program

// print out instructions
process.stdout.write(
	"Welcome to the the Battelship Game!\n" +
		"You will try to hit all the ships on a " +
		fieldWidth.toString() +
		"x" +
		fieldHeight.toString() +
		" field.\n" +
		"You will have " +
		ships[0] +
		" * ships, " +
		ships[1] +
		" ** ships, and " +
		ships[2] +
		" *** ship.\n" +
		"Check the example field for the game:\n"
);

// print the example field
displayField(exampleFieldWithShips);

// Prompt user to enter their attempt
process.stdout.write("Enter two numbers separated with a space: ");
process.stdin.on("data", function (inputFromUser) {
	// create an array from inputFromUser using " " as separator
	let givenInput = inputFromUser.toString().trim().split(" ");
	//check if the input is valid
	if (
		givenInput[0] != "" &&
		givenInput[1] != "" &&
		!isNaN(Number(givenInput[0])) &&
		!isNaN(Number(givenInput[1])) &&
		givenInput.length == 2
	) {
		// check if there is a ship
		if (isHit(givenInput[0], givenInput[1], fieldWithShips)) {
			// if the field was not yet shot
			if (field[givenInput[1]][givenInput[0]] != "x") {
				// increment hitCounter
				hitCounter++;
				// set corresponding point to "x"
				field[givenInput[1]][givenInput[0]] = "x";
				// print field
				displayField(field);
				process.stdout.write("Your last shot was a hit!\n");
			} else {
				process.stdout.write("You already hit this spot!\n");
			}
			// check if win
			if (hitCounter == hitsToWin) {
				//print field
				displayField(field);
				// print a You win message
				process.stdout.write(
					"You hit the last ship!\n" +
						"You finnised the game in " +
						(shotsCounter + 1).toString() +
						" shots\n" +
						"***YOU WIN***\n"
				);
				// exit the game
				process.exit();
			}
		} else if (
			// check if the hit was inside the field
			givenInput[0] != 0 &&
			givenInput[1] != 0 &&
			givenInput[0] <= fieldWidth &&
			givenInput[1] <= fieldHeight
		) {
			// set corresponding point to "•"
			field[givenInput[1]][givenInput[0]] = "•";
			// print field
			displayField(field);
			process.stdout.write("Your last shot was a miss.\n");
		} else {
			//print a message to the user if they have missed the field
			process.stdout.write("You managed to miss the field xD\n");
		}
		// increment shotsCounter
		shotsCounter++;
		process.stdout.write(
			"Shots left: " + (shotsLimit - shotsCounter).toString() + "\n"
		);
		// chec if game is lost
		if (shotsCounter == shotsLimit) {
			// white you loose message and exit the game
			process.stdout.write("You ran out of ammo.\n***GAME OVER***\n");
			process.exit();
		}
		// prompt player to shoot again
		process.stdout.write("Enter two numbers separated with a space: ");
	} else {
		// if the input was incorrect, ask for correct input
		process.stdout.write("Enter TWO NUMBERS separated with a space: ");
	}
});
