process.stdout.write("Please enter size of triangle: ");
process.stdin.on("data", function(inputFromUser){
    let sizeTriangle = Number(inputFromUser);
    for (i = 1; i <= sizeTriangle; i++) {
        for (j = 1; j <= i; j++) {
            process.stdout.write("*");
        }
        process.stdout.write("\n");
    }
    process.exit();
})