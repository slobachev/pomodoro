import React from 'react';

const BreakLengthComponent = ({breakLength, incrementBreakLength, decrementBreakLength}) => 
  <div className="length-content">
    <p id="break-label">Break Length</p>
    <button className="break-button" id="break-decrement" onClick={decrementBreakLength}><i className="fa fa-arrow-down"></i></button>
    <span id="break-length">{breakLength}</span>
    <button className="break-button" id="break-increment" onClick={incrementBreakLength}><i className="fa fa-arrow-up"></i></button>
  </div>

export default BreakLengthComponent;