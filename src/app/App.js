import React from 'react';
import ControlButtonsContainer from './pomodoro/ControlButtonsContainer';
import CounterContainer from './pomodoro/CounterContainer';
import BreakLengthContainer from './pomodoro/BreakLengthContainer';
import SessionLengthContainer from './pomodoro/SessionLengthContainer';
import "./App.scss"

const App = () => {
  return (
    <div className="app">
      <div className="length-settings">
        <BreakLengthContainer />
        <SessionLengthContainer />
      </div>
      <CounterContainer />
      <ControlButtonsContainer />
    </div>
  );
}

export default App;
