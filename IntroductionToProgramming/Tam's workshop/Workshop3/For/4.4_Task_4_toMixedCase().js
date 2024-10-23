process.stdout.write("Please enter a string: ");
process.stdin.on("data", function(inputFromUser){
    let inputString = inputFromUser.toString().trim();
    for (i = 0; i < inputString.length; i++) {
        if (i % 2 == 0) {
            process.stdout.write(inputString.charAt(i).toUpperCase());
        } else {
            process.stdout.write(inputString.charAt(i).toLowerCase());
        }
    }
    process.exit();
})