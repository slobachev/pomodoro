import { connect } from "react-redux";
import BreakLengthComponent from "./BreakLengthComponent";
import { incrementBreakLength, decrementBreakLength } from "./duck/operations";

const mapStateToProps = state => {
  return {
    breakLength: state.pomodoro.breakLength
  };
};

const mapDispatchToProps = dispatch => {
  return {
    incrementBreakLength: () => {
      dispatch(incrementBreakLength());
    },
    decrementBreakLength: () => {
      dispatch(decrementBreakLength());
    }
  };
};

const BreakLengthContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BreakLengthComponent);

export default BreakLengthContainer;
