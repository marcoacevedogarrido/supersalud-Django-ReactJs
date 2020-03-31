import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

import Grid from '@material-ui/core/Grid';


function SimpleList({keyName}) {
  return (
      <Grid item className="col-xs-12 col-sm-12">
        <div className="p-0">
          <List dense>
              <ListItem button>
                <ListItemAvatar>
                  <Avatar>
                    <i className="zmdi zmdi-folder zmdi-hc-fw zmdi-hc-lg text-white" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={keyName}
                  secondary
                />
              </ListItem>
           
          </List>
        </div>
      </Grid>
  );
}

export default SimpleList;