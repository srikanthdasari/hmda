import { combineReducers } from "redux";
import IStoreState from "../store/IStoreState";
import datasetReducer from "./datasetReducer";

const rootReducer = combineReducers<IStoreState>({
    datasetReducer    
});

export default rootReducer;