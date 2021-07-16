var currentTime = document.querySelector('.currentTime');
var setTime = document.querySelector('.setTime');
var btn = document.querySelector('.btn');
var time = 0;
var alarm = 0;

showCurrentTime();

function showCurrentTime(){
  time = setInterval(function(){  
    currentTime.innerHTML = getCurrentTime();
  },1000);
}

btn.addEventListener('click', function(e){
  var alarm = setInterval(function(){
     if(setTime.value == getCurrentTime()){
        currentTime.classList.remove('show');
        currentTime.classList.add('hide');
        alert('TIME TO WORK!');
        clearInterval(alarm);
        clearInterval(time);
     }
  },1000);
});

function getCurrentTime(){
    return new Date().toLocaleTimeString('en-US', 
    { 
        hour12: false,
        hour: 'numeric', 
        minute: 'numeric'
    });
}