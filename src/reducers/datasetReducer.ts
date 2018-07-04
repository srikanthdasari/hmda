import { 
    ILoadDataSetErrorAction, 
    ILoadDataSetInProgressAction, 
    ILoadDataSetSuccessAction 
    } from '../actions/load-dataset';
import ActionTypeKeys from '../constants/actiontypekeys';
import ActionTypes from '../constants/actiontypes';
import { IDataSetStoreState } from '../store/IStoreState';
import defaultState from './initial-state'

export default function datasetReducer(
    state: IDataSetStoreState = defaultState.rootDataSet,
    action:ActionTypes
) {
    switch(action.type){
        // case ActionTypeKeys.LOAD_DATASET:
        //     return OnLoadDataSet(action);
        case ActionTypeKeys.LOAD_DATASET_INPROGRESS:
            return OnLoadDataSetInProgress(action);
        case ActionTypeKeys.LOAD_DATASET_ERROR:
            return OnLoadDataSetError(action);
        case ActionTypeKeys.LOAD_DATASET_SUCCESS:
            return OnLoadDataSetSuccess(action);
        default:
            return state;
    }
}


// function OnLoadDataSet(action: ILoadDataSetAction) {
//     return {
//         isFetching : false,
//         fullDataSet: null,
//         lastUpdated: null 
//     }
// }

function OnLoadDataSetInProgress(action: ILoadDataSetInProgressAction) {
    return {
        fullDataSet: action.type        
    }
}

function OnLoadDataSetError(action: ILoadDataSetErrorAction) {
    return {
        rootDataSet:action
    }
}

function OnLoadDataSetSuccess(action: ILoadDataSetSuccessAction) {
    return {
        rootDataSet:action
    }
}