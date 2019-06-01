import {authenticateUser, purchaseProduct} from './ActionCreators';
import * as ActionTypes from './ActionTypes';
import { users, products} from '../../mockData';

describe('Authentication', () => {
    it('should authenticate user when using good credentials', (done) => {
        authenticateUser({email: 'samplemail@mail.com', password: 'password'})((obj) => {
            expect(obj.type).toEqual(ActionTypes.LOGIN_SUCCESSFULL);
            expect(obj.payload).toEqual(users[0]);
            done();
        });
    }); 
    it('should fail to authenticate user when using bad credentials', (done) => {
        authenticateUser({email: 'bademail', password: 'badpassword'})((obj) => {
            expect(obj.type).toEqual(ActionTypes.LOGIN_FAILED);
            expect(obj.payload).not.toBeNull();
            expect(obj.payload).not.toBe('');
            done();
        });
    }); 
});

describe('Purchase', () => {
    it('should return product that has been selected when user has enough miles to purchase that product', (done) => {
        purchaseProduct(products[0].productOptions[0], 4000)((obj) => {
            expect(obj.type).toEqual(ActionTypes.PURCHASE_SUCCESSFULL);
            expect(obj.payload).toEqual(products[0].productOptions[0]);
            expect(localStorage.getItem('miles')).toBe('1000');
            done();
        })
    });
    it('should not be able to purchase product if not enough miles', (done) => {
        purchaseProduct(products[0].productOptions[0], 100)((obj) => {
            expect(obj.type).toEqual(ActionTypes.PURCHASE_FAILED);
            expect(obj.payload).not.toBeNull();
            expect(obj.payload).not.toBe('');
            done();
        })
    })
})