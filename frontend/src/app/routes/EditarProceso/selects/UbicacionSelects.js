import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class UbicacionSelects extends React.Component {
  state = {
    ubicacion_archivo: '',
  };

  handleChange = name => event => {
    this.setState({[name]: event.target.value});
  };

  render() {
    const {parentCallbackUbicacion, ubicacion_archivo} = this.props;
    return (
      <div className="row">
        <div className="p-3 col-md-12 col-12">
          <FormControl className="w-100 mb-2">
            <InputLabel htmlFor="ubicacion_archivo">Ubicación Archivos</InputLabel>
            <Select
              native
              value={ubicacion_archivo}
              onChange={e => parentCallbackUbicacion(e.target.value)}
              input={<Input id="ubicacion_archivo"/>}
            >
              <option value=""/>
              <option value={1}>Bucket S3</option>
              <option value={2}>Media</option>
              <option value={3}>SAP</option>
            </Select>
          </FormControl>
        </div>
      </div>
    );
  }
}

export default UbicacionSelects;