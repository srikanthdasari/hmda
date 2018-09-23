import { Dispatch } from "redux";
import ActionTypeKeys from "../constants/actiontypekeys";
import { fetchGeoData } from '../fetch-calls/dataset-api';
import { IGeoObject } from "../models/geo";
import IStoreState from "../store/IStoreState";

export interface ILoadGeoDataAction {
    readonly type:ActionTypeKeys.LOAD_GEO;
}

export interface ILoadGeoDataInProgressAction {
    readonly type:ActionTypeKeys.LOAD_GEO_DATA_INPROGRESS;
}

export interface ILoadGeoDataSuccessAction {
    readonly type:ActionTypeKeys.LOAD_GEO_DATA_SUCCESS;
    readonly data: IGeoObject;
}

export interface ILoadGeoDataErrorAction {
    readonly type:ActionTypeKeys.LOAD_GEO_DATA_ERROR;
    readonly data:Error;
}


export function getLoadGeoData(): (dispatch: Dispatch<IStoreState>) => Promise<void> 
{
    return async (dispatch: Dispatch<IStoreState>) => {
        await dispatch<any>(loadGeoData())
    };
}

function loadGeoData() : (dispatch: Dispatch<IStoreState>) => Promise<void> {
    return async (dispatch: Dispatch<IStoreState>) => {
        dispatch(onProgress());

        try{
            const data: IGeoObject = await fetchGeoData();

            dispatch(onSuccess(data));
        }
        catch(err) {
            dispatch(onError(err));
        }
    }
}

function onProgress() : ILoadGeoDataInProgressAction {
    return {
        type:ActionTypeKeys.LOAD_GEO_DATA_INPROGRESS
    }
}

function onSuccess(data:IGeoObject) : ILoadGeoDataSuccessAction {
    return {
        data,
        type: ActionTypeKeys.LOAD_GEO_DATA_SUCCESS
    }
}

function onError(error: Error):ILoadGeoDataErrorAction {
    return {
        data:error,
        type:ActionTypeKeys.LOAD_GEO_DATA_ERROR
    }
}

