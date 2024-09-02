/*Switch Menu by Gleb Bulygin
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
process.stdout.write(
	"Please select what you want to do:\n" +
		"1 - Print out 'Hello'\n" +
		"2 - Print out current date and time\n" +
		"0 - Exit\n"
);
//Read input from the user
process.stdin.on("data", function (inputFromUser) {
	// create an array from inputFromUser with .split() using " " as a separator
	let givenInput = inputFromUser.toString().trim();
	switch (givenInput) {
		case "1":
			//Print Hello
			process.stdout.write("Hello\n");
			//Exit program
			process.exit();
		case "2":
			//create an object of type Date
			let currentDate = new Date();
			// Array with format options
			let options = {
				weekday: "short", // "Thu"
				year: "numeric", // "2024"
				month: "short", // "Aug"
				day: "2-digit", // "01"
				hour: "2-digit", // "14"
				hour12: false, //24h
				minute: "2-digit", // "07"
				second: "2-digit", // "25"
				timeZoneName: "long", // Eastern European Summer Time
			};

			// Format the date using the specified options
			let formattedDate = currentDate.toLocaleString("en-US", options);
			// Print the current date
			process.stdout.write("Current date & time: " + formattedDate + "\n");
			//Exit Program
			process.exit();
		case "0":
			// Exit program
			process.exit();

		default:
			process.stdout.write("Please choose 0, 1 or 2\n");
	}
});
