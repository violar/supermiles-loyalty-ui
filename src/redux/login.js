import * as ActionTypes from './ActionTypes';

export const Login = (state = {
    loginFailed: null,
    loginSuccessfull: false
}, action) => {
    switch(action.type) {
        case ActionTypes.LOGIN_SUCCESSFULL:
            return {
                ...state,
                loginFailed: null,
                loginSuccessfull: true
            }
        case ActionTypes.LOGIN_FAILED:
            return {
                ...state,
                loginFailed: "Hmm that doesn't look right. Try again.",
                loginSuccessfull: false
            }
        default: 
            return state;
    }
}