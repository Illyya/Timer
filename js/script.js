let timer = document.querySelector('.timer');
let play = document.querySelectorAll('.timer__play');
let pause = document.querySelectorAll('.timer__pause');
let stop = document.querySelectorAll('.timer__stop');
let add = document.querySelector('.timer-add__plus');
let time = document.querySelectorAll('.timer__time');
let playStop = document.querySelectorAll('.timer__play-stop');
let number = document.getElementsByClassName('timer__number');
let timers = document.querySelector('.timers__body');
    
add.onclick = function() {
    let newTimer = timer.cloneNode(true);
    timers.prepend(newTimer);
};

for (let i = 0; i < play.length; i++) {    
    
    let start = 0;

    let goId;
    function go() {
        goId = setInterval(() => {
            start++;
            number[i].textContent = start;  
        }, 1000);
    };       
    
    function stp() {
        clearInterval(goId);    
    };
    play[i].onclick = function() {
        pause[i].style.display = 'block';
        play[i].style.display = 'none';
        time[i].classList.add('white');
        playStop[i].classList.add('white');
        go();
        
    };            
    pause[i].onclick = function() {
        pause[i].style.display = 'none';
        play[i].style.display = 'block';
        time[i].classList.remove('white');
        playStop[i].classList.remove('white');
        stp();
    };
    stop[i].onclick = function() {
        pause[i].style.display = 'none';
        play[i].style.display = 'block';
        time[i].classList.remove('white');
        playStop[i].classList.remove('white');
        stp();
        start = 0;
        number[i].textContent = start;
    }    
} 



  