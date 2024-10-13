process.stdout.write("This program reads numbers from the keyboard.\nAfter receiving a zero, it prints the numbers\nin reverse order. Please, start entering numbers.\nThe program will stop when you enter a zero.\n")
let numbers = new Array();
var index = 1;
process.stdout.write("0 Enter a number: ");
process.stdin.on("data", function(inputFromUser){
    if (Number(inputFromUser) == 0) {
        numbers.unshift(inputFromUser.toString().trim());
        process.stdout.write(numbers.join(" "));
        process.exit();
    }
    numbers.unshift(inputFromUser.toString().trim());
    process.stdout.write(index.toString() + " Enter a number: ");
    index++;
})
