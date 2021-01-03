// declare variable for Serial object
var serial;

webiopi().ready(init);

function init(){
    serial = new Serial("uno");
}
function work() {
    serial.write("n");
    console.log("work");
}

function forward(){
    serial.write("r");
    console.log("right");
}

function reverse(){
    serial.write("l");
    console.log("left");
}

function use_kasoku() {
    serial.write("k");
    console.log();
}
