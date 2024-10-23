var date = new Date();
const util = require("util");
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
process.stdout.write("Please select what you want to do: \n");
process.stdout.write("1 - Print out hello \n");
process.stdout.write("2 - Print out current date & time \n");
process.stdout.write("0 - Exit \n");
process.stdin.on("data", function(inputFromUser){
    let input = Number(inputFromUser.toString().trim());
    switch(input) {
        case 1:
            process.stdout.write("Hello!\n");
            process.stdout.write("\n".padStart(25,"-"));
            process.stdout.write("Please select what you want to do: \n");
            process.stdout.write("1 - Print out hello \n");
            process.stdout.write("2 - Print out current date & time \n");
            process.stdout.write("0 - Exit \n");
            break;
        case 2:
            // Format Current date & time: Date Month dd yyyy hh:mm:ss GMT(city)
            process.stdout.write(util.format("Current date & time: %s %s %s %d %s:%s:%s GMT+0300(Oulu)\n",weekday[date.getDay()],month[date.getMonth()],date.getDate().toString().padStart(2,"0"),date.getFullYear(),date.getHours().toString().padStart(2,"0"),date.getMinutes().toString().padStart(2,"0"),date.getSeconds().toString().padStart(2,"0"),));
            process.stdout.write("\n".padStart(25,"-"));
            process.stdout.write("Please select what you want to do: \n");
            process.stdout.write("1 - Print out hello \n");
            process.stdout.write("2 - Print out current date & time \n");
            process.stdout.write("0 - Exit \n");
            break;
        case 0:
            process.stdout.write("Good bye. Have a nice day.\n");
            process.exit();
        default:
            process.stdout.write("Your input is invalid\nPlease select again: \n");
            process.stdout.write("\n".padStart(25,"-"));
            process.stdout.write("1 - Print out hello \n");
            process.stdout.write("2 - Print out current date & time \n");
            process.stdout.write("0 - Exit \n");
    }
})