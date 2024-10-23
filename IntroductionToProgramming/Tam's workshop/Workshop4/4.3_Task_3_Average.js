process.stdout.write("This program calculates the mean value of\nthe numbers you enter from the keyboard.\nThe program stops when you enter a letter.\n");
process.stdout.write("Enter a number: ");
var mean = 0;
var index = 0;
process.stdin.on("data", function(inputFromUser){
    let number = Number(inputFromUser);
    
    if ( !isNaN(number) ){
        mean += number;
        index++;
        process.stdout.write("Enter a number: ");
    } else {
        process.stdout.write((mean/index).toString());
        process.exit();
    }
})