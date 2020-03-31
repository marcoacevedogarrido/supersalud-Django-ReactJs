import React, { Component, Fragment } from "react";
import List from "@material-ui/core/List";

import { Badge } from "reactstrap";


class CheckBoxListControl extends Component {
  render() {
    return (
      <List>
          <Fragment>
            <div className="">
              <Badge className="mr-4 mt-2 text-uppercase" color="success" pill>Agent</Badge>
            </div>
          </Fragment>
      </List>
    );
  }
}

export default CheckBoxListControl;