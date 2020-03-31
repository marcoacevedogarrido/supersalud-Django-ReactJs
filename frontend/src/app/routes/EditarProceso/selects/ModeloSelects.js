import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import axios from 'axios';

class ModeloSelects extends React.Component {
  state = {
    modelo: '',
    modelos: [],
  };

  handleChange = name => event => {
    this.setState({[name]: event.target.value});
  };

 
  // componentDidMount(){
  //   this.getModelos();
  // }

  // getModelos() {

  //   axios
  //     .get("http://127.0.0.1:8000/api/modelos")
  //     .then(res =>{
  //       console.log(res);
  //       this.setState({ data: res.data });
  //     })
  //     .catch(err => {
  //       this.setState({error: err });
  //     });
  // }
  
  render() {
    const {parentCallbackModelo, modelo} = this.props;

    return (
      <div className="row">
        <div className="p-3 col-md-12 col-12">
          <FormControl className="w-100 mb-2">
            <InputLabel htmlFor="modelo">Modelos</InputLabel>
            <Select
              native
              value={modelo}
              onChange={e => parentCallbackModelo(e.target.value)}
              input={<Input id="modelo"/>}
            >
              <option value=""/>
              <option value={1}>Recursos Humanos</option>
              <option value={2}>Amicar</option>
            </Select>
          </FormControl>
        </div>
      </div>
    );
  }
}

export default ModeloSelects;