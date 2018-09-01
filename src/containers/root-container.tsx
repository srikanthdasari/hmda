import * as React from 'react';
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from 'redux';
import { getLoadDataSet as getLoadDataSetAction } from '../actions/load-dataset';
import Footer from '../components/footer';
import HeaderBar from '../components/header-bar';
import PreloaderContianer from '../components/pre-loader-container';
import ActionTypeKeys from '../constants/actiontypekeys';
import { Concept } from '../models/schema';
import { getConcepts, getFooterMessage } from '../selector';
import IStoreState from '../store/IStoreState';
import TabContainer from './tab-container';

interface IStateProps {
    readonly concepts : Concept[];
    readonly isInProgress : boolean;
    readonly currentStage :string;
    readonly footerMessage :string;
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
    }

    public render() {
        return (
            <div>
                <header>
                    <HeaderBar title="HMDA" />
                </header>
                <div>
                    { this.props.isInProgress === true && <PreloaderContianer /> }
                    { this.props.currentStage === ActionTypeKeys.LOAD_DATASET_SUCCESS && <TabContainer value={0}  />}
                </div>
                <Footer message={this.props.footerMessage} />
            </div>
        );
    }
}

function mapStateToProps(state:any){
    return {
        concepts : getConcepts(state),
        currentStage : state.rootDataset.stage,
        footerMessage : getFooterMessage(state),
        isInProgress : state.rootDataset.stage === ActionTypeKeys.LOAD_DATASET_INPROGRESS ? true : false,
    };
}

function mapDispatchToProps(dispatch: Dispatch<IStoreState>) {
    return {
        getLoadDataSet:bindActionCreators(getLoadDataSetAction,dispatch)
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (RootContainer);