/*
Numbers and letters
by Gleb Bulygin
for Introduction to Programming Course
Functionality:
    A program with wto methods:
        1. printLetters() - prints letters a-z
        2. printNumbers() - prints numbers 0-9
    1. Call printLetters()
    2. Call printNumbers()
    3. Call printLetters()
  
*/

// function printNumbers
function printNumbers() {
	// initialize an empty array
	let numbers = [];
	// fill the array with numbers 1-9
	for (let i = 0; i < 10; i++) {
		numbers.push(i);
	}
	// print out the array using "" as a separator
	process.stdout.write(numbers.join("") + "\n");
}

// function printLetters my version
function printLettersFromCharCode() {
	//every symbol has a corresponding value in ASCII chart
	// a - 97 and z - 122
	let letters = [];
	for (let i = 97; i < 123; i++) {
		letters.push(String.fromCharCode(i));
	}
	//print out letters a-z using "" as a separator
	process.stdout.write(letters.join("") + "\n");
}

// function printLetters as task suggested
function printLettersNumberToString() {
	//Numbers 10-35 in base 36 are represented by the letters 'a' to 'z'.
	// (10).toString(36) gives 'a'
	//(35).toString(36) gives 'z'
	let letters = [];
	for (let i = 10; i < 36; i++) {
		letters.push(i.toString(36));
	}
	//print out letters a-z using "" as a separator
	process.stdout.write(letters.join("") + "\n");
}

//call my version of printLetters()
printLettersFromCharCode();
// call printNumbers()
printNumbers();
// call printLetters() as the task suggested
printLettersNumberToString();
