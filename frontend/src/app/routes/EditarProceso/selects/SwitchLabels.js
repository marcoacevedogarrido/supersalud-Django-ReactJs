import React, {Component} from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

class SwitchLabels extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      checkedA: false,
      checkedB: false,
      checkedC: false,
      checkedD: false,
    };
  }

  
  
  

  render() {
    const {parentCallbackSeparar } = this.props;
    // const {parentCallbackSeparar, parentCallbackClasificar , parentCallbackExtraer, parentCallbackEntidad,  separar, clasificar, extraer, entidad} = this.props;
    return (
      <div>
        
        <FormControlLabel
          control={
            <Switch color="primary"
                    classes={{
                      checked: 'text-primary',
                      bar: 'bg-primary',
                    }}
                    checked={this.state.checkedA}
                    onChange={(event, checked) => {
                      this.setState({checkedA: checked});
                      parentCallbackSeparar(this.state.checkedA)
                    }}
            />
          }
          label="Separar/Clasificar"
        />
        <FormControlLabel
          control={
            <Switch color="primary"
                      classes={{
                        checked: 'text-primary',
                        bar: 'bg-primary',
                      }}
              checked={this.state.checkedB}
              onChange={(event, checked) => this.setState({checkedB: checked})}
            />
          }
          label="Clasificar"
        />
        <FormControlLabel
          control={
            <Switch color="primary"
                    classes={{
                    checked: 'text-primary',
                      bar: 'bg-primary',
                    }}
              checked={this.state.checkedC}
              onChange={(event, checked) => this.setState({checkedC: checked})}
            />
          }
          label="Extraer"
        />
        <FormControlLabel
          control={
            <Switch color="primary"
                    classes={{
                      checked: 'text-primary',
                      bar: 'bg-primary',
                    }}
              checked={this.state.checkedD}
              onChange={(event, checked) => this.setState({checkedD: checked})}
            />
          }
          label="Entidad"
        />
      </div>
    );
  }
}

export default SwitchLabels;