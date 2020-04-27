import {typeState, typeAction} from "./ReducerProps";

// Setting the Mail to the state.
const addEmail = (
    state: typeState,
    Email: string
    ) => {
    const finalEmail = Email;
    return {
        ...state,
        finalEmail,
    };
};
// Setting the Track Code to the state.
const addTrackCode = (
    state: typeState,
    TrackCode: string
    ) => {
    const finalTrackCode = TrackCode;
    return {
        ...state,
        finalTrackCode,
    };
};
// IN PROGRESS //
const resetTrackCode = (
    state: typeState,
    TrackCode: string
    ) => {
    return {
        ...state,
        finalTrackCode: TrackCode,
    };
};

export const globalReducer = (state: typeState, action: typeAction) => {
    switch (action.type) {
        case "ADD_TRACKCODE":
            return addTrackCode(state, action.value);
        case "ADD_EMAIL":
            return addEmail(state, action.value);
        case "RESET_TRACKCODE":
            return resetTrackCode(state, '');
        default: 
            return state;
    }
};
