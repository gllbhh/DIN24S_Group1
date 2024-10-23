let matrixBattleShip = new Array();

let steps = 1;

let x; let y;

let numberOfShips;

let shoots = 0;

process.stdout.write("Enter a size of battle ship matrix with 2 numbers separated with a space: ");

process.stdin.on("data", function(inputFromUser){
    if (steps == 1) {                                                           //Create a matrix
        //Separate into 2 numbers
        let size = inputFromUser.toString().trim().split(" ");
        x = Number(size[0]);
        y = Number(size[1]);
        //Check inputFromUser if that not a valid input
        if ((size.length != 2) || (isNaN(x)) || (isNaN(y))) {
            //Print out Invalid input
            process.stdout.write("Invalid input");
            //Stop the program
            process.exit();
        }
        //Create a battle ship matrix with all "0" variable
        for (let i = 0; i < y; i++) {
            let extras = new Array();
            for (let j = 0; j < x; j++) {
                extras.push("0");
            }
            matrixBattleShip.push(extras);
        }
        matrixDisplay = matrixBattleShip;
        steps++;
        console.table(matrixBattleShip);
        process.stdout.write("Enter a number of ships: ");
    } else if (steps == 2) {                                                    //Create a ship in battle ship matrix
        //Create a variable for number of ships
        numberOfShips = Number(inputFromUser);
        //Check input
        if (isNaN(numberOfShips)) {
            //Print out Invalid input
            process.stdout.write("Invalid input");
            //Stop the program
            process.exit();
        }
        //Create a variable to count how many ships already created
        let ships = 0;
        while (ships < numberOfShips) {
            //Create x and y coordinate of ship
            let xShip = Math.floor(Math.random() * x);
            let yShip = Math.floor(Math.random() * y);
            //Add ship into matrix
            if (matrixBattleShip[yShip][xShip] != "*") {
                matrixBattleShip[yShip][xShip] = "*";           
                ships++     
            }
        }
        steps++;
        console.table(matrixBattleShip);
        process.stdout.write("Enter x and y coordinates separated by space: ")
    } else if (steps == 3) {                                                         //Shoot
        let coordinateShoot = inputFromUser.toString().trim().split(" ");
        let xShoot = Number(coordinateShoot[0]);
        let yShoot = Number(coordinateShoot[1]);
        //Check input
        if ((coordinateShoot.length != 2) || (isNaN(xShoot)) || (isNaN(yShoot))) {
            //Print out Invalid input
            process.stdout.write("Invalid input");
            //Stop the program
            process.exit();
        }
        if (matrixBattleShip[yShoot][xShoot] == "*") {
            // matrixDisplay[yShoot][xShoot] = "X";
            // console.table(matrixDisplay);
            process.stdout.write("You hit the ship!\n");
            numberOfShips--;
            shoots++;
        } else {
            // matrixDisplay[yShoot][xShoot] = "O";
            // console.table(matrixDisplay);
            process.stdout.write("Miss!\n");
            shoots++;
        }
        if (numberOfShips == 0) {
            process.stdout.write("All ships sunk! You needed " + shoots.toString() + " shots.")
            process.exit();
        }
        process.stdout.write("Enter x and y coordinates separated by space: ")
    }
    

})

