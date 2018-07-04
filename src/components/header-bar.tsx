import { StyleRulesCallback, Toolbar, Typography, WithStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import withStyles from '@material-ui/core/styles/withStyles';
import * as React from 'react';
import MenuDrawer from './menu-drawer';
// import withRoot from '../withRoot';

const styles:StyleRulesCallback<'root'> = () => ({
    root:{
        flexGrow: 1
    }
});

interface IHeaderBarProps {
    title:string
}

class HeaderBar extends React.Component<WithStyles<'root'> & IHeaderBarProps,{}> {
    
    public render() {
        
        return (
            <div className={this.props.classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        {/* <IconButton  color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton> */}
                        <MenuDrawer />
                        <Typography variant="title" color="inherit">
                            {this.props.title}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>  
        );
    }
}

export default withStyles(styles)(HeaderBar);