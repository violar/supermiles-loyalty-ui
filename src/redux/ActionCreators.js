import React from 'react';
import * as ActionTypes from './ActionTypes';
import { users } from '../mockData';

// Authenticate
export const authenticateUser = (credentials) => (dispatch) => {
    if(credentials.email === users[0].email && credentials.password === users[0].password) {
        console.log("yoo");
        localStorage.setItem('miles', users[0].miles);
        dispatch(loginSuccessfull(users[0]));
    } else {
        console.log("aaaaa");
        let error = new Error("Hmm that doesn't look right. Try again.");
        dispatch(loginFailed(error));
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

// Purchase
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

const purchaseSuccessfull = (remainingMiles) => ({
    type: ActionTypes.PURCHASE_SUCCESSFULL,
    payload: remainingMiles
})

const purchaseFailed = (message) => ({
    type: ActionTypes.PURCHASE_FAILED,
    payload: message
})





