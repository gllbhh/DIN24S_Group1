let numbers = new Array();

let smallNumber = 1000;
let largestNumber = 0;

for (i = 0; i < 100; i++) {
    numbers.push(Math.floor(Math.random() * 1001));
    if (numbers[i] > largestNumber) {
        largestNumber = numbers[i];
    }
    if (numbers[i] < smallNumber) {
        smallNumber = numbers[i];
    }
}

process.stdout.write("Largest number is " + largestNumber.toString() + "\n");
process.stdout.write("Smallest number is " + smallNumber.toString());