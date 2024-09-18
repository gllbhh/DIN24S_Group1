/*
Lorem Ipsum
by Gleb Bulygin
for Introduction to Programming Course
Functionality:
    1. create a method that prints out "Lorem Ipsum dolor sit amet, consectetur
adipiscing elit." 10 times
    2. call this method

!!! question to ask: should it be a method or a function !!!

A function is a standalone block of code that performs a specific task. It can take input (parameters), perform operations, and return a result. 
Functions are not tied to any object and can be called independently.

A method is a function that is associated with an object. It is called on the object, 
and typically operates on the data (properties) of that object.
*/

// loremIpsum() method
function loremIpsum() {
	for (let i = 0; i < 10; i++) {
		process.stdout.write(
			"Lorem Ipsum dolor sit amet, consectetur adipiscing elit.\n"
		);
	}
}
// call loremIpsum() method (function?)
loremIpsum();

/*
What is Lorem Ipsum?

Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
when an unknown printer took a galley of type and scrambled it to make 
a type specimen book. It has survived not only five centuries, 
but also the leap into electronic typesetting, 
remaining essentially unchanged. It was popularised in the 1960s 
with the release of Letraset sheets containing Lorem Ipsum passages,
and more recently with desktop publishing software 
like Aldus PageMaker including versions of Lorem Ipsum.

text from
https://www.lipsum.com/
*/
