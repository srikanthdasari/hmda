import { 
    ILoadDataSetErrorAction, 
    ILoadDataSetInProgressAction, 
    ILoadDataSetSuccessAction 
    } from '../actions/load-dataset';
import ActionTypeKeys from '../constants/actiontypekeys';
import ActionTypes from '../constants/actiontypes';
import IStoreState from '../store/IStoreState';
import defaultState from './initial-state'

export default function rootDatasetReducer(
    state: IStoreState = defaultState,
    action:ActionTypes
) {
    switch(action.type){
        // case ActionTypeKeys.LOAD_DATASET:
        //     return OnLoadDataSet(action);
        case ActionTypeKeys.LOAD_DATASET_INPROGRESS:
            return OnLoadDataSetInProgress(state,action);
        case ActionTypeKeys.LOAD_DATASET_ERROR:
            return OnLoadDataSetError(state,action);
        case ActionTypeKeys.LOAD_DATASET_SUCCESS:
            return OnLoadDataSetSuccess(state,action);
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


// TODO : Clean up ..add the Inprogress intrface
function OnLoadDataSetInProgress(state:IStoreState, action: ILoadDataSetInProgressAction) :IStoreState {
    return {
        ...state,
        rootDataset: {
            fullDataSet:null
        },
        stage:action.type,
    }
}

// TODO : Clean Up..add the error Interface
function OnLoadDataSetError(state:IStoreState,action: ILoadDataSetErrorAction):IStoreState {
    return {
        ...state,
        rootDataset: {
            fullDataSet:null
        },
        stage:action.type
    }
}

function OnLoadDataSetSuccess(state:IStoreState,action: ILoadDataSetSuccessAction) : IStoreState {
    return {
        ...state,
        rootDataset: {
            fullDataSet:action.data
        },
        stage:action.type
    }
}