import React, {Component, Fragment} from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Tooltip from '@material-ui/core/Tooltip';

class TipoProgramacion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tipo_programacion : false,
      showProgra:false,
      programacion_manual: true,
    };
  }

  changeFalse = () => {
    if(this.state.programacion_manual === false){
      this.setState({ 
          tipo_programacion: false,
          showProgra: true 
      })
    }
    else if (this.state.programacion_manual === true) {
        this.setState({
          tipo_programacion: true,
          showProgra: false
      })
    }
  }

  changeTrue = () => {
    if(this.state.tipo_programacion === true){
      this.setState({ 
          programacion_manual: true,
          showProgra: false 
      })
    }
    else if (this.state.tipo_programacion === false) {
        this.setState({
          programacion_manual: false,
          showProgra: true
      })
    }
  }

  render() {
    const { parentProgra } = this.props;
    return (
      <Fragment>
        <FormControlLabel
          control={
            <Switch color="primary"
                 checked={this.state.programacion_manual}
                      value={this.state.programacion_manual}
                      onChange={(event, checked) => {                    
                      this.setState({programacion_manual: checked});
                      parentProgra(this.state.tipo_programacion)
                      this.changeFalse()
                    }}     
            />
          }
          label="Manual"
        />
        <FormControlLabel
          control={
            <Tooltip title="Al seleccionar esta opción tendrá que definir
            hora, fecha y periocidad"
            placement="right" arrow>

            <Switch color="primary"
                    checked={this.state.tipo_programacion}
                      value={this.state.tipo_programacion}
                      onChange={(event, checked) => {
                      this.setState({tipo_programacion: checked});
                      parentProgra(this.state.tipo_programacion)
                      this.changeTrue()
                      
                      
                    }}
            />
            </Tooltip>
          }
          label="Automática"
        />
        
      </Fragment>
    );
  }
}

export default TipoProgramacion;