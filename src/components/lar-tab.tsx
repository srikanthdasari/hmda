import * as _ from "lodash";
import * as React from 'react';
import { ConstLink } from '../constants/link';
import { Slice } from '../models/schema'; 
interface ILarTab {
    larObj : Slice;
    getLarData: (endpoint:string)=>void;
}

class LarTab extends React.Component<ILarTab,{}> {

    constructor(props: ILarTab){
        super(props);
        
    }

    public componentDidMount() {
        
        const link = _.isUndefined(this.props.larObj) ? null : _.find(this.props.larObj._links, (s) => {
            return s.rel === ConstLink.selfLinkId
        });

        if(link !== null && link !== undefined) {
            const href = _.isObject(link) ? link.href : "";
            this.props.getLarData(href)
        }
    }

    public render() {
        return (
            <div>
                <h1>{this.props.larObj.name}</h1>
            </div>
        );
    }
}

export default LarTab;