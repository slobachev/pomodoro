import { 
    INCREMENT_BREAK_LENGTH, 
    INCREMENT_SESSION_LENGTH, 
    DECREMENT_BREAK_LENGTH, 
    DECREMENT_SESSION_LENGTH 
} from "./actions";

const initialState = {
  breakLength: 5,
  sessionLength: 25,
  isSession: true,
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
        breakLength: state.breakLength !== 60 ? state.breakLength + 1 : state.breakLength,
        currentTime: (!state.isSession && state.breakLength !== 60) ? { minutes: state.currentTime.minutes + 1,  seconds: 0} : state.currentTime
      };
    case DECREMENT_BREAK_LENGTH:
      return {
        ...state,
        breakLength: state.breakLength !== 1 ? state.breakLength - 1 : 1,
        currentTime: (!state.isSession && state.breakLength !== 1) ? { minutes: state.currentTime.minutes - 1,  seconds: 0} : state.currentTime
      };
    case INCREMENT_SESSION_LENGTH:
      return {
        ...state,
        sessionLength: state.sessionLength !== 60 ? state.sessionLength + 1 : state.sessionLength,
        currentTime: (state.isSession && state.sessionLength !== 60) ? { minutes: state.currentTime.minutes + 1,  seconds: 0} : state.currentTime
      };
    case DECREMENT_SESSION_LENGTH:
      return {
        ...state,
        sessionLength: state.sessionLength !== 1 ? state.sessionLength - 1 : 1,
        currentTime: (state.isSession && state.sessionLength !== 1) ? { minutes: state.currentTime.minutes - 1,  seconds: 0} : state.currentTime
      };
    default:
      return state;
  }
};

export default pomodoroReducer;
