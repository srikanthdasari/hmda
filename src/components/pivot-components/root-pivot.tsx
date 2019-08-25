import { createStyles, Grid, Theme, WithStyles, withStyles } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import * as _ from "lodash";
import * as React from 'react';
import { IConceptsMenuViewModel } from 'src/viewmodels/concepts-menu-viewmodel';
import CornerTop from './corner-top';
import Playground from './play-ground';
import XAxis from './xaxis';
import YAxis from './yaxis';


const styles = (theme:Theme) =>createStyles({
    paper : {
        color:theme.palette.text.primary,
        padding: 3,
        textAlign: 'center',        
    },
    root: {
        flexGrow:1,
        height:'100%',
        margin: 2,

    },
});


interface IRootPivotState {
    xCollection: IConceptsMenuViewModel[];
    yCollection: IConceptsMenuViewModel[];
}

class  RootPivot extends React.Component<WithStyles<'root' | 'paper'>,IRootPivotState> {

    constructor(props: WithStyles<'root' | 'paper'>) {
        super(props);
        this.state={
            xCollection:[],
            yCollection:[]
        };
        this.getConceptSelection=this.getConceptSelection.bind(this);
    }

    public getConceptSelection(selectedObj:IConceptsMenuViewModel) {
        
        if(_.isObject(selectedObj)) {
            const xcollection = _.isUndefined(this.state.xCollection)? new Array<IConceptsMenuViewModel>():this.state.xCollection ;
            const ycollection = _.isUndefined(this.state.yCollection)? new Array<IConceptsMenuViewModel>():this.state.yCollection ;

            if(xcollection.length > ycollection.length) {
                ycollection.push(selectedObj);
            } else {
                xcollection.push(selectedObj);
            } 
            
            this.setState({xCollection:xcollection, yCollection:ycollection});
        }
    }

    public render() {
        return (
                <div className={this.props.classes.root}>

                    <Grid container={true} spacing={24}>
                        <Grid item={true} xs={12}>
                            <Paper className={this.props.classes.paper}/>
                        </Grid>
                        <Grid item={true} xs={2}>
                            <Paper className={this.props.classes.paper}>
                                <CornerTop getConceptSelection={this.getConceptSelection}  xCollection={this.state.xCollection} yCollection={this.state.yCollection} />
                            </Paper>
                        </Grid>
                        <Grid item={true} xs={10}>
                            <Paper className={this.props.classes.paper}>
                                <XAxis xCollection={this.state.xCollection} />
                            </Paper>
                        </Grid>
                        <Grid item={true} xs={2}>
                            <Paper className={this.props.classes.paper}>
                                <YAxis yCollection={this.state.yCollection} />
                            </Paper>
                        </Grid>
                        <Grid item={true} xs={10}>
                            <Paper className={this.props.classes.paper}>
                                <Playground />
                            </Paper>
                        </Grid>
                    </Grid>

                    {/* <div>                    
                        <CornerTop getConceptSelection={this.getConceptSelection}  />
                    </div>
                    <div>                    
                        <XAxis xCollection={this.state.xCollection} />
                    </div>
                    <div>
                        <YAxis />
                    </div>  
                    <div>
                        <Playground />
                    </div> */}
                </div>        
        )
    }
};

export default withStyles(styles)(RootPivot);
