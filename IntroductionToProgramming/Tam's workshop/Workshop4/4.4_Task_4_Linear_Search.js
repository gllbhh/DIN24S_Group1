let numbers = [55,23,6456,324,21,234,72,21];
process.stdout.write("The number you'd like to search: ");
process.stdin.on("data", function(inputFromUser){
    let numberInput = Number(inputFromUser);
    for (i = 0; i < numbers.length; i++) {
        if (numberInput == numbers[i]) {
            process.stdout.write(numberInput.toString() + " was found in index " + i.toString());
            process.exit();
        }
    }
    process.stdout.write(numberInput.toString() + " was not found");
    process.exit();
})