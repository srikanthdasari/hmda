import * as _ from "lodash";
import { createSelector } from "reselect";
import { ConceptsId } from "../constants/conceptId";
import { Concept, IRootObject } from "../models/schema";

const getRootDataSelector = (state:any) => _.get(state,'rootDataset.rootObj.fullDataSet');

export const getSlices = createSelector(
    [getRootDataSelector],
    (state:IRootObject) =>{
        return _.isObject(state) ? _.get(state,'_embedded.slices') : null; 
    }
);

export const getConcepts = createSelector(
    [getRootDataSelector],
    (state:IRootObject) => {
        return _.isObject(state) ? _.get(state,'_embedded.concepts') : null;
    }
);

export const getFooterMessage = createSelector(
    [getRootDataSelector],
    (state:IRootObject) => {
        return _.isObject(state) ? _.get(state,'description') : null;
    }
)

export const getStates = createSelector(
    [getConcepts],
    (state:Concept[]) => {
        const statesConcept = _.isUndefined(state) ? null: _.find(state,(p)=> {
            return p.id === ConceptsId.stateId
        });

        const statesTable = statesConcept!==null && statesConcept!==undefined ? statesConcept.table : null;

        return statesTable!==null && statesTable!==undefined ? statesTable.data :null;
    }
)

export const getEthnicity = createSelector(
    [getConcepts],
    (state:Concept[]) => {
        const ethnicityConcept = _.isUndefined(state) ? null : _.find(state,(p)=>{
            return p.id === ConceptsId.ethnicity
        });

        const ethnicityTable = ethnicityConcept!==null && ethnicityConcept!==undefined ? ethnicityConcept.table : null;

        return ethnicityTable !==null && ethnicityTable !==undefined ?ethnicityTable.data : null;
    }
)

export const getPurchaserType = createSelector(
    [getConcepts],
    (state:Concept[]) => {
        const purchaserTypeConcept = _.isUndefined(state) ? null: _.find(state,(p)=>{
            return p.id === ConceptsId.purchserType
        });

        const purchaserTypeTable = purchaserTypeConcept!==null && purchaserTypeConcept!==undefined ? purchaserTypeConcept.table : null;

        return purchaserTypeTable!==null && purchaserTypeTable!==undefined ? purchaserTypeTable.data : null;
    }
)


export const getFipsInfo = createSelector (
    [getConcepts],
    (state:Concept[])=>{
        const fipsConcept = _.isUndefined(state) ? null : _.find(state,(p)=>{
            return p.id === ConceptsId.fips
        });

        const fipsTable = fipsConcept!==null && fipsConcept!==undefined ? fipsConcept.table : null;

        return fipsTable!==null && fipsTable!==undefined ? fipsTable.data : null;
    }
)


export const getPreapprovalInfo = createSelector(
    [getConcepts],
    (state:Concept[])=>{
        const preApprovalConcept = _.isUndefined(state) ? null : _.find(state,(p)=>{
            return p.id === ConceptsId.preapproval
        });

        const preApprovalTable = preApprovalConcept!==null && preApprovalConcept!==undefined ? preApprovalConcept.table : null;

        return preApprovalTable!==null && preApprovalTable!==undefined ? preApprovalTable.data : null;
    }
)


export const getLienStatusInfo = createSelector(
    [getConcepts],
    (state:Concept[])=>{
        const lienStatusConcept = _.isUndefined(state) ? null : _.find(state,(p)=>{
            return p.id === ConceptsId.lienStatus
        });

        const lienStatusTable = lienStatusConcept!==null && lienStatusConcept!==undefined ? lienStatusConcept.table : null;

        return lienStatusTable!==null && lienStatusTable!==undefined ? lienStatusTable.data : null;
    }
)

export const getActionTakenInfo = createSelector(
    [getConcepts],
    (state:Concept[])=>{
        const ActionTakenConcept = _.isUndefined(state) ? null : _.find(state,(p)=>{
            return p.id === ConceptsId.actionTakenName
        });

        const ActionTakenTable = ActionTakenConcept!==null && ActionTakenConcept!==undefined ? ActionTakenConcept.table : null;

        return ActionTakenTable!==null && ActionTakenTable!==undefined ? ActionTakenTable.data : null;
    }
)

export const getRaceInfo = createSelector(
    [getConcepts],
    (state:Concept[])=>{
        const raceConcept = _.isUndefined(state) ? null : _.find(state,(p)=>{
            return p.id === ConceptsId.race
        });

        const raceTable = raceConcept!==null && raceConcept!==undefined ? raceConcept.table : null;

        return raceTable!==null && raceTable!==undefined ? raceTable.data : null;
    }
)

export const getmsamdInfo = createSelector(
    [getConcepts],
    (state:Concept[])=>{
        const msamdConcept = _.isUndefined(state) ? null : _.find(state,(p)=>{
            return p.id === ConceptsId.msamd
        });

        const msamdTable = msamdConcept!==null && msamdConcept!==undefined ? msamdConcept.table : null;

        return msamdTable!==null && msamdTable!==undefined ? msamdTable.data : null;
    }
)


export const getOwnerOccupancyInfo = createSelector(
    [getConcepts],
    (state:Concept[])=>{
        const ownerOccupancyConcept = _.isUndefined(state) ? null : _.find(state,(p)=>{
            return p.id === ConceptsId.ownerOccupancy
        });

        const ownerOccupancyTable = ownerOccupancyConcept!==null && ownerOccupancyConcept!==undefined ? ownerOccupancyConcept.table : null;

        return ownerOccupancyTable!==null && ownerOccupancyTable!==undefined ? ownerOccupancyTable.data : null;
    }
)


export const getLoanTypeInfo = createSelector(
    [getConcepts],
    (state:Concept[])=>{
        const loanTypeConcept = _.isUndefined(state) ? null : _.find(state,(p)=>{
            return p.id === ConceptsId.loanType
        });

        const loanTypeTable = loanTypeConcept!==null && loanTypeConcept!==undefined ? loanTypeConcept.table : null;

        return loanTypeTable!==null && loanTypeTable!==undefined ? loanTypeTable.data : null;
    }
)


export const getAgencyCodeInfo = createSelector(
    [getConcepts],
    (state:Concept[])=>{
        const agencyCodeConcept = _.isUndefined(state) ? null : _.find(state,(p)=>{
            return p.id === ConceptsId.agencyCode
        });

        const agencyCodeTable = agencyCodeConcept!==null && agencyCodeConcept!==undefined ? agencyCodeConcept.table : null;

        return agencyCodeTable!==null && agencyCodeTable!==undefined ? agencyCodeTable.data : null;
    }
)

export const getPropertyTypeInfo = createSelector(
    [getConcepts],
    (state:Concept[])=>{
        const propertyTypeConcept = _.isUndefined(state) ? null : _.find(state,(p)=>{
            return p.id === ConceptsId.propertyType
        });

        const propertyTypeTable = propertyTypeConcept!==null && propertyTypeConcept!==undefined ? propertyTypeConcept.table : null;

        return propertyTypeTable!==null && propertyTypeTable!==undefined ? propertyTypeTable.data : null;
    }
)

export const getSexInfo = createSelector(
    [getConcepts],
    (state:Concept[])=>{
        const sexConcept = _.isUndefined(state) ? null : _.find(state,(p)=>{
            return p.id === ConceptsId.sex
        });

        const sexTable = sexConcept!==null && sexConcept!==undefined ? sexConcept.table : null;

        return sexTable!==null && sexTable!==undefined ? sexTable.data : null;
    }
)

