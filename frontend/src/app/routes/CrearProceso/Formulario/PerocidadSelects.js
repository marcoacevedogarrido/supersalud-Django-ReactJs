import React, {Fragment} from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const PerocidadSelects = ({parentCallbackPeriocidad, periocidad}) => {
    return (
      
        <Fragment>
          <FormControl 
          className="w-100 mb-3"
          
          >
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
          </Fragment>
    );
  }
  
export default PerocidadSelects;