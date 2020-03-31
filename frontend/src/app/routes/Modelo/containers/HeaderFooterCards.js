import React, { Fragment } from 'react';
import { Card, CardBody, CardFooter, CardHeader, CardSubtitle, CardText } from 'reactstrap';

import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';

import SimpleList from './SimpleList'
import CheckBoxListControl from './CheckBoxListControl'
import { ListItemText } from '@material-ui/core';



const HeaderFooterCards = ({ cardHeader, cardStyle, modelo }) => {

  return (
    <Fragment>
    <Card className={`shadow border-0 ${cardStyle}`}>
      <CardHeader className="bg-primary text-white"></CardHeader>
          <CheckBoxListControl/>
      <div className="d-flex">
        <div className="col-9 ">
          <h4 className="text-left">Matriz de Confusión</h4>
        </div>
        <div className="col-3 d-flex">
        <Button variant="contained" className="jr-btn bg-pink text-white">
          <i className="zmdi zmdi-spinner zmdi-hc-fw"/>
          <span>Spinner</span>
        </Button>
        </div>
      </div>
    </Card>
    
    </Fragment>
  );
};
export default HeaderFooterCards;