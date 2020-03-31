import React from 'react';
import axios from 'axios';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


import {URL_GLOBAL} from '../../../../constants/constants'


class DestinoSelects extends React.Component {
  state = {
    destino_archivo: '',
    destino_archivos: []
  };

  componentDidMount() {
    this.getDestinos();

  }

  getDestinos() {
    axios
      .get(`${URL_GLOBAL}/api/destinos/`)
      .then(res => {
        this.setState({ destino_archivos: res.data.destino_archivos });
      })
      .catch(err => {
        this.setState({ error: err });
      });
  }

  handleChange = name => event => {
    this.setState({[name]: event.target.value});
  };

  render() {
    let { destino_archivos } = this.state
    const { parentDestino, destino_archivo} = this.props
    return (
      <div className="row">
        <div className="p-3 col-md-12 col-12">
          <FormControl className="w-100 mb-2">
            <InputLabel htmlFor="destino_archivo">Destino Archivo</InputLabel>
            <Select
              native
              value={destino_archivo}
              onChange={e => parentDestino(e.target.value)}
              input={<Input id="destino_archivo"/>}
            >
              <option value=""></option>
              {destino_archivos.map(destino_archivo => 
              <option key={destino_archivo.id} value={destino_archivo.id}>{destino_archivo.nombre}</option>
              )}
            </Select>
          </FormControl>
        </div>
      </div>
    );
  }
}

export default DestinoSelects;