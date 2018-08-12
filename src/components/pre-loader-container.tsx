import { WithStyles } from '@material-ui/core';
import withStyles, { StyleRules } from '@material-ui/core/styles/withStyles';
import * as React from 'react';
import Preloader from './pre-loader';

const styles:StyleRules<'root'> = ({
    root: {
        left:'50%',
        position: 'fixed',
        top:'50%',
        transform:'translate(-50%,-50%)'
    },
});


class PreloaderContianer extends React.Component<WithStyles<'root'> ,{}> {
    constructor(props: WithStyles<'root'>) {
        super(props);
    }

    public render() {
        return (
            <div className={this.props.classes.root}>
                <Preloader />
            </div>
        );
    }
}

export default withStyles(styles)(PreloaderContianer);