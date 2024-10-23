const util = require("util");
for (i = 1; i <= 10; i++) {
    process.stdout.write("Multiplication table for " + i.toString() + "\n");
    process.stdout.write("".padStart(25,"*") + "\n");
    for (j = 1; j <= 10; j++) {
        let output = util.format("%s * %d = %d",j.toString().padStart(7," "),i,(i * j));
        process.stdout.write("*" + output.padEnd(23," ") + "*\n")
    }
    process.stdout.write("".padStart(25,"*") + "\n");
};