import { 
    ILoadGeoDataErrorAction, 
    ILoadGeoDataInProgressAction, 
    ILoadGeoDataSuccessAction 
} from "../actions/load-geo";
import ActionTypeKeys from "../constants/actiontypekeys";
import ActionTypes from "../constants/actiontypes";
import IStoreState from "../store/IStoreState";
import defaultState from './initial-state'

export default function geoLocationReducer(
    state: IStoreState = defaultState,
    action: ActionTypes
) {
    switch(action.type) {
        case ActionTypeKeys.LOAD_GEO_DATA_INPROGRESS:
                return OnLoadGeoDataInProgress(state,action);
        case ActionTypeKeys.LOAD_GEO_DATA_ERROR:
                return OnLoadGeoDataError(state,action);
        case ActionTypeKeys.LOAD_GEO_DATA_SUCCESS:
                return OnLoadGeoDataSuccess(state,action);
        default:
                return state;
    }
}


function OnLoadGeoDataInProgress(state:IStoreState, action: ILoadGeoDataInProgressAction) : IStoreState {
    return {
        ...state,
        errorObj:null,
        location: {
            geoLocation:null
        },
        stage:action.type
    }
}

function OnLoadGeoDataSuccess(state:IStoreState, action:ILoadGeoDataSuccessAction) :IStoreState {
    return {
        ...state,
        errorObj:null,
        location: {
            geoLocation:action.data
        },
        stage:action.type
    }
}

function OnLoadGeoDataError(state:IStoreState, action:ILoadGeoDataErrorAction):IStoreState {
    return {
        ...state,
        errorObj:action.data,
        location: {
            geoLocation:null
        },
        stage:action.type
    }
}