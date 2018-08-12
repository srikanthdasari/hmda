import { WithStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import withStyles from '@material-ui/core/styles/withStyles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import * as React from 'react';
import { connect } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';
import compose  from 'recompose/compose';
import { bindActionCreators, Dispatch } from 'redux';
import {getLoadLarData as getLoadLarDataAction} from '../actions/load-lar';
import TabContentPlaceholder from '../components/tab-content-paceholder';
import { ILarObject } from '../models/lar';
import { Slice } from '../models/schema';
const styles = (theme:any) => ({
    root : {
        backgroundColor: theme.palette.background.paper,
        // width: 500,
        flexGrow: 1,

    }
});

interface ITabContainertState {
    value : number;
}

interface ITabContainerProps {
    readonly slices: Slice[];
    getSliceData: () => (
        dispatch : Dispatch<ILarObject>    
    ) => Promise<void>;
}

class TabContainer extends React.Component<WithStyles<'root'> & ITabContainerProps,ITabContainertState> {
    
    constructor(props:WithStyles<'root'> & ITabContainerProps) {
        super(props);
        this.state = {value:0};
        this.handleChange = this.handleChange.bind(this);
    }

    // tslint:disable-next-line:variable-name
    public handleChange = (_e:any,v:number) =>  {
        this.setState({value:v});
    }

    public handleChangeIndex (index:number) {
        this.setState({value:index});
        
    }

    public render() {
        return (
            <div className={this.props.classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    fullWidth={true}
                    centered={true}
                    >
                        {
                            // tslint:disable-next-line:jsx-key
                            this.props.slices.map(p => <Tab label={p.name} /> )
                        }
                    </Tabs>
                </AppBar>
                <SwipeableViews
                        axis='x'
                        index={this.state.value}
                        onChangeIndex={this.handleChangeIndex}
                        >
                        {
                            // tslint:disable-next-line:jsx-key
                            this.props.slices.map(p => <TabContentPlaceholder direction='rtl'>{p.info.description}</TabContentPlaceholder> )
                        }
                </SwipeableViews>
            </div>
        );
    }
}

function mapStateToProps(state:any) { 
    return {
        data:state.larDataset
    }
}

function mapDispatchToProps(dispatch: Dispatch<ILarObject>) {
    return {
        getSliceData:bindActionCreators(getLoadLarDataAction,dispatch)
    }
}

// export default withStyles(styles, { withTheme: true })(TabContainer);
export default compose(
    withStyles(styles, { withTheme: true }),
    connect(mapStateToProps,mapDispatchToProps)
)(TabContainer)