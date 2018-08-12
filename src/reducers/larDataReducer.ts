import {
    ILoadLarDataErrorAction,
    ILoadLarDataInProgressAction,
    ILoadLarDataSuccessAction
} from '../actions/load-lar';
import ActionTypeKeys from '../constants/actiontypekeys';
import ActionTypes from '../constants/actiontypes';
import IStoreState from '../store/IStoreState';
import defaultState from './initial-state'


export default function larDataReducer(
    state: IStoreState = defaultState,
    action: ActionTypes
) {
    switch(action.type) {
        case ActionTypeKeys.LOAD_LAR_DATA_INPROGRESS:
                return OnLoadLarDataInProgress(state,action);
        case ActionTypeKeys.LOAD_LAR_DATA_ERROR:
                return OnLoadLarDataError(state,action);
        case ActionTypeKeys.LOAD_LAR_DATA_SUCCESS:
                return OnLoadLarDataSuccess(state,action);
        default:
                return state;
    }
}

function OnLoadLarDataInProgress(state:IStoreState, action:ILoadLarDataInProgressAction) : IStoreState {
    return {
        ...state,
        errorObj:null,
        larObj: {
            larDataSet:null
        },
        stage:action.type
    }
}

function OnLoadLarDataSuccess(state:IStoreState, action:ILoadLarDataSuccessAction) : IStoreState {
    return {
        ...state,
        errorObj:null,
        larObj:{
            larDataSet:action.data
        },
        stage:action.type
    }
}

function OnLoadLarDataError(state:IStoreState, action:ILoadLarDataErrorAction):IStoreState {
    return {
        ...state,
        errorObj:action.data,
        larObj:{
            larDataSet:null
        },
        stage:action.type
    }
}