// import * as React from 'react';
// import { connect } from "react-redux";
// import { 
//     getActionTakenInfo, 
//     getAgencyCodeInfo, 
//     getEthnicity, 
//     getFipsInfo, 
//     getLienStatusInfo, 
//     getLoanTypeInfo, 
//     getmsamdInfo, 
//     getOwnerOccupancyInfo, 
//     getPreapprovalInfo, 
//     getPropertyTypeInfo, 
//     getPurchaserType, 
//     getRaceInfo, 
//     getSexInfo, 
//     getStates 
// } from '../selector/hmda-root-selector';
// import { IMetadata } from '../viewmodels/metadata';

// export interface IWithMetaData {
//     metadata?: IMetadata | null;
// }

// export function WithMetadata<P extends IWithMetaData>(
//     WrappedComponent: React.ComponentClass<P> | React.StatelessComponent<P>
// ):React.ComponentClass<P> {
//     class HOC extends React.Component<P > { // deepscan-disable-line
//         public render() {
//             return <WrappedComponent {...this.props} />;
//         }
//     }

//     const mapStateToProps = (state:any,props:any):P =>({
//         ...props,
//         metadata :  {
//                 actionTaken:getActionTakenInfo(state),
//                 agencyCode:getAgencyCodeInfo(state),
//                 ethnicity : getEthnicity(state),
//                 fips: getFipsInfo(state),
//                 leinStatus: getLienStatusInfo(state),
//                 loanType: getLoanTypeInfo(state),
//                 msamd:getmsamdInfo(state),
//                 ownerOccupancy: getOwnerOccupancyInfo(state),
//                 preapproval: getPreapprovalInfo(state),
//                 propertyType: getPropertyTypeInfo(state),
//                 purchaserType:getPurchaserType(state),
//                 race:getRaceInfo(state),
//                 sex:getSexInfo(state),
//                 stateCodes : getStates(state)    
//             } as IMetadata
//     })

//     return connect(mapStateToProps)(WrappedComponent);
// }

// function WithMetadata<P extends IWithMetaData>(Component:React.ComponentClass<P> | React.StatelessComponent<P>) {
//     function withMetadata(props:object) {
        
//         return (
//                 <Component {...props} /> 
//         );
//     }

//     const mapStateToProps = (state:any,props:any):P =>{
//         return ({
//             ...props,
//             metadata: {
//                 actionTaken: {key:"actionTaken", displayName:"Action Takne", collection:getActionTakenInfo(state)},
//                 agencyCode: {key:"agencyCode",displayName:"Agency Code", collection:getAgencyCodeInfo(state)},
//                 ethnicity: {key:"etnicity", displayName:"Ethnicity", collection: getEthnicity(state)},
//                 fips: {key:"fips", displayName:"Fips", collection:getFipsInfo(state)},
//                 leinStatus: {key:"leinStatus",displayName:"Lein Status",collection:getLienStatusInfo(state)},
//                 loanType: {key:"loanType",displayName:"Loan Type",collection:getLoanTypeInfo(state)},
//                 msamd: {key:"msmad",displayName:"MSMAD",collection: getmsamdInfo(state)},
//                 ownerOccupancy: {key:"ownerOccupancy",displayName:"Owner Occupancy",collection:getOwnerOccupancyInfo(state)},
//                 preapproval: {key:"preApproval",displayName:"Pre Approval",collection:getPreapprovalInfo(state)},
//                 propertyType: {key:"propertyType",displayName:"Property Type", collection:getPropertyTypeInfo(state)},
//                 purchaserType: {key:"purchaserType",displayName:"Purchaser Type",collection:getPurchaserType(state)},
//                 race: {key:"race",displayName:"Race",collection:getRaceInfo(state)},
//                 sex: {key:"sex", displayName:"Sex", collection:getSexInfo(state)},
//                 stateCodes: {key:"stateCodes", displayName:"State Codes",collection:getStates(state)}
//             } as IMetadata
//         });
//     };
    

//     return connect(mapStateToProps)(withMetadata);
// }

// export default WithMetadata;

