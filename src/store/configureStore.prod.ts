import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers/root-reducer";
import IStoreState from "./IStoreState";

export default function configureStore() {
    return createStore<IStoreState>(
        rootReducer,
        applyMiddleware(thunkMiddleware)
    );
}