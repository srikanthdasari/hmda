import * as _ from "lodash";
import {IQuery} from '../models/query';

export class QueryParser {
    public static Parse(query:IQuery) : string {
        let finalquery="?";

        if(query!==null) {
            
            finalquery+="$select="+_.join(query.selectFields,',');

            finalquery+="&$orderBy="+_.join(query.orderBy,',');

            finalquery+="&$where=";

            if(query.whereCondition && query.whereCondition.length > 0) {
                query.whereCondition.map(s=>{
                    finalquery+=s.key+"=\""+s.value+"\"";                    
                });
            }
        }

        return finalquery;
    }
}