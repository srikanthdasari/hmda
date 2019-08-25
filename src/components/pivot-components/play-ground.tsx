import { createStyles, withStyles, WithStyles } from '@material-ui/core';
import * as React from 'react';

const styles  = createStyles({
    root: {
        display:'flex',
        height:500
    }
})

class Playground extends React.Component<WithStyles<'root'>,{}> {
    constructor(props:WithStyles<'root'>){
        super(props);
    }

    public render() {
        return(
            <div>
                &nbsp;
            </div>
        )
    }
}


export default withStyles(styles)(Playground);