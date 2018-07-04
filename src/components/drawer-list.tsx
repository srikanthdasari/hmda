import { ListItem,ListItemIcon, ListItemText, } from "@material-ui/core";
import DraftsIcon from '@material-ui/icons/Drafts';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SendIcon from '@material-ui/icons/Send';
import StarIcon from '@material-ui/icons/Star';
import * as React from "react";


export const MenuListItems = (
    <div>
      <ListItem button={true}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
      </ListItem>
      <ListItem button={true}>
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText primary="Starred" />
      </ListItem>
      <ListItem button={true}>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Send mail" />
      </ListItem>
      <ListItem button={true}>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItem>
    </div>
  );