class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() =>{
      this.currentTime++; 
      callback}
      , 1000)
  }

  getMinutes() {
    if(this.currentTime === 0){
      return 0;
    } else{
      let minutes = Math.floor(this.currentTime/60) ;
      return minutes;
    }
  }

  getSeconds() {
    if(this.currentTime === 0){
      return 0;
    } else {
      let seconds = Math.floor(this.currentTime % 60 ) 
      return seconds
    }
    
  }

  computeTwoDigitNumber(value) {
    let twoDigit = "";
    if (value <= 9){
      twoDigit = "0" + value.toString();
    } else {
      twoDigit = value.toString();
    } return twoDigit;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let splitMinutes = this.computeTwoDigitNumber(this.getMinutes);
    let splitSeconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${splitMinutes}:${splitSeconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
