process.stdout.write("Please enter a string JavaScript: ");
process.stdin.on("data", function(inputFromUser) {
    let inputString = inputFromUser.toString().trim();
    let index = 0;
    while (index < inputString.length) {
        process.stdout.write((index + 1).toString() + ". character is " + inputString.charAt(index) + "\n");
        index ++;
    }
    process.exit();
})