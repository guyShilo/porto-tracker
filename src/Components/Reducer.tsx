import React, { useState, useEffect } from "react";

export interface IState {
    Email: string;
    TrackCode: string;
    Captcha?: string;
}

export interface IAction {
    type: string;
    value: string;
}
const addEmail = (
    state: IState,
    Email: string
    ) => {
    const finalEmail = Email;
    return {
        ...state,
        finalEmail,
    };
};

const addTrackCode = (
    state: IState,
    TrackCode: string
    ) => {
    const finalTrackCode = TrackCode;
    return {
        ...state,
        finalTrackCode,
    };
};

const resetTrackCode = (
    state: IState,
    TrackCode: string
    ) => {
    return {
        ...state,
        finalTrackCode: TrackCode,
    };
};

export const globalReducer = (state: IState, action: IAction) => {
    switch (action.type) {
        case "ADD_TRACKCODE":
            return addTrackCode(state, action.value);
        case "ADD_EMAIL":
            return addEmail(state, action.value);
        case "RESET_TRACKCODE":
            return resetTrackCode(state, '');
        default: 
            return state
        break;
}
};
