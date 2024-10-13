function circumference(radius) {
    return 2 * Math.PI * radius;
}

process.stdin.on("data", function(inputFromUser) {
    let radius = Number(inputFromUser);
    process.stdout.write("Circumference of a circle with radius " + radius.toString() + " is " + circumference(radius).toString());
    process.exit();
})
