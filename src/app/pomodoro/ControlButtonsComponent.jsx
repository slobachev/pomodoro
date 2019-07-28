import React from "react";

const ControlButtonsComponent = ({isCounterOn, counter, toggleCounter, reset}) => (
  <div className="control-buttons">
    <button className="control-button" id="start_stop" onClick={() => toggleCounter(isCounterOn, counter)}>
      <i className="fa fa-play fa-2x" />
      <i className="fa fa-pause fa-2x" />
    </button>
    <button className="control-button" id="reset" onClick={() => reset(isCounterOn, counter)}>
      <i className="fa fa-refresh fa-2x" />
    </button>
  </div>
);

export default ControlButtonsComponent;
