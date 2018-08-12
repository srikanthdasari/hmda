import { WithStyles } from '@material-ui/core';
import withStyles, { StyleRules } from '@material-ui/core/styles/withStyles';
import * as React from 'react';

const styles:StyleRules<'root'> = ({
    root: {
        bottom:0,
        fontSize:11,
        left:0,
        margin:3,
        position: 'fixed',
        right:0,
        textAlign:'center',
        width:'100%'
    },
});

interface IFooterProps {
    message :string;
}

class Footer extends React.Component<WithStyles<'root'> & IFooterProps ,{}> {
    constructor(props: WithStyles<'root'> & IFooterProps) {
        super(props);
    }

    public render() {
        return (
            <div className={this.props.classes.root} dangerouslySetInnerHTML={{ __html: this.props.message }} />
        );
    }
}

export default withStyles(styles)(Footer);