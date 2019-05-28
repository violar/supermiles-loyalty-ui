import React from 'react';
import * as ActionTypes from './ActionTypes';


export const authenticateUser = (credentials) => (dispatch) => {
    
    if(credentials.email === "samplemail@mail.com" && credentials.password === "password") {
        dispatch(loginSuccessfull());
    } else {
        dispatch(loginFailed());
    }
}

const loginSuccessfull = () => ({
    type: ActionTypes.LOGIN_SUCCESSFULL
})

const loginFailed = () => ({
    type: ActionTypes.LOGIN_FAILED
})