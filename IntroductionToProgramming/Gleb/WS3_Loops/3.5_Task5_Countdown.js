/*Countdown by Gleb Bulygin
for Introduction to Programming Course
Functionality:
    * Print out numbers from 10 to 0 using a loop.
*/
console.log("10 seconds to ignition... Starting contdown...");
// counter
let i = 10;
while (i > 0) {
	console.log("...", i.toString(), "...");
	//decrement i
	i--;
}
console.log("IGNITION!");
