import { connect } from 'react-redux';
import BreakLengthComponent from './BreakLengthComponent';

const mapStateToProps = (state) => {
    return { };
}

const mapDispatchToProps = (dispatch) => {
    /* const fetchSubredditJson = (subreddit) => {
        dispatch(homeOperations.fetchSubredditJson(subreddit))
    }; */
    
    return { };
};

const BreakLengthContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(BreakLengthComponent);

export default BreakLengthContainer;