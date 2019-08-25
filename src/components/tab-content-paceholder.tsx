import { createStyles, WithStyles, withStyles } from '@material-ui/core';
import * as React from 'react';
import {SliceId} from '../constants/sliceId';
import {Slice} from '../models/schema';
import LarTab from './lar-tab';

const styles =() => createStyles({
    root:{
        height:'100%',
        margin:10
    }
});

interface ITabContentPlaceholderProps {
    slice : Slice;
    direction : string;        
    getData: (endpoint:string)=>void;
}

class TabContentPlaceholder extends React.Component<ITabContentPlaceholderProps & WithStyles<'root'>,{}> {
    
    constructor(props:ITabContentPlaceholderProps & WithStyles<'root'>) {
        super(props);        
    }

    public render() {
        return (         
            <div className={this.props.classes.root}>
                { this.props.slice.id === SliceId.larId && <LarTab getLarData={this.props.getData} larObj={this.props.slice} {...this.props}/> }
            </div>
        );
    }
}

export default withStyles(styles)(TabContentPlaceholder);