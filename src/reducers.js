import { combineReducers } from 'redux';
import pomodoroReducer from './app/pomodoro/duck/reducers';

const rootReducer = combineReducers({
    pomodoro: pomodoroReducer
});

export default rootReducer;