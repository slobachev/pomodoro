import React from 'react';

const SessionLengthComponent = ({sessionLength, incrementSessionLength, decrementSessionLength}) => 
  <div className="length-content">
    <p id="session-label">Session Length</p>
    <button className="session-button" id="session-decrement" onClick={decrementSessionLength}><i className="fa fa-arrow-down"></i></button>
    <span id="session-length">{sessionLength}</span>
    <button className="session-button" id="session-increment" onClick={incrementSessionLength}><i className="fa fa-arrow-up"></i></button>
  </div>

export default SessionLengthComponent;