import { Menu, MenuItem } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { StyleRules, withStyles, WithStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import * as _ from "lodash";
import * as React from 'react';
import SessionStateConstants from 'src/constants/session-state-constants';
import { FixConcepts } from 'src/core-lib/FixConcepts';
import { MetadataReader } from 'src/core-lib/MetadataReader';
import { IConceptsMenuViewModel } from 'src/viewmodels/concepts-menu-viewmodel';
import { IMetadata } from 'src/viewmodels/metadata';

const styles:StyleRules<'root'> = ({
    root: {
        margin:2,
        minWidth:0        
    },
});


interface IAddItemState {
    IsOpen : boolean;
    anchorEl:any;
    metadata :IMetadata;
}

interface IAddItemProps {
    getConceptSelection:(obj:IConceptsMenuViewModel) => void;
    xCollection:IConceptsMenuViewModel[];
    yCollection: IConceptsMenuViewModel[];
}

class AddItem extends React.Component<WithStyles<'root'> & IAddItemProps,IAddItemState> {

    constructor(props:WithStyles<'root'> & IAddItemProps) {
        super(props);
        this.state = {
            IsOpen:false,
            anchorEl:null,
            metadata: {} as IMetadata
        };
        this.onClickHandler=this.onClickHandler.bind(this);
        this.OnHandleClose=this.OnHandleClose.bind(this);    
        this.onHandleMenuItemClick=this.onHandleMenuItemClick.bind(this); 
    }

    public componentDidMount() {
        let data = MetadataReader.readMetadata();
        data.fips=FixConcepts.FixFips(data.fips,localStorage.getItem(SessionStateConstants.SESSION_USSTATE));
        this.setState({metadata:data});
    }

    public onClickHandler(e:React.MouseEvent<HTMLButtonElement>) {
        this.setState({IsOpen:!this.state.IsOpen});
        this.setState({anchorEl:e.currentTarget});        
    }

    public OnHandleClose() {
        this.setState({anchorEl:null, IsOpen:false});
    }

    // tslint:disable-next-line:variable-name
    public onHandleMenuItemClick = (item:IConceptsMenuViewModel) => (_e:React.MouseEvent<HTMLElement>)  => {
        if(_.isObject(item)) {
            this.setState({IsOpen:false})
            this.props.getConceptSelection(item)
        }
    }
    
    public render() {
        const selectedItems = _.unionWith(this.props.xCollection,this.props.yCollection,_.isEqual);
        const conceptsArray = _.differenceWith(_.map(this.state.metadata, (obj)=> (obj)),selectedItems,_.isEqual);
        return (
            <div>
                <Button onClick={this.onClickHandler} size="small" mini={true} variant="fab" color="primary" aria-label="Add"  
                        className={this.props.classes.root}>
                    <AddIcon />
                </Button>

                <Menu open={this.state.IsOpen}
                        anchorEl={this.state.anchorEl}
                        anchorOrigin={{
                            horizontal:'right',
                            vertical: 'top'
                        }}
                        transformOrigin={{
                            horizontal:'right',
                            vertical:'top'
                        }}
                        onClose={this.OnHandleClose}
                >
                    {
                        (conceptsArray!==null && conceptsArray!==undefined)
                        ? conceptsArray.map(p=><MenuItem id={p.key} key={p.key} onClick={this.onHandleMenuItemClick(p)}> {p.displayName} </MenuItem> )
                        : <MenuItem key="loading">Loading...</MenuItem>
                    }
                </Menu>
            </div>
        );
    }
    
}


export default withStyles(styles)(AddItem);