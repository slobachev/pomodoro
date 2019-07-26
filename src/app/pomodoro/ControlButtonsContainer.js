import { connect } from 'react-redux';
import ControlButtonsComponent from './ControlButtonsComponent';

const mapDispatchToProps = (dispatch) => {
    /* const fetchSubredditJson = (subreddit) => {
        dispatch(homeOperations.fetchSubredditJson(subreddit))
    }; */
    
    return { };
};

const ControlButtonsContainer = connect(
    null,
    mapDispatchToProps
)(ControlButtonsComponent);

export default ControlButtonsContainer;