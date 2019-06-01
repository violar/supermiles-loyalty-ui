import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Login } from './reducers/login';
import { Purchase } from './reducers/purchase';
import { createForms } from 'react-redux-form';
import { UserLogin } from './forms/forms';


export const ConfigureStore = () => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        combineReducers({
            login: Login,
            purchase: Purchase,
            ...createForms({
                userLogin: UserLogin
            })
        }),
        composeEnhancers(
            applyMiddleware(thunk, logger)
        )
    );

    return store;
}