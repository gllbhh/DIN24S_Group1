function replaceSmileys(text) {
    text = text.replaceAll(":)", "*smiling*");
    text = text.replaceAll(":(", "*sad*");
    text = text.replaceAll(";)", "*winkwink*");
    return text.replaceAll("<3", "*love*");
};

function replaceSmileysWithReplace(text, replacer) {
    text = text.replaceAll(":)", replacer);
    text = text.replaceAll(":(", replacer);
    text = text.replaceAll(";)", replacer);
    return text.replaceAll("<3", replacer);
}

process.stdout.write("Enter a string: ");

process.stdin.on("data", function(inputFromUser){
    let stringInput = inputFromUser.toString().trim();
    process.stdout.write(replaceSmileys(stringInput) + "\n");
    process.stdout.write(replaceSmileysWithReplace(stringInput,"*"));
    process.exit();
})