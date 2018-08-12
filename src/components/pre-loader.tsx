import { WithStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import withStyles from '@material-ui/core/styles/withStyles';
import * as React from 'react';

const styles = (theme:any) => ({
    progress: {
      margin: theme.spacing.unit * 2,
    },
});


class Preloader extends React.Component<WithStyles<'progress'> ,{}> {
    constructor(props: WithStyles<'progress'>) {
        super(props);

    }

    public render() {
        return (
            <div>
                <CircularProgress className={this.props.classes.progress} thickness={7} />
            </div>
        );
    }
}

export default withStyles(styles)(Preloader);