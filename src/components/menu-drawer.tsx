import { IconButton, WithStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import withStyles from '@material-ui/core/styles/withStyles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import * as React from "react";
import {MenuListItems} from './drawer-list';
const styles = {    
    list: {
        width: 250,
    }    
};

interface IMenuDrawerState {
    left:boolean
}


class MenuDrawer extends React.Component<WithStyles<'list'>,IMenuDrawerState> {

    constructor(props : WithStyles<'list'>) {
        super(props);
        this.state = {left:false};
        this.toggleDrawer=this.toggleDrawer.bind(this);
    }

    public toggleDrawer() {
        this.setState({left:!this.state.left});
    };

    public render() {
        const menuList = (
            <div className={this.props.classes.list}>
                <List> {MenuListItems}</List>
            </div>
        );

        return(
            <div>
                <IconButton  color="inherit" aria-label="Menu" onClick={this.toggleDrawer}>
                    <MenuIcon />
                </IconButton>
                <SwipeableDrawer
                    open={this.state.left}
                    onOpen={this.toggleDrawer}
                    onClose={this.toggleDrawer}>
                    <div>
                        {menuList}
                    </div>
                </SwipeableDrawer>
            </div>
        );
    }
}


export default withStyles(styles)(MenuDrawer);