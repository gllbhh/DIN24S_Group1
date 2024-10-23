/*
To Do app
By Gleb Bulygin 
for Introduction to programming course

Functions:
    Print menu
    Add task
    Print tasks
    Remove task
    Print today's tasks
    Tasks can have a name, priority, due date etc.
*/

// import readline module from JavaScript standard library
const readline = require("readline");

// create an interface for input/output
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

// ask a question asynchronously
const askQuestion = (question) => {
	return new Promise((resolve) => {
		rl.question(question, resolve);
	});
};

// my tasks =)
let tasks = [
	"Wake up",
	"Take a brush and put a little makeup",
	"Hide the scars",
	"Take the keys form the table",
	"Create another fable",
];

// function to print tasks
function printTasks() {
	rl.output.write("\n");
	// some black magic of for each method
	tasks.forEach((task, index) => {
		rl.output.write(`${index + 1}. ${task}\n`);
	});
	mainMenu();
}

// function print menu
function printMenu() {
	rl.output.write("\nWhtat would you like to do next?\n");
	rl.output.write("1. List tasks\n");
	rl.output.write("2. Add task\n");
	rl.output.write("3. Remove task\n");
	rl.output.write("4. Exit\n");
}

// Add Task function adds it to tasks
async function addTask() {
	const task = await askQuestion("Enter the task: ");
	tasks.push(task);
	mainMenu();
}

// Remove Task function
async function removeTask() {
	const choice = await askQuestion("Which task do you want to remove? ");
	if (choice > tasks.length) {
		rl.output.write("Invalid choice, please try again.\n");
	}
	tasks.splice(Number(choice.trim()) - 1, 1);
	mainMenu();
}

//main menu async function
// print menu and ask user to ener a number to continue
async function mainMenu() {
	printMenu();
	const choice = await askQuestion("Enter your choice: ");
	switch (choice.trim()) {
		case "1":
			printTasks();
			break;
		case "2":
			addTask();
			break;
		case "3":
			removeTask();
			break;
		case "4":
			rl.close();
			break;
		default:
			rl.output.write("Invalid choice, please try again.\n");
			await mainMenu();
	}
}

// call main function
mainMenu();
