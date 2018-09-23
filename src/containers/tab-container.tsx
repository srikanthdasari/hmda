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
import { getLoadLarData as getLoadLarDataAction } from '../actions/load-lar';
import TabContentPlaceholder from '../components/tab-content-paceholder';
import SessionStateConstants from '../constants/session-state-constants'
import { IQuery, IWhereClause } from '../models/query';
import { Concept, Slice } from '../models/schema'; 
import { getConcepts, getSlices } from '../selector/hmda-root-selector';
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
    readonly concepts : Concept[];
    // readonly lar_query: Query;
    getLarData: (endpoint:string, query:IQuery)=>(
        dispatch : Dispatch<IStoreState>
    ) => Promise<void>;
}

class TabContainer extends React.Component<WithStyles<'root'> & ITabContainerProps,ITabContainertState> {
    
    constructor(props:WithStyles<'root'> & ITabContainerProps) {
        super(props);
        this.state = {value:0};
        this.handleChange = this.handleChange.bind(this);
        this.getData = this.getData.bind(this);
    }

    // tslint:disable-next-line:variable-name
    public handleChange(_e:React.ChangeEvent<{}>,v:number){
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
                            this.props.slices.map(p => <Tab key={p.id} label={p.name} /> )
                        }
                    </Tabs>
                </AppBar>
                <SwipeableViews
                        axis='x'
                        index={this.state.value}
                        onChangeIndex={this.handleChangeIndex}
                        >
                        {
                            this.props.slices.map(p => <TabContentPlaceholder getData={this.getData} key={p.id} direction='rtl' slice={p} /> )
                        }
                </SwipeableViews>
            </div>
        );
    }

    private getData(endpoint:string) {

        const conditions:IWhereClause[]=[{
            key:"state_abbr",
            value:sessionStorage.getItem(SessionStateConstants.SESSION_USSTATE) || ""
        }];

        const query:IQuery = {
            orderBy:[],
            selectFields:[],
            whereCondition: conditions            
        };

        // query.whereCondition.Add("state_abbr",sessionStorage.getItem(SessionStateConstants.SESSION_USSTATE))
        this.props.getLarData(endpoint, query);
    }
}

function mapStateToProps(state:any) { 
    return {
        concepts : getConcepts(state),
        data:state.larDataset,
        slices: getSlices(state)
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