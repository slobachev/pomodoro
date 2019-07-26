import React from 'react';

const CounterComponent = ({time}) => 
  <div className="counter" id="session-length">
    <p id="timer-label">Session</p>
    <p id="time-left">{time}</p>
  </div>

export default CounterComponent;