function printLetters() {
    for (let i = 65; i <= 90; i++) {
        process.stdout.write(String.fromCharCode(i));
    }
    process.stdout.write("\n")
}

function printNumbers() {
    for (let i = 0; i < 10; i++) {
        process.stdout.write(i.toString());
    }
    process.stdout.write("\n");
}

printLetters();
printNumbers();
printLetters();