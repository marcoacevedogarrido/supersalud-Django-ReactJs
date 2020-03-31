import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

function Spinner() {
  return (
    <div className="manage-margin">
      <CircularProgress size={50}/>
    </div>
  );
}

export default Spinner;