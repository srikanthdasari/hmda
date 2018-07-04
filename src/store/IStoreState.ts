import { RootObject } from "../models/schema";

export default interface IStoreState {
    readonly rootDataSet: IDataSetStoreState;   
};

export interface IDataSetStoreState {
    fullDataSet:Readonly<RootObject> | null ;    
};