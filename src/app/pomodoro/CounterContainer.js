import { connect } from 'react-redux';
import CounterComponent from './CounterComponent';

const mapStateToProps = (state) => {
    return {
        currentTime: state.pomodoro.currentTime,
        isSession: state.pomodoro.isSession
     };
}

const mapDispatchToProps = (dispatch) => {
    /* const fetchSubredditJson = (subreddit) => {
        dispatch(homeOperations.fetchSubredditJson(subreddit))
    }; */
    
    return { };
};

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterComponent);

export default CounterContainer;