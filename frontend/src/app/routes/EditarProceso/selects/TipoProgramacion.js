import React from 'react';
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';

class TipoProgramacion extends React.Component {
  state = {
    programacion_manual: false,
  };

  handleChange = event => {
    this.setState({programacion_manual: event.target.value});
  };

  render() {
    return (
      <div className="row">
        <div className="p-3 col-md-12 col-12">
        <FormLabel component="legend">Tipo de Programación</FormLabel>
        <Radio color="primary" 
               checked={this.state.programacion_manual === 'a'}
               onChange={this.handleChange}
               value="a"
               name="radio button demo"
               aria-label="A"

        />
        <Radio color="primary"
               checked={this.state.programacion_manual === 'b'}
               onChange={this.handleChange}
               value="b"
               name="radio button demo"
               aria-label="B"
        />
      </div>
      </div>
    );
  }
}

export default TipoProgramacion;