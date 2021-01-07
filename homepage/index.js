// declare variable for Serial object
var serial;
var accel_id;
var audioElm = new Audio('betty45.mp3');

webiopi().ready(init);

function init(){
    serial = new Serial("uno");
    accel_id = setInterval(accel, 1000);
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

function callback(data){
    console.log(data)
}

function sleep(){
    serial.write("s")
}

function use_kasoku(){
    serial.write("k")
    clearInterval(accel_id);
    accel_id = setInterval(accel,1000);
    console.log("use kasoku")
}

function unuse_kasoku(){
    serial.write("a")
    clearInterval(accel_id);
    console.log("unuse kasoku")
}

var accel = function (){
    serial.read(function(data){
        console.log(data)
        if(data=="o"){
            console.log("play")
            audioElm.play();
        }
    })
}
