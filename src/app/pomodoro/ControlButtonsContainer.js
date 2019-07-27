import { connect } from "react-redux";
import ControlButtonsComponent from "./ControlButtonsComponent";
import { reset } from "./duck/operations";

const mapDispatchToProps = dispatch => {
  return {
    reset: () => {
      dispatch(reset());
    }
  };
};

const ControlButtonsContainer = connect(
  null,
  mapDispatchToProps
)(ControlButtonsComponent);

export default ControlButtonsContainer;