/*Numbers [0..20] by Gleb Bulygin
for Introduction to programming course
Functionality:
	* Programm prints out numbers from 0 to 20 using while loop
*/

// print welcome message
process.stdout.write("Numbers from 0 to 20 are the following: \n");
// create a counter
let i = 0;
//print out numbers from 0 to 20
while (i <= 20) {
	// print i following by a space
	process.stdout.write(i + " ");
	i++;
}
// go to a new line
console.log();
