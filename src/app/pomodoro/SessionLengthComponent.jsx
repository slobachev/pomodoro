import React from 'react';

const SessionLengthComponent = ({sessionLength}) => 
  <div className="length-content">
    <p id="session-label">Session Length</p>
    <button className="session-button" id="session-decrement"><i class="fa fa-arrow-down"></i></button>
    <span id="session-length">{sessionLength}</span>
    <button className="session-button" id="session-increment"><i class="fa fa-arrow-up"></i></button>
  </div>

export default SessionLengthComponent;