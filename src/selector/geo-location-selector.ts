import * as _ from "lodash";
import { createSelector } from "reselect";
import { IGeoObject } from "../models/geo";

const getLocationSelector = (state:any) => _.get(state,'geoLocation');

export const getLocation = createSelector(
    [getLocationSelector],
    (state:IGeoObject) => {
        return _.isObject(state) ?_.get(state,'location.geoLocation') : null;
    }
);