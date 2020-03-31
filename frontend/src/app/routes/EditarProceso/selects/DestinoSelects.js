import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class DestinoSelects extends React.Component {
  state = {
    destino_archivo: '',
  };

  handleChange = name => event => {
    this.setState({[name]: event.target.value});
  };

  render() {
    const {parentCallbackDestino, destino_archivo} = this.props;
    return (
      <div className="row">
        <div className="p-3 col-md-12 col-12">
          <FormControl className="w-100 mb-2">
            <InputLabel htmlFor="destino_archivo">Destino Archivos</InputLabel>
            <Select
              native
              value={destino_archivo}
              onChange={e => parentCallbackDestino(e.target.value)}
              input={<Input id="destino_archivo"/>}
            >
              <option value=""/>
              <option value={1}>Apiux</option>
              <option value={2}>Docux</option>
            </Select>
          </FormControl>
        </div>
      </div>
    );
  }
}

export default DestinoSelects;