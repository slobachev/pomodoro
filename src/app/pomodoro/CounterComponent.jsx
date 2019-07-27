import React from 'react';

const CounterComponent = ({currentTime , isSession}) => 
  <div className="counter" id="session-length">
    <p id="timer-label">{ isSession ? "Session" : "Break" }</p>
    <p id="time-left">{("0" + currentTime.minutes).slice(-2)}:{("0" + currentTime.seconds).slice(-2)}</p>
  </div>

export default CounterComponent;