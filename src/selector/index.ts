// import { createSelector } from "reselect";
// import { Slice } from "../models/schema";
import IStoreState, { IDataSetStoreState } from "../store/IStoreState";


export const getRootDataSelector = (data:IDataSetStoreState) => data;


export function getRootObject(state:IStoreState) {
    return state;
}

// const getSliceRouteSelector = createSelector(
//     [getRootDataSelector],
//     (
//         sliceObj : ReadonlyArray<Slice>
//     ) => {
//         const sliceGroups = [...sliceObj];
        
//         return sliceGroups.map(slice => {

//             const SliceCollection: SliceRoutePaths[] = [];
            
//             SliceCollection.push(new SliceRoutePaths{title:slice.name, routepath:'dummy-path'});


//         }) as ReadonlyArray<SliceRoutePaths>;
//     }
// );
