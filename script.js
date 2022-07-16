    // defining the necessary values

let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let timerRef = document.querySelector('.timer');
let int = null;

 // event listener for Start function

document.getElementById('startTimer').addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
});

     // event listener for stop function

document.getElementById('stopTimer').addEventListener('click', ()=>{
    clearInterval(int);
});

     // event listener for resume function

document.getElementById('resetTimer').addEventListener('click', ()=>{
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timerRef.innerHTML = '00 : 00 : 00 : 000 ';
});

 // Show time function to calculate and display the time in the display

function displayTimer(){
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
          if(minutes == 60){
              minutes = 0;
              hours++;
           }
        }
    }
 
 let h = hours < 10 ? "0" + hours : hours;
 let m = minutes < 10 ? "0" + minutes : minutes;
 let s = seconds < 10 ? "0" + seconds : seconds;
 let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

 timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}
