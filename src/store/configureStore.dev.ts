import { applyMiddleware, createStore } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import { createLogger } from 'redux-logger';
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers/root-reducer";
import IStoreState from "./IStoreState";


export default function configureStore() {
    return createStore<IStoreState>(
        rootReducer,
        applyMiddleware(thunkMiddleware,createLogger({
            collapsed: true
        }),reduxImmutableStateInvariant())
    );
}