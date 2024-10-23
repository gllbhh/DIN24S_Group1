process.stdout.write("Do you have a driver's license?\nPlease, answer Y or N : ");
process.stdin.on("data", function(inputFromUser) {
    let answer = inputFromUser.toString().trim();
    switch (answer) {
        case 'y' :
            process.stdout.write("You can drive a car");
            break;
        case 'n' :
            process.stdout.write("You can't drive a car");
            break;
        default:
            process.stdout.write(answer + " is not a valid input");
    }
    process.exit();
})