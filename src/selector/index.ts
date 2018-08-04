// import { get,isObject } from "lodash";
import * as _ from "lodash";
import { createSelector } from "reselect";
import { IRootObject } from "../models/schema";
const getRootDataSelector = (state:any) => _.get(state,'rootDataset.rootDataset.fullDataSet');

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