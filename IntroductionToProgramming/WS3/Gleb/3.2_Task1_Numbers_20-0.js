/*Numbers [20..0] by Gleb Bulygin
for Introduction to programming course
Functionality:
	* Programm prints out numbers from 20 to 0 using do while loop
*/

// print welcome message
process.stdout.write("Numbers from 20 to 0 are the following: \n");
//print out numbers from 20 to 0
let i = 20;
do {
	// print i folowing by a ' '
	process.stdout.write(i + " ");
	// decrement i
	i--;
} while (i >= 0);
// go to a new line
console.log();
