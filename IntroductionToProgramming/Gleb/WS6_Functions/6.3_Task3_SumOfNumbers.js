/*
Sum of Numbers
by Gleb Bulygin
for Introduction to Programming Course
Functionality:
    1. create a method sum(firstNumber, secondNumber) that returns the sum of the numbers passed to it
    2. call this method 3 times with different variable values
*/

// function sum(firestNumber, secondNumber) takes two numbers as arguments and returns the sum of these numbers
function sum(firstNumber, secondNumber) {
	return firstNumber + secondNumber;
}

// initialize variavles x1, x2 to store numbers
let x1 = 2,
	x2 = 5;
// initialize variable calculatedSum and assign it the called method
let calculatedSum = sum(x1, x2);
// print out the result
process.stdout.write("First sum is: " + calculatedSum.toString() + "\n");

//reassign the variables to new values
(x1 = 0.2), (x2 = 0.7775);
calculatedSum = sum(x1, x2);
process.stdout.write("Second sum is: " + calculatedSum.toString() + "\n");

(x1 = 2), (x2 = -5);
calculatedSum = sum(x1, x2);
process.stdout.write("Third sum is: " + calculatedSum.toString() + "\n");
