var min = document.querySelector('.min');
var sec = document.querySelector('.sec');
var dataMin = document.querySelector('.dataMin');
var dataSec = document.querySelector('.dataSec');
var btn = document.querySelector('.btn');
var time = 0;
var seconds = 0;
var minutes = 0;
dataMin.addEventListener('change', function(e){
   if(dataMin.value > 60) dataMin.value = 60; 
});

dataSec.addEventListener('change', function(e){
    if(dataSec.value > 60) dataSec.value = 60; 
 });


btn.addEventListener('click', function(e){
    timerStart(); 
    btn.disabled = true;
});

function timerStart(){
time = setInterval(function() {
    if(seconds >= 60) {
        seconds = 0;
        minutes++;
        min.innerHTML = minutes;
    }
    seconds++;
    sec.innerHTML = seconds;
    isShouldStop();
 }, 1000);
}

function isShouldStop(){
    if(dataMin.value === min.innerHTML && dataSec.value === sec.innerHTML){ 
       alert('Time to Work!');
       clearInterval(time);
    }
}