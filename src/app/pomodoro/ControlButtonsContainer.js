import { connect } from "react-redux";
import ControlButtonsComponent from "./ControlButtonsComponent";
import { toggleCounterAsync, resetAsync, decrementCurrentTime } from "./duck/operations";

const mapStateToProps = state => {
  return {
    isCounterOn: state.pomodoro.isCounterOn,
    counter: state.pomodoro.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleCounter: (isCounterOn, counter) => {
      dispatch(toggleCounterAsync(isCounterOn, counter));
    },
    reset: (isCounterOn, counter) => {
      dispatch(resetAsync(isCounterOn, counter));
    },
    decrementCurrentTime: () => {
      dispatch(decrementCurrentTime());
    }
  };
};

const ControlButtonsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlButtonsComponent);

export default ControlButtonsContainer;