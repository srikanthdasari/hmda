import { Dispatch } from "redux";
import ActionTypeKeys from "../constants/actiontypekeys";
import { fetchDataSet } from "../fetch-calls/dataset-api";
import { IRootObject } from "../models/schema";
import IStoreState from "../store/IStoreState";

export interface ILoadDataSetAction {
    readonly type:ActionTypeKeys.LOAD_DATASET;
}

export interface ILoadDataSetInProgressAction {
    readonly type:ActionTypeKeys.LOAD_DATASET_INPROGRESS;    
}

export interface ILoadDataSetSuccessAction {
    readonly type: ActionTypeKeys.LOAD_DATASET_SUCCESS;
    readonly data : IRootObject; 
}

export interface ILoadDataSetErrorAction {
    readonly type:ActionTypeKeys.LOAD_DATASET_ERROR;
    readonly data:Error; 
}


export function getLoadDataSet() :(dispatch: Dispatch<IStoreState>) => Promise<void> 
{
    return async (dispatch : Dispatch<IStoreState>) => {        
            await dispatch<any>(loadDataset())
    };
}

function loadDataset(): (dispatch: Dispatch<IStoreState>) => Promise<void> {
    return async (dispatch: Dispatch<IStoreState>) => {
        // Signal work in progress.
        dispatch(onProgress());

        try{
            const data: IRootObject = await fetchDataSet();

            dispatch(onSuccess(data));
        }
        catch (err) {
            dispatch(onError(err));
        }
    };
}

function onProgress():ILoadDataSetInProgressAction {
    return {
        type:ActionTypeKeys.LOAD_DATASET_INPROGRESS
    }
}

function onSuccess(data:IRootObject) : ILoadDataSetSuccessAction {
    return {
        data,
        type:ActionTypeKeys.LOAD_DATASET_SUCCESS        
    };
}

function onError(error: Error):ILoadDataSetErrorAction {
    return {
        data:error,
        type:ActionTypeKeys.LOAD_DATASET_ERROR        
    }
}