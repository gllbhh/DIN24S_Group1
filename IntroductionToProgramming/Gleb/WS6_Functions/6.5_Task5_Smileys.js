/*
Smileys
by Gleb Bulygin
for Introduction to Programming Course
Functionality:
    1. Ask user for a string and store it in a variable
    2. replaceSmileys(text): Finds smileys in text 
    and replaces them with corresponding text as shown in a table below
    3. replace smileysWithReplacer(text, replacer): Finds smileys in text 
    and replaces them with replacer
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

    :)   =>   *smiling*
    :(   =>   *sad*
    ;)   =>   *winkwink*
    <3   =>   *love*
*/

// a string to test the method
let string =
	"This is a test string :). " +
	"Lets check how the regular expressions work ;). " +
	"Don't be :(! let's give them some <3.";

// function replaceSmileys(text)
// takes a string as an argument and returns a string where all smileys
// are replaced with corresponding text
function replaceSmileys(text) {
	// create a new variable where all the smileys are replaced with corresponding text
	let modifiedString = text
		.replace(/:\)/g, "*slmile*") // ':' - does not need any spesial treatment
		.replace(/:\(/g, "*sad*") // '(',')' - need to be prefixed by a '\'
		.replace(/;\)/g, "*winkwink*") // /g -flag ensures that all occurrences are replaced, not just the first one.
		.replace(/<3/g, "*love*");
	// return the modified string
	return modifiedString;
}

// function replaceSlileysWithReplacer
// takes a string as an argument and returns a string where all smileys
// are replaced with the replacer
// if called without second argument replacer = "*"
function replaceSmileysWithReplacer(text, replacer = "*") {
	let modifiedString = text
		.replace(/:\)/g, replacer.toString()) // ':' - does not need any spesial treatment
		.replace(/:\(/g, replacer.toString()) // '(',')' - need to be prefixed by a '\'
		.replace(/;\)/g, replacer.toString()) // /g -flag ensures that all occurrences are replaced, not just the first one.
		.replace(/<3/g, replacer.toString());
	// return the modified string
	return modifiedString;
}

// promtpt user to enter a string
process.stdout.write("Please enter a string: ");
process.stdin.on("data", function (inputFromUser) {
	// store input from user in a string and trim exces spaces
	let givenInput = inputFromUser.toString().trim();
	// print out replaced text with the text from the table
	process.stdout.write("Replaced text: " + replaceSmileys(givenInput) + "\n");
	// print out replaced text with "*"
	process.stdout.write(
		"Replaced text (*): " + replaceSmileysWithReplacer(givenInput) + "\n"
	);
	// exit the program
	process.exit();
});
