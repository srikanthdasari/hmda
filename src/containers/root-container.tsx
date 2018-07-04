import * as React from 'react';
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from 'redux';
import { getRootDataSelector, getRootObject } from '../selector';
import IStoreState, { IDataSetStoreState } from '../store/IStoreState';
import { getLoadDataSet as getLoadDataSetAction } from './../actions/load-dataset';
import HeaderBar from './../components/header-bar';


interface IRootProps {
    rootDataSet: IDataSetStoreState;
    getLoadDataSet: () => (
        dispatch : Dispatch<IStoreState>    
    ) => Promise<void>;
}

class RootContainer extends React.Component<IRootProps>{

    constructor(props:IRootProps){
        super(props);
    }

    public componentDidMount() {
        this.props.getLoadDataSet();
        getRootDataSelector(this.props.rootDataSet);
    }

    public render() {
        return (
            <HeaderBar title="HMDA" />
        );
    }
}

function mapStateToProps(state:IStoreState){
    return {
        rootDataSet:getRootObject(state)
    }
}

function mapDispatchToProps(dispatch: Dispatch<IStoreState>) {
    return{
        getLoadDataSet:bindActionCreators(getLoadDataSetAction,dispatch)
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (RootContainer);