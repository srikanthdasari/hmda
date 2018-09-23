import { 
    ILoadDataSetAction, 
    ILoadDataSetErrorAction, 
    ILoadDataSetInProgressAction, 
    ILoadDataSetSuccessAction 
} from "../actions/load-dataset";

import { 
    ILoadGeoDataAction, 
    ILoadGeoDataErrorAction, 
    ILoadGeoDataInProgressAction, 
    ILoadGeoDataSuccessAction 
} from "../actions/load-geo";

import { 
    ILoadLarDataAction, 
    ILoadLarDataErrorAction, 
    ILoadLarDataInProgressAction, 
    ILoadLarDataSuccessAction 
} from "../actions/load-lar";

type ActionTypes =
| ILoadDataSetAction
| ILoadDataSetInProgressAction
| ILoadDataSetSuccessAction
| ILoadDataSetErrorAction
| ILoadGeoDataAction
| ILoadGeoDataInProgressAction
| ILoadGeoDataErrorAction
| ILoadGeoDataSuccessAction
| ILoadLarDataAction
| ILoadLarDataInProgressAction
| ILoadLarDataSuccessAction
| ILoadLarDataErrorAction

export default ActionTypes;