import {ILarObject} from '../models/lar';
import { IRootObject } from "../models/schema";
export default interface IStoreState {
    readonly rootObj: IRootDatasetState | null;   
    readonly larObj: ILarDatasetState | null;
    readonly stage : string | null;
    readonly errorObj:Error | null;
};

export interface IRootDatasetState {
    fullDataSet:Readonly<IRootObject> | null ;    
};

export interface ILarDatasetState {
    larDataSet:Readonly<ILarObject> | null;
};