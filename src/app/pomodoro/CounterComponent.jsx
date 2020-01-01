import React from 'react';



const CounterComponent = ({currentTime, isSession, toggleCounterType}) => {

  if (currentTime.minutes === 0 && currentTime.seconds === 0) {
    let player = document.getElementById("beep");
    player.play();
    toggleCounterType();
  }

  return (
    <div className="counter" id="session-length">
    <p id="timer-label">{ isSession ? "Session" : "Break" }</p>
    <p id="time-left">{("0" + currentTime.minutes).slice(-2)}:{("0" + currentTime.seconds).slice(-2)}</p>
    <audio id="beep" src="https://goo.gl/65cBl1"></audio>
  </div>
  );
}
  

export default CounterComponent;