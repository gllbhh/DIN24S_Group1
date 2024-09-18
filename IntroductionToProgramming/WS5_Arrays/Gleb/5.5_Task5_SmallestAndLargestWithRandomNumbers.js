/*
Smallest and Largest with Ramdom Numbers
by Gleb Bulygin
for Introduction to Programming Course
Functionality:
    1. Create a 100 item array with random numbers [0..1000]
        * use Math.random();
    2. Find the largest value in the array using a loop and print it out
    3. Find the smallest number in the array using a loop and print it out
*/

// function from Math.random() documentation
// Math.random() returns floating point numbers between 0 and 1
// getRandomInt returns an integer value between 0 and max
function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

// initialize an empty array
let numbers = [];
// fill the array with 100 integer numbers
// Somehow with max = 1000 the maximum number I was getting was 999.
// To get 1000 I've increased the value to 1001
// Seems logical since getRandomInt is using Math.floor()
for (let i = 0; i < 100; i++) {
	numbers.push(getRandomInt(1001));
}

// print out the array with ", " as delimiter
process.stdout.write("Random numbers: " + numbers.join(", ") + "\n");

// since we know that our numbers are in [0..1000] range
// we can set initial values to nimNumber to 1001 and maxNumber to 0
// Then we can run two checks for each number in the array
// if the numbeInArray > maxNumber we set maxNumber to this numberInArray
// if the numbeInArray < minNumber we set minNumber to this numberInArray
let minNumber = numbers[0],
	maxNumber = numbers[0];

// find max number in a loop
numbers.forEach((number) => {
	if (number > maxNumber) {
		maxNumber = number;
	}
	if (number < minNumber) {
		minNumber = number;
	}
});

// print out the largest number
process.stdout.write("Largest number is " + maxNumber.toString() + "\n");
// print out the smalles number
process.stdout.write("Smallest number is " + minNumber.toString() + "\n");
