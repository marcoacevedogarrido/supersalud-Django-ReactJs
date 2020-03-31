import React, {Component, Fragment} from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Tooltip from '@material-ui/core/Tooltip';

class TipoProgramacion extends Component {

    state = {
      tipo_programacion : true,
    }
  render() {
    return (
      <Fragment>
        <FormControlLabel
          control={
            <Switch color="primary" 
            disabled/>
          }
          label="Manual"
        />
        <FormControlLabel
          control={
            <Tooltip title="Al seleccionar esta opción tendrá que definir
            hora, fecha y periocidad"
            placement="right" arrow>

            <Switch color="primary"checked/>
            </Tooltip>
          }
          label="Automática"
        />
        
      </Fragment>
    );
  }
}

export default TipoProgramacion;