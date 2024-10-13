let integerArray = [5,7,32,31,8];
let doubleArray = [12.4,-13.55,67.44];
let stringArray = ["Helsinki","Lissabon","New York","Shanghai"];
process.stdout.write("The value in the index number 3 is: " + stringArray[3] +"\n");
process.stdout.write("The fourth item in the int array is: " + integerArray[3].toString() + "\n");
process.stdout.write("In the double array there are " + doubleArray.length + " items\n");
process.stdout.write("Integer array contents");
for (i = 0 ; i < integerArray.length ; i++) {
    process.stdout.write(integerArray[i].toString() + "\n");
}
process.stdout.write("Double array contents last to first\n");
doubleArray = doubleArray.reverse();
for (i = 0 ; i < doubleArray.length ; i++) {
    process.stdout.write(doubleArray[i].toString() + "\n");
}
for (i = 0 ; i < stringArray.length ; i++) {
    stringArray[i] = "empty";
}
process.stdout.write("New string array: " + stringArray);