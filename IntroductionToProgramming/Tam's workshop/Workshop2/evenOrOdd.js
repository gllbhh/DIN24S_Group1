process.stdout.write("This program can find out whether a number is even or odd.\nPlease, give a number: ");
process.stdin.on("data", function(inputFromUser){
    let number = inputFromUser.toString().trim();
    if (number % 2 == 0) {
        process.stdout.write(number + " is even");
    } else {
        process.stdout.write(number + " is odd");
    }
    process.exit();
})