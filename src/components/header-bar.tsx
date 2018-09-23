import { 
    Avatar, 
    Chip, 
    Menu, 
    MenuItem, 
    StyleRulesCallback, 
    Toolbar, 
    Typography, 
    WithStyles
} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import withStyles from '@material-ui/core/styles/withStyles';
import * as _ from "lodash";
import * as React from 'react';
import SessionStateConstants from '../constants/session-state-constants'
import { IGeoObject } from '../models/geo';
import { Datum } from '../models/schema';
import MenuDrawer from './menu-drawer';

const styles:StyleRulesCallback<'root'> = () => ({
    flex: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    root:{
        flexGrow: 1
    },
});

interface IHeaderBarProps {
    title:string;
    locationData: IGeoObject;
    statecodes: Datum[];
}

interface IHeaderBarState {
    IsOpen:boolean;
    anchorEl:any;
    stateName:string;
    stateCode:string;
}

type IHeaderPropsWithStyles = IHeaderBarProps & WithStyles<'root'> & WithStyles<'flex'> & WithStyles<'menuButton'>;


class HeaderBar extends React.Component<IHeaderPropsWithStyles, IHeaderBarState> {

    constructor(props:IHeaderPropsWithStyles) {
        super(props);
        this.state = {
                        IsOpen:false, 
                        anchorEl:null,
                        stateCode:"",
                        stateName:""
                    };
        this.onLocationClick = this.onLocationClick.bind(this);
        this.onHandleClose = this.onHandleClose.bind(this);
        this.onHandleMenuItemClick = this.onHandleMenuItemClick.bind(this);
    }
    
    public componentDidMount() {
        this.setState({
                stateCode:_.isObject(this.props.locationData)?this.props.locationData.region_code:"",
                stateName:_.isObject(this.props.locationData)?this.props.locationData.region_name:"",
            });
            sessionStorage.setItem(SessionStateConstants.SESSION_USSTATE,_.isObject(this.props.locationData)?this.props.locationData.region_code:"");      
    }

    public onLocationClick(e:React.MouseEvent<HTMLDivElement>) {
        this.setState({IsOpen:!this.state.IsOpen});
        this.setState({anchorEl:e.currentTarget})
    }

    public onHandleClose() {
        this.setState({ anchorEl: null , IsOpen:false});
    }


    // tslint:disable-next-line:variable-name
    public onHandleMenuItemClick(_e:React.MouseEvent<HTMLElement>) {
        if(_.isObject(_e) && _.isObject(_e.currentTarget)) {
            const selectedValue =_.trim(_e.currentTarget.textContent || "").toLowerCase();
            const mappedValue = _.find(this.props.statecodes,(l)=>{
                return l.name.toLowerCase() === selectedValue
            });
            
            if(!_.isUndefined(mappedValue))
            {
                sessionStorage.setItem(SessionStateConstants.SESSION_USSTATE, mappedValue.abbr);            
                this.setState({stateCode:mappedValue.abbr, stateName:mappedValue.name})
            }            
        }
        this.setState({ anchorEl: null , IsOpen:false});
    }

    public render() {
        
        return (
            <div className={this.props.classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        {/* <IconButton  color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton> */}
                        <MenuDrawer />
                        <Typography variant="title" color="inherit" className={this.props.classes.flex}>
                            {this.props.title}
                        </Typography>
                        <div>
                            <Chip
                                    avatar={<Avatar> {this.state.stateCode} </Avatar>}
                                    label={this.state.stateName}
                                    color="primary"
                                    onClick={this.onLocationClick}                                    
                            />
                            <Menu open={this.state.IsOpen}
                            // onChange={this.onHandleMenuItemClick}
                            anchorEl={this.state.anchorEl}
                            anchorOrigin={{
                                horizontal: 'right',
                                vertical: 'top'
                                }}
                            transformOrigin={{
                                horizontal: 'right',
                                vertical: 'top'                                
                            }}
                            onClose={this.onHandleClose}
                            >
                            {
                                this.props.statecodes!==null && this.props.statecodes!==undefined ? 
                                                                this.props.statecodes.map(p => <MenuItem id={p.abbr} key={p.abbr} onClick={this.onHandleMenuItemClick} > {p.name} </MenuItem>) 
                                                                : <MenuItem key="loading">Loading...</MenuItem>
                            }                                   
                            </Menu>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>  
        );
    }
}

export default withStyles(styles)(HeaderBar);