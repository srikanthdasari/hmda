import { combineReducers } from "redux";
import IStoreState from "../store/IStoreState";
import larDataset from "./larDataReducer";
import rootDataset from "./rootDatasetReducer";

const rootReducer = combineReducers<IStoreState>({
    larDataset,
    rootDataset
});

export default rootReducer;