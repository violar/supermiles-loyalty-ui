import * as ActionTypes from './ActionTypes';

export const Purchase = (state = {
    purchaseFailed: null,
    purchaseSuccessfull: false,
    product: {}
}, action) => {
    switch(action.type){
        case ActionTypes.PURCHASE_SUCCESSFULL:
            return {
                ...state,
                purchaseFailed: null,
                purchaseSuccessfull: true,
                product: action.payload
            }
        case ActionTypes.PURCHASE_FAILED:
            return {
                ...state,
                purchaseFailed: action.payload,
                purchaseSuccessfull: false,
                product: null
            }
        default:
            return state;
    }
}