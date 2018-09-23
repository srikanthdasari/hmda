import { combineReducers } from "redux";
import IStoreState from "../store/IStoreState";
import geoLocation from "./geoLocationReducer";
import larDataset from "./larDataReducer";
import rootDataset from "./rootDatasetReducer";
const rootReducer = combineReducers<IStoreState>({
    geoLocation,
    larDataset,
    rootDataset    
});

export default rootReducer;