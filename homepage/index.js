// declare variable for Serial object
var serial;

webiopi().ready(init);

function init(){
    serial = new Serial("uno");
}
function work() {
    serial.write("n");
    serial.read(callback)
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

function callback(data){
    console.log(data)
}

function use_kasoku(){
    serial.write("k")
    console.log("use kasoku")
}

function unuse_kasoku(){
    serial.write("a")
    console.log("unuse kasoku")
}
