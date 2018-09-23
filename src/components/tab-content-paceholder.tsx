import * as React from 'react';
import {SliceId} from '../constants/sliceId';
import {Slice} from '../models/schema';
import LarTab from './lar-tab';

// const styles = (theme:any) => ({
//     root : {
//         ...theme.mixins.gutters(),
//         flexGrow: 1,
//         margin:6,
//         paddingBottom: theme.spacing.unit * 2,
//         paddingTop: theme.spacing.unit * 2
//     }
// });

interface ITabContentPlaceholderProps {
    slice : Slice;
    direction : string;        
    getData: (endpoint:string)=>void;
}

class TabContentPlaceholder extends React.Component<ITabContentPlaceholderProps,{}> {
    
    constructor(props:ITabContentPlaceholderProps) {
        super(props);        
    }

    public render() {
        return (         
            <div>
                { this.props.slice.id === SliceId.larId && <LarTab getLarData={this.props.getData} larObj={this.props.slice}/> }
            </div>
        );
    }
}

export default TabContentPlaceholder;