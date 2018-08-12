import { 
    ILoadDataSetAction, 
    ILoadDataSetErrorAction, 
    ILoadDataSetInProgressAction, 
    ILoadDataSetSuccessAction 
} from "../actions/load-dataset";

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
| ILoadLarDataAction
| ILoadLarDataInProgressAction
| ILoadLarDataSuccessAction
| ILoadLarDataErrorAction

export default ActionTypes;