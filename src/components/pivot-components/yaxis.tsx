import { createStyles, FilledInput, FormControl, InputLabel, Select, Typography, WithStyles, withStyles } from '@material-ui/core';
import * as React from 'react';
import Scrollbars from 'react-custom-scrollbars';
import { IConceptsMenuViewModel } from '../../viewmodels/concepts-menu-viewmodel';

const styles = () => createStyles({
    formControl: {
        margin: 1,
        maxWidth:200,
        minWidth:120,        
    },
    root: {
        display: 'flex',
        flexDirection:'column',
        flexWrap: 'wrap',        
        height:500,
        overflowX:'auto',
        overflowY:'hidden'
    },
    selectEmpty: {
        marginTop:2,
    },
});

interface IYAxisProps {
    yCollection: IConceptsMenuViewModel[];
}

type IYaxisPropsWithStyles = IYAxisProps & WithStyles<'root' | 'formControl' | 'selectEmpty'>

class YAxis extends React.Component<IYaxisPropsWithStyles,{}> {

        constructor(props:IYaxisPropsWithStyles) {
            super(props);
        }

        public render() {
            return(
                <div className={this.props.classes.root}>
                <Scrollbars>
                {
                        (this.props.yCollection!==null && this.props.yCollection!==undefined) &&
                        this.props.yCollection.map(p=>
                            <FormControl key={p.key} variant="filled" className={this.props.classes.formControl}>
                                <InputLabel
                                    htmlFor={p.key}>
                                    <Typography variant="caption" color="inherit" >
                                        {p.displayName}
                                    </Typography>                                    
                                </InputLabel>
                                <Select
                                    native={true}
                                    input={<FilledInput name="age" id={p.key} />}
                                >
                                    <option value="" />
                                    {
                                        (p.collection!==null && p.collection!==undefined) && p.collection.map(q=><option key={q._id} value={q._id}>                                            
                                                {q.name}
                                        </option>)
                                    }
                                </Select>
                            </FormControl>
                        )
                }
                </Scrollbars>
            </div>
            );
        }
}

export default withStyles(styles)(YAxis);