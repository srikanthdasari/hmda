import * as React from 'react';
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from 'redux';
import { getLoadDataSet as getLoadDataSetAction } from '../actions/load-dataset';
import HeaderBar from '../components/header-bar';
import ActionTypeKeys from '../constants/actiontypekeys';
import { getSlices } from '../selector';
import IStoreState from '../store/IStoreState';

interface IStateProps {
    data: IStoreState;
}
interface IRootProps{
    getLoadDataSet: () => (
        dispatch : Dispatch<IStoreState>    
    ) => Promise<void>;
}
interface IProps extends IStateProps, IRootProps{

}
class RootContainer extends React.Component<IProps, {}>{

    constructor(props:IProps){
        super(props);        
    }

    public componentDidMount() {
        this.props.getLoadDataSet();
        // getRootDataSelector(this.props.rootDataSet);
    }

    public render() {
        return (
            <HeaderBar title="HMDA" />
        );
    }
}

function mapStateToProps(state:any){
    return {
        data: state.rootDataset.stage === ActionTypeKeys.LOAD_DATASET_SUCCESS? getSlices(state) : null
    };
}

function mapDispatchToProps(dispatch: Dispatch<IStoreState>) {
    return{
        getLoadDataSet:bindActionCreators(getLoadDataSetAction,dispatch)
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (RootContainer);