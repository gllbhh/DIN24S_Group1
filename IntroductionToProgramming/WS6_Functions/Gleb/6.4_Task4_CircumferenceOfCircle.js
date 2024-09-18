/*
Circumference of a Circle
by Gleb Bulygin
for Introduction to Programming Course
Functionality:
    1. create a method that takes a number as a parameter (radius of a circle) 
	and returns the circumference of a circle with given radius
    2. call this method 3 times with different radius values
*/

// function circumference of a circle
function circleCircumference(circleRadius) {
	return 2 * circleRadius * Math.PI;
}

// define the radius
let radius = 5;
// print out the circumference by calling circleCircumference() method
process.stdout.write(
	"Circumference of a circle with radius " +
		radius.toString() +
		" is " +
		circleCircumference(radius).toString() +
		"\n"
);
// redefine the radius
radius = 15;
// print out the circumference by calling circleCircumference() method
process.stdout.write(
	"Circumference of a circle with radius " +
		radius.toString() +
		" is " +
		circleCircumference(radius).toString() +
		"\n"
);
// redefine the radius
radius = 50;
// print out the circumference by calling circleCircumference() method
process.stdout.write(
	"Circumference of a circle with radius " +
		radius.toString() +
		" is " +
		circleCircumference(radius).toString() +
		"\n"
);
