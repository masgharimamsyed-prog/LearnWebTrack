console.log("timer js running .........");

let startBtn = document.querySelector(".start-timer");
let stopBtn = document.querySelector(".stop-timer");
let resetBtn = document.querySelector(".reset-timer");
let dispalyDiv = document.querySelector(".time-display");
let editBtn = document.querySelector(".edit");

let totalHours;
let totalMins;
let totalSecs;
startBtn.addEventListener("click", (event) => {
    let totalTime = event.target.parentElement.firstElementChild.innerText;
    totalHours = totalTime.slice(0, 2);
    totalMins = totalTime.slice(3, 5);
    totalSecs = totalTime.slice(6, 8);

    console.log(totalHours,totalMins,totalSecs);

    let secs = Number((totalHours * 3600)) + Number((totalMins * 60)) + Number((totalSecs));
    runningTime(secs, event.target.parentElement.firstElementChild);

})
let id;
function runningTime(secs, div) {
    id = setInterval(() => {
        localStorage.setItem("overall-sec", `${Number(localStorage.getItem("overall-sec")) + 1}`)
        secs--;
        let hr = Math.floor(secs / 3600);
        let min = Math.floor(secs / 60);
        let sec = secs % 60;
        if (hr < 10) {
            hr = "0" + hr;
        }
        if (min < 10) {
            min = "0" + min;
        }
        if (sec < 10) {
            sec = "0" + sec;
        }
        div.innerText = `${hr}:${min}:${sec}`;
        if (hr == 0 && min == 0 && sec == 0) {
            div.style.color = "red";
            clearInterval(id);
        }
    }, 1000);
}


stopBtn.addEventListener("click", () => {
    clearInterval(id);
})


resetBtn.addEventListener("click", () => {
    clearInterval(id);
    dispalyDiv.innerText = `${totalHours}:${totalMins}:${totalSecs}`;
    dispalyDiv.style.color="white";
})


editBtn.addEventListener("click", () => {
    let imagHr = prompt("Enter Hours....");
    let imagMin = prompt("Enter Minutes...");
    let imagSec = prompt("Enter Seconds....");

    while (imagHr < 0) {
        alert("wrong input hour,hour>0 input again");
        imagHr = prompt("Enter Hours....");

    }
    while (imagMin < 0 ||imagMin>=60) {
        alert("wrong input Min,Min>0 and Min<60 input again");
        imagHr = prompt("Enter Mins....");

    }
    while (imagSec< 0 ||imagSec>=60) {
        alert("wrong input sec,sec>0 and sec<60 input again");
        imagHr = prompt("Enter sec....");

    }
    if (imagHr < 10) {
        imagHr = "0" + imagHr;
    }
    if (imagMin < 10) {
        imagMin = "0" + imagMin;
    }
    if (imagSec < 10) {
        imagSec = "0" + imagSec;
    }
    

    dispalyDiv.innerText = `${imagHr}:${imagMin}:${imagSec}`;
 
})







