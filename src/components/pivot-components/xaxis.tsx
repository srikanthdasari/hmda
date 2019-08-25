import { createStyles, FormControl, InputLabel, Select, Typography, WithStyles, withStyles } from '@material-ui/core';
import FilledInput from '@material-ui/core/FilledInput'
import * as React from 'react';
import Scrollbars from 'react-custom-scrollbars';
import { IConceptsMenuViewModel } from 'src/viewmodels/concepts-menu-viewmodel';
const styles = () => createStyles({
    formControl: {
        margin: 1,
        maxWidth:200,
        minWidth:120,        
    },
    root: {
        display: 'flex',
        flexDirection:'row',
        flexWrap: 'wrap',        
        height:55,
        overflowX:'hidden',
        overflowY:'auto'
    },
    selectEmpty: {
        marginTop:2,
    },
});

interface IXAxisProps {
    xCollection:IConceptsMenuViewModel[];
}

type IXAxisPropsWithStyles = IXAxisProps & WithStyles<'root' | 'formControl' | 'selectEmpty'>;

class XAxis extends React.Component<IXAxisPropsWithStyles> {

    constructor(props:IXAxisPropsWithStyles) {
        super(props);
    }

    public render() {
        return (
            <div className={this.props.classes.root}>
                <Scrollbars>
                {
                        (this.props.xCollection!==null && this.props.xCollection!==undefined) &&
                        this.props.xCollection.map(p=>
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
        )
    }
}


export default withStyles(styles)(XAxis);