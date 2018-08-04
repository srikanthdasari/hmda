import { combineReducers } from "redux";
import IStoreState from "../store/IStoreState";
import rootDataset from "./rootDatasetReducer";

const rootReducer = combineReducers<IStoreState>({
    rootDataset    
});

export default rootReducer;