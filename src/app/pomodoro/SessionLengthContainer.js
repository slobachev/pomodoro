import { connect } from 'react-redux';
import SessionLengthComponent from './SessionLengthComponent';

const mapStateToProps = (state) => {
    return { };
}

const mapDispatchToProps = (dispatch) => {
    /* const fetchSubredditJson = (subreddit) => {
        dispatch(homeOperations.fetchSubredditJson(subreddit))
    }; */
    
    return { };
};

const SessionLengthContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionLengthComponent);

export default SessionLengthContainer;