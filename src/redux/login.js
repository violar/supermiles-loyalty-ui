import * as ActionTypes from './ActionTypes';

export const Login = (state = {
    loginFailed: null,
    loginSuccessfull: false,
    user: {}
}, action) => {
    switch(action.type) {
        case ActionTypes.LOGIN_SUCCESSFULL:
            return {
                ...state,
                loginFailed: false,
                loginSuccessfull: true,
                user: action.payload
            }
        case ActionTypes.LOGIN_FAILED:
            return {
                ...state,
                loginFailed: action.payload,
                loginSuccessfull: false,
                user: {}
            }
        default: 
            return state;
    }
}