import { compose, createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import { RootReducer } from './root-reducer';
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
export const storeInstance = createStore(RootReducer, undefined, composeEnhancers(applyMiddleware(thunkMiddleware)));
