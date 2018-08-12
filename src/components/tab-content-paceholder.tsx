import { WithStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
const styles = (theme:any) => ({
    root : {
        ...theme.mixins.gutters(),
        flexGrow: 1,
        margin:6,
        paddingBottom: theme.spacing.unit * 2,
        paddingTop: theme.spacing.unit * 2
    }
});

interface ITabContentPlaceholderProps {
    children: {};  // specify children name to use
    direction : string;
}


class TabContentPlaceholder extends React.Component<WithStyles<'root'> & ITabContentPlaceholderProps,{}> {
    
    constructor(props: WithStyles<'root'> & ITabContentPlaceholderProps) {
        super(props);
    }

    public render() {
        return (
            
            <Paper className={this.props.classes.root} elevation={1}>
                 <Typography component="div"  style={{ padding: 8 * 3 }}>
                    {this.props.children}
                </Typography>
            </Paper>
    
        );
    }
}

export default withStyles(styles)(TabContentPlaceholder);