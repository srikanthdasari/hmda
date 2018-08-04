import { IRootObject } from "../models/schema";

export default interface IStoreState {
    readonly rootDataset: IDataSetStoreState | null;   
    readonly stage : string | null;
    readonly erroMessage:string | null;
};

export interface IDataSetStoreState {
    fullDataSet:Readonly<IRootObject> | null ;    
};