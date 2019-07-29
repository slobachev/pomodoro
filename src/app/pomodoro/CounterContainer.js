import { connect } from 'react-redux';
import CounterComponent from './CounterComponent';
import { toggleCounterType } from "./duck/operations";

const mapStateToProps = (state) => {
    return {
        currentTime: state.pomodoro.currentTime,
        isSession: state.pomodoro.isSession
     };
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCounterType: () => {
          dispatch(toggleCounterType());
        }
      };
};

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterComponent);

export default CounterContainer;