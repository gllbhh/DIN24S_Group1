// Print out a line of instructions for the user
process.stdout.write("This program can find the largest of two numbers you enter from the keyboard.\nPlease, enter two numbers separated with single space characters: ");
// Ask user to enter 2 numbers separated with single space characters
process.stdin.on("data", function(inputFromUser) {
    // Split inputFromUser to 2 numbers
    let numbers = inputFromUser.toString().trim().split(" ");
    // Compare that 2 numbers 
    if (Number(numbers[0]) > Number(numbers [1])) {
        process.stdout.write(numbers[0]);
    } else {
        process.stdout.write(numbers[1]);
    }
    process.exit();
})