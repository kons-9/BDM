const alminute = document.getElementById('alMinute');
const alhour = document.getElementById('alHour');

alminute.addEventListener('input', function(e){
    const minu = e.target.value;
    const hou = alhour.value;
    document.getElementById('alarm-display').innerHTML= addZero(hou)+':'+addZero(minu);
});

alhour.addEventListener('input', function(e){
    const hou = e.target.value;
    const minu = alminute.value;
    document.getElementById('alarm-display').innerHTML= addZero(hou)+':'+addZero(minu);
});

var d = new Date();  //現在時刻
var h = d.getHours();
var m = d.getMinutes();
var set = document.getElementById('set');
var valid=false;
var id_alarm;

set.addEventListener('click',function(){
    if(valid){
        valid = false;
        set.innerHTML='Set the alarm'
        clearInterval(id_alarm);
    }else{
        valid = true;
        set.innerHTML='Turn off the alarm'
        id_alarm = setInterval("alarm()", 1000);
    }
})

function alarm(){
    var date = new Date();
    var hou = date.getHours();
    var minu = date.getMinutes();
    if((alminute.value == minu && alhour.value==hou)){
        valid=false;
        set.innerHTML='Set the alarm';
        work();
        clearInterval(id_alarm);
        alert("wake up!!");
    } 
}

