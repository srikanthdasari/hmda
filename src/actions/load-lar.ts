import { Dispatch } from "redux";
import ActionTypeKeys from "../constants/actiontypekeys";
import {fetchLarDataSet} from "../fetch-calls/dataset-api";
import {ILarObject} from "../models/lar";
import IStoreState from "../store/IStoreState";


export interface ILoadLarDataAction {
    readonly type:ActionTypeKeys.LOAD_LAR_DATA;
}

export interface ILoadLarDataInProgressAction {
    readonly type:ActionTypeKeys.LOAD_LAR_DATA_INPROGRESS;    
}

export interface ILoadLarDataSuccessAction {
    readonly type:ActionTypeKeys.LOAD_LAR_DATA_SUCCESS;
    readonly data:ILarObject;
}

export interface ILoadLarDataErrorAction {
    readonly type:ActionTypeKeys.LOAD_LAR_DATA_ERROR
    readonly data:Error;
}


export function getLoadLarData(endpoint:string) : (dispatch : Dispatch<IStoreState>) => Promise<void>
{
    return async(dispatch : Dispatch<IStoreState>) => {
        await dispatch<any>(loadLarData(endpoint));
    }
}


function loadLarData(endpoint:string):(dispatch: Dispatch<IStoreState>) => Promise<void> {
    return async(dispatch: Dispatch<IStoreState>) => {
        dispatch(onProgress());
        try{
            const data: ILarObject = await fetchLarDataSet(endpoint);

            dispatch(onSuccess(data));
        }
        catch(error) {
            dispatch(onError(error));
        }
    };
}


function onProgress():ILoadLarDataInProgressAction {
    return {
        type: ActionTypeKeys.LOAD_LAR_DATA_INPROGRESS
    }
}

function onSuccess(data:ILarObject): ILoadLarDataSuccessAction {
    return {
        data,
        type:ActionTypeKeys.LOAD_LAR_DATA_SUCCESS
    }
}

function onError(error:Error): ILoadLarDataErrorAction {
    return {
        data:error,
        type:ActionTypeKeys.LOAD_LAR_DATA_ERROR
    }
}