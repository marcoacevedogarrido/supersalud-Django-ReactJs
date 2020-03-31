import React from 'react';
import {Alert} from 'reactstrap';

const DefaultAlerts = () => {
  return (

      <div className="col-lg-12 col-12">
        <Alert className="shadow-lg" color="secondary">
          This is a secondary alert — check it out!
        </Alert>
      </div>

  );
};

export default DefaultAlerts;