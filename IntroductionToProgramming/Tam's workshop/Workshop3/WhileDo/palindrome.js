process.stdout.write("Please enter a string to check if it's a palindrome \n");
process.stdin.on("data", function(inputFromUser){
    let newString = inputFromUser.toString().trim().replace(/\s/g, '');
    let i = 0;
    let stringLength = newString.length;
    while (i <= ((stringLength+1)/2)) {
        if (newString.charAt(i).toLowerCase() != newString.charAt(stringLength-i-1).toLowerCase()){
            process.stdout.write(inputFromUser.toString().trim() + " is not a palindrome");
            process.exit();
        };
        i++;
    };
    process.stdout.write(inputFromUser.toString().trim() + " is a palindrome");
    process.exit();
})