const util = require("util");
let index = 10;
process.stdout.write("10 seconds to ignition... Starting countdown...\n");
while (index > 0) {
    process.stdout.write(util.format("...%d...\n",index));
    index--;
}
process.stdout.write("IGNITION!!");