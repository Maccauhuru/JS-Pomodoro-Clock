var chosenTime = document.getElementById("chosenTime");
var chosenSeconds = document.getElementById("chosenSeconds");
var setPomodoroTime = document.getElementById("setPomodoroTime");
var setBreakTime = document.getElementById("setBreakTime");
var minusSession = document.getElementById("minus-session");
var plusSession = document.getElementById("plus-session");
var minusBreak = document.getElementById("minus-break");
var plusBreak = document.getElementById("plus-break");
var startButton = document.getElementById("startButton");
var stopButton = document.getElementById("stopButton");


//plays sound when pomodoro is over
var playAlarm = function() {
  var audioElement = document.createElement("audio");
  audioElement.setAttribute(
    "src",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/368633/tinsha.mp3"
  );
  audioElement.play();
};

//============================
//TIME BUTTONS
//=============================

function buttonMinus() {
  minusSession.addEventListener("click", subtractSessionTime());
}

function buttonPlus() {
  plusSession.addEventListener("click", addSessionTime());
}

function setPomodoro() {
  //get time from setPomodoroTime and update chosenTime
  chosenTime.innerHTML = setPomodoroTime.innerHTML;
}

function clearSessionTime() {
  //clears the time and sets it back to default
  chosenTime.innerHTML = 25;
  chosenTime.style.color = "white";
  setPomodoroTime.innerHTML = 25;
}

function startCounter() {
  //activates the Pomodoro countdown timer
sessionValue = Number(chosenTime.innerHTML);
var interval = setInterval(function() {
  chosenTime.innerHTML = --sessionValue;
  if (sessionValue == 0) clearInterval(interval);
}, 1000);


}

function stopCounter() {
  //de-activates the Pomodoro countdown timer
  chosenTime.innerHTML="STOP";
  chosenSeconds.innerHTML="";
  clearInterval(interval);
}


//============================
//TIME FUNCTIONS
//=============================

function subtractSessionTime() {
  //subtract time from setPomodoroTime
  var decreaseTime = parseInt(setPomodoroTime.innerHTML);
  if(decreaseTime <= 0){
    return false;
  }
  decreaseTime--;
  console.log(decreaseTime);
  setPomodoroTime.innerHTML = decreaseTime;
  setPomodoro();
}

function addSessionTime() {
  //add time to setPomodoroTime
  var increaseTime = parseInt(setPomodoroTime.innerHTML);
  increaseTime++;
  console.log(increaseTime);
  setPomodoroTime.innerHTML = increaseTime;
  setPomodoro();
}

function subtractBreakTime() {
  var breakTime = parseInt(setBreakTime.innerHTML);
  if(breakTime <=0){
    return false;
  }
  breakTime--;
  console.log(breakTime);
  setBreakTime.innerHTML = breakTime;
}

function addBreakTime() {
  var breakTime = parseInt(setBreakTime.innerHTML);
  breakTime++;
  console.log(breakTime);
  setBreakTime.innerHTML = breakTime;
}

//============================
//COUNTDOWN TIMER FUNCTIONS
//=============================
function countDownTimer() {
 var setTimer = parseInt(chosenTime.innerHTML);
 console.log(chosenTime.value());
}
//setInterval(countDownTimer, 1000);



