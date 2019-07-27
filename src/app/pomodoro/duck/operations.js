import { 
    INCREMENT_BREAK_LENGTH, 
    INCREMENT_SESSION_LENGTH, 
    DECREMENT_BREAK_LENGTH, 
    DECREMENT_SESSION_LENGTH 
} from "./actions";

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