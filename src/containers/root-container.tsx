import * as React from 'react';
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from 'redux';
import { getLoadDataSet as getLoadDataSetAction } from '../actions/load-dataset';
import { getLoadGeoData as getLoadGeoDataAction } from '../actions/load-geo';
import Footer from '../components/footer';
import HeaderBar from '../components/header-bar';
import PreloaderContianer from '../components/pre-loader-container';
import ActionTypeKeys from '../constants/actiontypekeys';
import { IGeoObject } from '../models/geo';
import {getLocation} from '../selector/geo-location-selector';
import { getFooterMessage} from '../selector/hmda-root-selector';
import IStoreState from '../store/IStoreState';
import TabContainer from './tab-container';


interface IStateProps {
    readonly isInProgress : boolean;
    readonly currentStage :string;
    readonly footerMessage :string;
    readonly location : IGeoObject;
    readonly isGeoLcationReady:boolean;    
}

interface IRootProps{
    getLoadDataSet: () => (
        dispatch : Dispatch<IStoreState>    
    ) => Promise<void>;
    
    getLoadGeoData: () => (
        dispatch: Dispatch<IStoreState>
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
        this.props.getLoadGeoData();
    }

    public render() {
        return (
            <div>
                <div>
                { this.props.isGeoLcationReady === true &&  <HeaderBar title="HMDA" locationData={this.props.location} />}
                </div>
                    
                <div>
                    { this.props.isInProgress === true && <PreloaderContianer /> }
                    { this.props.currentStage === ActionTypeKeys.LOAD_DATASET_SUCCESS && <TabContainer value={0} />}
                </div>
                <div>
                    { this.props.currentStage === ActionTypeKeys.LOAD_DATASET_SUCCESS &&  <Footer message={this.props.footerMessage} />}
                </div>                
            </div>
        );
    }
}

function mapStateToProps(state:any){
    return {
        currentStage : state.rootDataset.stage,
        footerMessage : getFooterMessage(state),
        isGeoLcationReady : state.geoLocation.stage === ActionTypeKeys.LOAD_GEO_DATA_SUCCESS ? true : false,
        isInProgress : state.rootDataset.stage === ActionTypeKeys.LOAD_DATASET_INPROGRESS ? true : false,
        location : getLocation(state),                
    };
}

function mapDispatchToProps(dispatch: Dispatch<IStoreState>) {
    return {
        getLoadDataSet:bindActionCreators(getLoadDataSetAction,dispatch),
        getLoadGeoData:bindActionCreators(getLoadGeoDataAction,dispatch)
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (RootContainer);
