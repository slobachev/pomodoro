import { connect } from "react-redux";
import SessionLengthComponent from "./SessionLengthComponent";
import {
  incrementSessionLength,
  decrementSessionLength
} from "./duck/operations";

const mapStateToProps = state => {
  return {
    sessionLength: state.pomodoro.sessionLength
  };
};

const mapDispatchToProps = dispatch => {
  return {
    incrementSessionLength: () => {
      dispatch(incrementSessionLength());
    },
    decrementSessionLength: () => {
      dispatch(decrementSessionLength());
    }
  };
};

const SessionLengthContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionLengthComponent);

export default SessionLengthContainer;
