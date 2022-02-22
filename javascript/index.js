

const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();

}

function printMinutes() {
  minDecElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0];
  minUniElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1];
}

function printSeconds() {
  secDecElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0];
  secUniElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(btnLeftElement.innerText =="START"){
    chronometer.start(printTime());
    btnLeftElement.className = "btn stop";
    btnLeftElement.innerText=" STOP";
    
    return;
  } else {
    btnLeftElement.className = "btn start";
    btnLeftElement.innerText = "START"
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => { 
  if(btnRightElement.innerText =="SPLIT"){
    chronometer.stop();
    btnRightElement.className = "btn reset";
    btnRightElement.innerText ="RESET";
    chronometer.stop;
    return;
  } else {
    btnRightElement.innerText ="SPLIT";
    btnRightElement.className = "btn split";
  }
});
