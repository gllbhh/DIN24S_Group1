process.stdout.write("This program can find the largest of all numbers you enter from the keyboard.\nPlease, enter your numbers separated with single space characters:");
process.stdin.on("data", function(inputFromUser) {
    let numbers = inputFromUser.toString().trim().split(" ");
    let largestNumber = numbers[0];
    for (let i = 0; i <= numbers.length; i++) {
        if (Number(numbers[i]) > largestNumber) {
            largestNumber = numbers[i];
        }
    }
    process.stdout.write(largestNumber.toString());
    process.exit();
})
