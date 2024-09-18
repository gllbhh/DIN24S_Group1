// a function that ptints Hello
function printHello() {
	process.stdout.write("Hello\n");
}

// a function that takes two numbers as parameters and prints out the sum of these two numbers
function sumOfTwo(x1, x2) {
	let sum = x1 + x2;
	process.stdout.write(sum + "\n");
}

// a function that takes two numbers as parameters and returns the sum of these two numbers
function sumOfTwoReturn(x1, x2) {
	let sum = x1 + x2;
	return sum;
}

// call function Hello
printHello();

//call function sumOfTwo
sumOfTwo(321, 123);

//call function sumOfTwoReturn
process.stdout.write(sumOfTwoReturn(3333, 5555) + "\n");
