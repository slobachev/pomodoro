import React from 'react';

const BreakLengthComponent = ({breakLength}) => 
  <div className="length-content">
    <p id="break-label">Break Length</p>
    <button className="break-button" id="break-decrement"><i class="fa fa-arrow-down"></i></button>
    <span id="break-length">{breakLength}</span>
    <button className="break-button" id="break-increment"><i class="fa fa-arrow-up"></i></button>
  </div>

export default BreakLengthComponent;