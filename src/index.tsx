import * as _ from "lodash";
import { throttle } from 'lodash';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import ActionTypeKeys from './constants/actiontypekeys';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { getActionTakenInfo, 
        getAgencyCodeInfo, 
        getEthnicity, 
        getFipsInfo, 
        getLienStatusInfo, 
        getLoanTypeInfo, 
        getmsamdInfo, 
        getOwnerOccupancyInfo, 
        getPreapprovalInfo, 
        getPropertyTypeInfo, 
        getPurchaserType, 
        getRaceInfo, 
        getSexInfo, 
        getStates } from './selector/hmda-root-selector';
import configureStore from './store/configureStore';
import { IConceptsMenuViewModel } from './viewmodels/concepts-menu-viewmodel';
import { IMetadata } from './viewmodels/metadata';

const configuredStore = configureStore();

configuredStore.subscribe(throttle(()=> {
  const state = configuredStore.getState();
  if(_.get(state,'rootDataset.stage')===ActionTypeKeys.LOAD_DATASET_SUCCESS) {
  const metadata =  {
              actionTaken: {key:"actionTaken", displayName:"Action Taken", collection:getActionTakenInfo(state)} as IConceptsMenuViewModel,
              agencyCode: {key:"agencyCode",displayName:"Agency Code", collection:getAgencyCodeInfo(state)} as IConceptsMenuViewModel,
              ethnicity: {key:"etnicity", displayName:"Ethnicity", collection: getEthnicity(state)} as IConceptsMenuViewModel,
              fips: {key:"fips", displayName:"Fips", collection:getFipsInfo(state)} as IConceptsMenuViewModel,
              leinStatus: {key:"leinStatus",displayName:"Lein Status",collection:getLienStatusInfo(state)} as IConceptsMenuViewModel,
              loanType: {key:"loanType",displayName:"Loan Type",collection:getLoanTypeInfo(state)} as IConceptsMenuViewModel,
              msamd: {key:"msmad",displayName:"MSMAD",collection: getmsamdInfo(state)} as IConceptsMenuViewModel,
              ownerOccupancy: {key:"ownerOccupancy",displayName:"Owner Occupancy",collection:getOwnerOccupancyInfo(state)} as IConceptsMenuViewModel,
              preapproval: {key:"preApproval",displayName:"Pre Approval",collection:getPreapprovalInfo(state)} as IConceptsMenuViewModel,
              propertyType: {key:"propertyType",displayName:"Property Type", collection:getPropertyTypeInfo(state)} as IConceptsMenuViewModel,
              purchaserType: {key:"purchaserType",displayName:"Purchaser Type",collection:getPurchaserType(state)} as IConceptsMenuViewModel,
              race: {key:"race",displayName:"Race",collection:getRaceInfo(state)} as IConceptsMenuViewModel,
              sex: {key:"sex", displayName:"Sex", collection:getSexInfo(state)} as IConceptsMenuViewModel,
              stateCodes: {key:"stateCodes", displayName:"State Codes",collection:getStates(state)}as IConceptsMenuViewModel    
        } as IMetadata;
  
        localStorage.clear();
        localStorage.setItem('metadata', JSON.stringify(metadata));
      }
  },1000));


ReactDOM.render(
  <Provider store={configuredStore}>
      <App  />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
