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
import { Datum } from '../models/schema';
import {getLocation} from '../selector/geo-location-selector';
import { 
    getActionTakenInfo, 
    getAgencyCodeInfo, 
    getEthnicity, 
    getFipsInfo, 
    getFooterMessage, 
    getLienStatusInfo, 
    getLoanTypeInfo, 
    getmsamdInfo, 
    getOwnerOccupancyInfo, 
    getPreapprovalInfo, 
    getPropertyTypeInfo, 
    getPurchaserType, 
    getRaceInfo, 
    getSexInfo, 
    getStates 
} from '../selector/hmda-root-selector';
import IStoreState from '../store/IStoreState';
import TabContainer from './tab-container';

interface IStateProps {
    // readonly concepts : Concept[];
    readonly stateCodes : Datum[];
    readonly ethnicity : Datum[];
    readonly purchaserType: Datum[];
    readonly fips:Datum[];
    readonly preapproval: Datum[];
    readonly leinStatus: Datum[];
    readonly actionTaken: Datum[];
    readonly race:Datum[];
    readonly msamd: Datum[];
    readonly ownerOccupancy: Datum[];
    readonly loanType: Datum[];
    readonly agencyCode: Datum[];
    readonly propertyType:Datum[];
    readonly sex:Datum[];
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
                <header>
                    { this.props.isGeoLcationReady === true &&  <HeaderBar title="HMDA" locationData={this.props.location} statecodes={this.props.stateCodes}  />}
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
        // concepts : getConcepts(state),
        actionTaken:getActionTakenInfo(state),
        agencyCode:getAgencyCodeInfo(state),
        currentStage : state.rootDataset.stage,
        ethnicity : getEthnicity(state),
        fips: getFipsInfo(state),
        footerMessage : getFooterMessage(state),
        isGeoLcationReady : state.geoLocation.stage === ActionTypeKeys.LOAD_GEO_DATA_SUCCESS ? true : false,
        isInProgress : state.rootDataset.stage === ActionTypeKeys.LOAD_DATASET_INPROGRESS ? true : false,
        leinStatus: getLienStatusInfo(state),
        loanType: getLoanTypeInfo(state),
        location : getLocation(state),
        msamd:getmsamdInfo(state),
        ownerOccupancy: getOwnerOccupancyInfo(state),
        preapproval: getPreapprovalInfo(state),
        propertyType: getPropertyTypeInfo(state),
        purchaserType:getPurchaserType(state),
        race:getRaceInfo(state),
        sex:getSexInfo(state),
        stateCodes : getStates(state)
    };
}

function mapDispatchToProps(dispatch: Dispatch<IStoreState>) {
    return {
        getLoadDataSet:bindActionCreators(getLoadDataSetAction,dispatch),
        getLoadGeoData:bindActionCreators(getLoadGeoDataAction,dispatch)
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (RootContainer);