let[milliseconds,seconds,minutes,hours] = [0,0,0,0];
let displayStopWatch =document.querySelector(".stopWatch");
let element = 0;

document.getElementById("start").addEventListener("click", () =>{
    if(element !==0){
        clearInterval(element);
    }
    element = setInterval(displayTimer, 10);
});

document.getElementById("stop").addEventListener("click", () =>{
  clearInterval(element); 
});

document.getElementById("reset").addEventListener("click", () =>{
    clearInterval(element); 
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    displayStopWatch.innerHTML= "00 : 00 : 00 : 000"
  });

  function displayTimer(){
    milliseconds += 10;
    if(milliseconds==1000){
        milliseconds=0;
        seconds++;
        if(seconds==60){
            seconds = 0;
            minutes++;
            if(minutes==60){
                minutes =0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds<100 ? "0" + milliseconds : milliseconds;

    displayStopWatch.innerHTML = `${h} : ${m} : ${s}: ${ms}`;

  }









