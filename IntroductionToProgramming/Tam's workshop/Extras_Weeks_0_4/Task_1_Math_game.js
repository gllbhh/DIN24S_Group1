const util = require("util");

function getOperator(number) {
    switch(number) {
        case 0:
            return "+";
        case 1:
            return "-";
        case 2:
            return "*";
        case 3:
            return "/";
    }
}

function getAnswer(number1,number2,operator) {
    switch(operator) {
        case 0:
            return (number1 + number2);
        case 1:
            return (number1 - number2);
        case 2:
            return (number1 * number2);
        case 3:
            return (number1 / number2);
    }
}

let step = 1;
let score = 0;
let diffculty = 0;
let answer;

process.stdout.write("Choose a diffculty(1-10): ")

process.stdin.on("data", function(inputFromUser){
    let input = inputFromUser.toString().trim();
    if (step !=1 ) {    
        sumExpected = Number(input);
        if (sumExpected == answer) {
            process.stdout.write("Correct answer!\n");
            score++;
            process.stdout.write("Score: " + score.toString() + "\n");
        } else {
            process.stdout.write("Incorrect answer!\n");
            process.stdout.write("Score: " + score.toString() + "\n");
        }
        if (score == 3) {
            process.exit();
        }
        let number1 = Math.floor(Math.random() * (Math.pow(10,diffculty)));
        let number2 = Math.floor(Math.random() * (Math.pow(10,diffculty)));
        let operator = Math.floor(Math.random() * 3);
        answer = Number(getAnswer(number1,number2,operator));
        process.stdout.write("MATH QUIZ".padStart(25,"*").padEnd(46,"*") + "\n");
        process.stdout.write(util.format("%d %s %d = ",number1, getOperator(operator),number2));
    } else {
        diffculty = Number(inputFromUser.toString().trim());
        process.stdout.write("MATH QUIZ".padStart(25,"*").padEnd(46,"*") + "\n");
        let number1 = Math.floor(Math.random() * (Math.pow(10,diffculty)));
        let number2 = Math.floor(Math.random() * (Math.pow(10,diffculty)));
        let operator = Math.floor(Math.random() * 3);
        answer = getAnswer(number1,number2,operator);
        process.stdout.write(util.format("%d %s %d = ",number1, getOperator(operator),number2));
        step ++;
    }
})

