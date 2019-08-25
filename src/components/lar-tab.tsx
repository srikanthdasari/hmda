import * as _ from "lodash";
import * as React from 'react';
import { ConstLink } from '../constants/link';
import { Slice } from '../models/schema'; 
import RootPivot from './pivot-components/root-pivot';

interface ILarTabProps {
    larObj : Slice;
    getLarData: (endpoint:string)=>void;
}

class LarTab extends React.Component<ILarTabProps,{}> {

    constructor(props: ILarTabProps){
        super(props);
        this.state = props;
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
                <RootPivot />
            </div>
        );
    }
}

export default LarTab;