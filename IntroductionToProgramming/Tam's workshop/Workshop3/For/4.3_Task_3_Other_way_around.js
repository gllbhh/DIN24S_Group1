process.stdout.write("Please enter a string: ");
process.stdin.on("data", function(inputFromUser){
    let inputString = inputFromUser.toString().trim();
    for (i = 0; i < inputString.length; i++) {
        process.stdout.write(inputString.charAt(inputString.length - i - 1));
    }
    process.exit();
})