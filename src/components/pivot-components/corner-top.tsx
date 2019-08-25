import { createStyles, withStyles, WithStyles } from '@material-ui/core';
import * as React from 'react';
import { IConceptsMenuViewModel } from 'src/viewmodels/concepts-menu-viewmodel';
import AddItem from './add-item';

const styles = () => createStyles({
    root: {
        height:55
    }
});

interface ICornerTop {
    getConceptSelection:(obj:IConceptsMenuViewModel) => void;
    xCollection:IConceptsMenuViewModel[];
    yCollection: IConceptsMenuViewModel[];
}

export const CornerTop: React.StatelessComponent<ICornerTop & WithStyles<'root'>> = (props) => {
        return (
            <div className={props.classes.root}>
                <AddItem getConceptSelection={props.getConceptSelection} xCollection={props.xCollection} yCollection={props.yCollection}  />
            </div>
        );
}

export default withStyles(styles)(CornerTop);