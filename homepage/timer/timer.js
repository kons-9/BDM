var point;
var sec;
var seconds;
var min;
var hour;
var start;
var now;
var time;
var id;

var limit_time;
var rest;
var pretime;

document.getElementById('start').addEventListener('click', function () {
    if (document.getElementById('start').innerHTML === 'start') {
        start = new Date();
        pretime = document.getElementById('timer-display').textContent.split(':');
        limit_time = (pretime[0]*60+pretime[1]*1+pretime[2]/100.0)*1000
        if(limit_time!=0){
            id = setInterval(goTimer, 10);
            document.getElementById('start').innerHTML = 'stop';
        }else{
            alert("time is Zero.")
        }
    } else {
        clearInterval(id);
        document.getElementById('start').innerHTML = 'start';
        // document.getElementById('timer-display').innerHTML = '03:00:00';
    }
});

var goTimer = function () {
    now = new Date();
    time = now.getTime() - start.getTime();
    rest = limit_time - time;

    point = Math.floor(rest / 10);
    sec = Math.floor(rest / 1000);
    min = Math.floor(sec / 60);
    hour = Math.floor(min / 60);
    seconds = Math.floor(rest / 1000);


    if (point >=0) {
        point = (point-sec * 100);
        
        sec = (sec - min * 60);
        min = (min - hour * 60);

        point = addZero(point);
        sec = addZero(sec);
        min = addZero(min);

        document.getElementById('timer-display').innerHTML = min + ':' + sec + ':' + point;
    } else {
        clearInterval(id);
        document.getElementById('start').innerHTML = 'start';
        document.getElementById('timer-display').innerHTML = pretime[0]+':'+pretime[1]+':'+pretime[2];
        work();
    }

}

var addZero = function (value) {
    if (value < 10) {
        value = '0' + value;
    }
    return value;
}

const inputminute = document.getElementById('sdMinute');
const inputsecond = document.getElementById('sdSecond');


inputminute.addEventListener('input', function(e){
    const minu = e.target.value;
    const seco = inputsecond.value;
    document.getElementById('timer-display').innerHTML= addZero(minu)+':'+addZero(seco)+':'+'00';
});

inputsecond.addEventListener('input', function(e){
    const seco = e.target.value;
    const minu = inputminute.value;
    document.getElementById('timer-display').innerHTML= addZero(minu)+':'+addZero(seco)+':'+'00';
});
