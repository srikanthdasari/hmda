import { 
    ILoadDataSetAction, 
    ILoadDataSetErrorAction, 
    ILoadDataSetInProgressAction, 
    ILoadDataSetSuccessAction 
} from "../actions/load-dataset";

type ActionTypes =
| ILoadDataSetAction
| ILoadDataSetInProgressAction
| ILoadDataSetSuccessAction
| ILoadDataSetErrorAction

export default ActionTypes;