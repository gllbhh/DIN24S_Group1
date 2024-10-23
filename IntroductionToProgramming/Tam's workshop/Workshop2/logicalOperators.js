process.stdout.write("Please, enter three numbers separated with single space characters : ");
process.stdin.on("data", function(inputFromUser){
    let numbers = inputFromUser.toString().trim().split(" ");
    if ((numbers[0] == 2) || (numbers[1] == 2) || (numbers[2] == 2)) {
        process.stdout.write("You entered the magic number 2!");
    } else if ((numbers[0] != numbers[1]) && (numbers[0] != numbers[2])) {
        process.stdout.write("You entered three different numbers");
    } else if ((numbers[0] == numbers[1]) && (numbers[0] != numbers[2])) {
        process.stdout.write("Third one doesn't fit");
    } else if ((numbers[0] == numbers[1]) && (numbers[1] == numbers[2])) {
        process.stdout.write("You entered three matching numbers");
    }
    process.exit();
})