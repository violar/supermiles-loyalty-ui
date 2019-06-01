import * as ActionTypes from './ActionTypes';
import { users } from '../../mockData';

// Authenticate
export const authenticateUser = (credentials) => (dispatch) => {
    let userExists = users.filter(user => user.password === credentials.password && user.email === credentials.email)

    if(userExists.length > 0) {
        localStorage.setItem('miles', users[0].miles);
        dispatch(loginSuccessfull(users[0]));
    } else {
        dispatch(loginFailed("Hmm that doesn't look right. Try again."));
    }
}

const loginSuccessfull = (user) => ({
    type: ActionTypes.LOGIN_SUCCESSFULL,
    payload: user
})

const loginFailed = (message) => ({
    type: ActionTypes.LOGIN_FAILED,
    payload: message
})

export const logout = () => (dispatch) => {
    dispatch(logoutAction());
}

const logoutAction = () => ({
    type: ActionTypes.LOGOUT
})

export const purchaseProduct = (product, userMiles) => (dispatch) => {
    if(product.optionMiles <= userMiles) {
        let remainingMiles = userMiles - product.optionMiles;
        localStorage.setItem('miles', remainingMiles);

        dispatch(purchaseSuccessfull(product));
    } else {
        let error = new Error("You do not have enough miles to purchase this product.");
        dispatch(purchaseFailed(error));
    }
}

const purchaseSuccessfull = (product) => ({
    type: ActionTypes.PURCHASE_SUCCESSFULL,
    payload: product
})

const purchaseFailed = (message) => ({
    type: ActionTypes.PURCHASE_FAILED,
    payload: message
})





