import { 
    INCREMENT_BREAK_LENGTH, 
    INCREMENT_SESSION_LENGTH, 
    DECREMENT_BREAK_LENGTH, 
    DECREMENT_SESSION_LENGTH, 
    RESET,
    TOGGLE_COUNTER,
    DECREMENT_CURRENT_TIME,
    TOGGLE_COUNTER_TYPE
} from "./actions";

const INTERVAL = 1000;

export const incrementBreakLength = () => {
    return {
        type: INCREMENT_BREAK_LENGTH
    }
}

export const incrementSessionLength = () => {
    return {
        type: INCREMENT_SESSION_LENGTH
    }
}

export const decrementBreakLength = () => {
    return {
        type: DECREMENT_BREAK_LENGTH
    }
}

export const decrementSessionLength = () => {
    return {
        type: DECREMENT_SESSION_LENGTH
    }
}

export const reset = () => {
    return {
        type: RESET
    }
}

export const resetAsync = (isCounterOn, counter) => dispatch =>  {
    if (isCounterOn) {
        dispatch(toggleCounterAsync(isCounterOn, counter));

        let player = document.getElementById("beep");
        if (!player.paused) {
            player.pause();
            player.currentTime = 0;
        }
    }

    dispatch(reset());
}

export const decrementCurrentTime = () => {
    return {
        type: DECREMENT_CURRENT_TIME,
    }
}

export const toggleCounter = (isCounterOn, counter) => {
    return {
        type: TOGGLE_COUNTER,
        counter: counter,
        isCounterOn: isCounterOn
    }
}

export const toggleCounterAsync = (isCounterOn, counter) => dispatch => {
    const isCounterRunning = isCounterOn;
    let newCounter = {};
    
    if (isCounterRunning) {
        clearInterval(counter);
    } else {
        newCounter = setInterval(() => dispatch(decrementCurrentTime()), INTERVAL);
    }
    
    dispatch(toggleCounter(!isCounterRunning, newCounter));
}

export const toggleCounterType = () => {
    return {
        type: TOGGLE_COUNTER_TYPE
    }
}