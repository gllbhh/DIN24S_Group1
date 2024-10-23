
const util = require("util");
process.stdout.write("Please enter a number: ");
process.stdin.on("data", function(inputFromUser){
    let number = inputFromUser.toString().trim();
    process.stdout.write("Multiplication table for " + number +"\n");
    process.stdout.write("*".repeat(25) + "\n");
    let index = 1;
    while (index <= 10) {
        let output = util.format("%s * %s = %s",index.toString().padStart(7," "),number,(index * number).toString());
        process.stdout.write("*" + output.padEnd(23," ") + "*\n");
        index ++;
    }
    process.stdout.write("".padStart(25,"*"));
    process.exit();
})


