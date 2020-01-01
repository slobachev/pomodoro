import {
  INCREMENT_BREAK_LENGTH,
  INCREMENT_SESSION_LENGTH,
  DECREMENT_BREAK_LENGTH,
  DECREMENT_SESSION_LENGTH,
  TOGGLE_COUNTER,
  RESET,
  DECREMENT_CURRENT_TIME,
  TOGGLE_COUNTER_TYPE
} from "./actions";

const initialState = {
  breakLength: 5,
  sessionLength: 25,
  isSession: true,
  counter: {},
  isCounterOn: false,
  currentTime: {
    minutes: 25,
    seconds: 0
  }
};

const pomodoroReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_BREAK_LENGTH:
      return {
        ...state,
        breakLength:
          state.breakLength !== 60 ? state.breakLength + 1 : state.breakLength,
        currentTime:
          !state.isSession && state.breakLength !== 60
            ? { minutes: state.breakLength + 1, seconds: 0 }
            : state.currentTime
      };
    case DECREMENT_BREAK_LENGTH:
      return {
        ...state,
        breakLength: state.breakLength !== 1 ? state.breakLength - 1 : 1,
        currentTime:
          !state.isSession && state.breakLength !== 1
            ? { minutes: state.breakLength - 1, seconds: 0 }
            : state.currentTime
      };
    case INCREMENT_SESSION_LENGTH:
      return {
        ...state,
        sessionLength:
          state.sessionLength !== 60
            ? state.sessionLength + 1
            : state.sessionLength,
        currentTime:
          state.isSession && state.sessionLength !== 60
            ? { minutes: state.sessionLength + 1, seconds: 0 }
            : state.currentTime
      };
    case DECREMENT_SESSION_LENGTH:
      return {
        ...state,
        sessionLength: state.sessionLength !== 1 ? state.sessionLength - 1 : 1,
        currentTime:
          state.isSession && state.sessionLength !== 1
            ? { minutes: state.sessionLength - 1, seconds: 0 }
            : state.currentTime
      };
    case TOGGLE_COUNTER:
      return {
        ...state,
        isCounterOn: action.isCounterOn,
        counter: action.counter
      };
    case DECREMENT_CURRENT_TIME:
      const secondsLeft =
        state.currentTime.minutes * 60 + state.currentTime.seconds;
      const minutesLeft = Math.floor((secondsLeft - 1) / 60);
      const secondsLeftAfterDecrement = secondsLeft - 1 - minutesLeft * 60;

      return {
        ...state,
        currentTime: {
          minutes: minutesLeft,
          seconds: secondsLeftAfterDecrement
        }
      };
    case TOGGLE_COUNTER_TYPE:
      const isSession = !state.isSession
      return {
        ...state,
        isSession: isSession,
        currentTime: {
          minutes: isSession === true ? state.sessionLength : state.breakLength,
          seconds: 0
        }
      }
    case RESET:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

export default pomodoroReducer;
