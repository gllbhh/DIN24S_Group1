/*
Creating and Looping Through an Array
by Gleb Bulygin
for Introduction to Programming Course
Functionality:
    1. Create following arrays
        1.1 an integer array with five items: 5, 7, 32, 31 and 8.
        1.2 a double array with three items: 12.4, -13.55 and 67.44,
        1.3 a string array with four items: “Helsinki”, “Lissabon”, “New York” and “Shanghai”
    2. Print out following:
        2.1 “The value in the index number 3 is: “ and the value from the string array.
        2.2 “The fourth item in the int array is: “ and the value from the int array.
        2.3 “In the double array there are xx items” where xx is the size of the array.
        2.4 The whole content of the integer array with a loop.
        2.5 The whole content of the double array from the last item to the first.
        2.6 In a loop go through the string array and set all the values to be “empty” and print it out as a comma separated string.
*/

const util = require("util"); // Import the 'util' module for formatted output

// 1.1 Creating an integer array with five items
let intArray = [5, 7, 32, 31, 8];

// 1.2 Creating a double array with three items
let doubleArray = [12.4, -13.55, 67.44];

// 1.3 Creating a string array with four items
let stringArray = ["Helsinki", "Lissabon", "New York", "Shanghai"];

// 2.1 Print the value at index number 3 from the string array (fourth item)
process.stdout.write(
	"The value in the index number 3 is: " + stringArray[3] + "\n\n"
); // Outputs: "The value in the index number 3 is: Shanghai"

// 2.2 Print the fourth item in the integer array (index 3)
process.stdout.write(
	"The fourth item in the int array is: " + intArray[3] + "\n\n"
); // Outputs: "The fourth item in the int array is: 31"

// 2.3 Print the size of the double array using util.format() to format the output
process.stdout.write(
	util.format("In the double array there are %d items", doubleArray.length) +
		"\n\n"
); // Outputs: "In the double array there are 3 items"

// 2.4 Loop through the integer array and print out each item
process.stdout.write("Integer array contents: ");
for (let i = 0; i < intArray.length; i++) {
	process.stdout.write(intArray[i].toString() + " "); // Convert each integer to a string and print it
}
process.stdout.write("\n\n"); // Move to the next line after printing all integers

// 2.5 Loop through the double array in reverse order and print each item
process.stdout.write("Double array contents last to first : ");
for (let i = doubleArray.length - 1; i >= 0; i--) {
	process.stdout.write(doubleArray[i].toString() + " "); // Convert each double to a string and print it
}
process.stdout.write("\n\n"); // Move to the next line after printing all doubles in reverse order

// 2.6 Loop through the string array, set all values to "empty", and print the array as a comma-separated string
process.stdout.write("Updated string array:\n");
stringArray.forEach((stringArrayItem, index) => {
	stringArray[index] = "empty"; // Set each item in the string array to "empty"
});
process.stdout.write(stringArray.toString() + "\n"); // Convert the modified array to a string and print it
// Outputs: "empty,empty,empty,empty"
