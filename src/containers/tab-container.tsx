import { WithStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import withStyles from '@material-ui/core/styles/withStyles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import * as _ from "lodash";
import * as React from 'react';
import { connect } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';
import compose  from 'recompose/compose';
import { bindActionCreators, Dispatch } from 'redux';
import {getLoadLarData as getLoadLarDataAction} from '../actions/load-lar';
import TabContentPlaceholder from '../components/tab-content-paceholder';
import { Slice } from '../models/schema';
import { getSlices } from '../selector';
import IStoreState from '../store/IStoreState';
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
    // getSliceData: () => (
    //     dispatch : Dispatch<IStoreState>    
    // ) => Promise<void>;
    getLarData: (endpoint:string)=>(
        dispatch : Dispatch<IStoreState>
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
        
    public componentDidMount() {
        // this.props.getSliceData();        
        // if(_.isObject(this.props.slices) && _.isArray(this.props.slices))
        // {
        //     if(this.props.slices.length > 1) {
        //         const linksObj = this.props.slices[0];
        //         this.props.getLarData( linksObj.href);
        //     }

        // }

        const larObj = _.find(this.props.slices, (l)=>{
            return l.id==="hmda_lar";
        });

        const link = _.isUndefined(larObj) ? null : _.find(larObj._links, (s) => {
            return s.rel==="self"
        });

        if(link !== null && link !== undefined) {
            const href = _.isObject(link) ? link.href : "";
            this.props.getLarData(href)
        }
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
        data:state.larDataset,
        slices: getSlices(state),
    }
}

function mapDispatchToProps(dispatch: Dispatch<IStoreState>) {
    return {
        getLarData:bindActionCreators(getLoadLarDataAction,dispatch)
    }
}

// export default withStyles(styles, { withTheme: true })(TabContainer);
export default compose<WithStyles<'root'> & ITabContainerProps,ITabContainertState>(
    withStyles(styles),
    connect<{},{},{}>(mapStateToProps,mapDispatchToProps)
)(TabContainer)