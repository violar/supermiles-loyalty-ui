import * as ActionTypes from '../actions/ActionTypes';

export const Login = (state = {
    errorMessage: null,
    user: null
}, action) => {
    switch(action.type) {
        case ActionTypes.LOGIN_SUCCESSFULL:
            return {
                ...state,
                errorMessage: null,
                user: action.payload
            }
        case ActionTypes.LOGIN_FAILED:
            return {
                ...state,
                errorMessage: action.payload
            }
        case ActionTypes.LOGOUT:
            localStorage.removeItem('miles');
            return {
                ...state,
                user: null
            }
        default: 
            return state;
    }
}