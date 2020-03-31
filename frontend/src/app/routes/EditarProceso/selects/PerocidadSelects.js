import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class PerocidadSelects extends React.Component {
  state = {
    periocidad: '',
  };

  handleChange = name => event => {
    this.setState({[name]: event.target.value});
  };

  render() {
    const {parentCallbackPeriocidad, periocidad} = this.props;
    return (
      <div className="row">
        <div className="p-3 col-md-12 col-12">
          <FormControl className="w-100 mb-2">
            <InputLabel htmlFor="periocidad">Periocidad</InputLabel>
            <Select
              native
              value={periocidad}
              onChange={e => parentCallbackPeriocidad(e.target.value)}
              input={<Input id="periocidad"/>}
            >
              <option value={0}>Nunca</option>
              <option value={3600}>Cada Hora</option>
              <option value={86400}>Diariamente</option>
              <option value={604800}>Semanalmente</option>
              <option value={1209600}>Cada dos semanas</option>
              <option value={2419200}>Mensualmente</option>
            </Select>
          </FormControl>
        </div>
      </div>
    );
  }
}

export default PerocidadSelects;