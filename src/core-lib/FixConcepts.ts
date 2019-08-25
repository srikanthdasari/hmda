import * as _ from "lodash";
import SessionStateConstants from "src/constants/session-state-constants";
import { Datum } from "src/models/schema";

export class FixConcepts {
    public static FixFips(collection: Datum[], statecode: string) : Datum[] {

        let stateCode = "";
        let result={} as Datum[];
        if(window.localStorage && window.localStorage.length>0) {
            const location=window.localStorage.getItem(SessionStateConstants.SESSION_USSTATE);

            if(location!==null && location!==undefined) {
                stateCode=location;
            }

            if(collection!==null && collection!==undefined) {
                result = _.map(collection,(o)=>{
                    if(o.state_abbr === stateCode) {
                        return {    _id:o._id,
                            code:o.state_abbr,
                            county_name:o.county_name,
                            name:o.county_name,
                            state_abbr:o.state_abbr,                        
                        } as Datum;
                    }
                }) as Datum[];

            }

        }

        return result;
    }
}