import React from 'react';
import axios from 'axios';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { URL_GLOBAL } from '../../../constants/constants'

class UbicacionSelects extends React.Component {
  state = {
    ubicacion_archivo: '',
    ubicacion_archivos: [],
  };

  componentDidMount() {
    this.getUbicaciones();

  }

  getUbicaciones() {
    axios
      .get(`${URL_GLOBAL}/api/ubicaciones/`)
      .then(res => {
        this.setState({ ubicacion_archivos: res.data.ubicacion_archivos });
      })
      .catch(err => {
        this.setState({ error: err });
      });
  }


  handleChange = name => event => {
    this.setState({[name]: event.target.value});
  };

  render() {
    let { ubicacion_archivos } = this.state
    const { parentUbicacion, ubicacion_archivo } = this.props;
    return (
      <div className="row">
        <div className="p-3 col-md-12 col-12">
          <FormControl className="w-100 mb-2">
            <InputLabel htmlFor="ubicacion_archivo">Ubicacion Archivo</InputLabel>
            <Select
              native
              value={ubicacion_archivo}
              onChange={e => parentUbicacion(e.target.value)}
              input={<Input id="ubicacion_archivo"/>}
            >
              <option value=""></option>
              {ubicacion_archivos.map(ubicacion_archivo => 
              <option key={ubicacion_archivo.id} value={ubicacion_archivo.id}>{ubicacion_archivo.nombre}</option>
              )}
            </Select>
          </FormControl>
        </div>
      </div>
    );
  }
}

export default UbicacionSelects;