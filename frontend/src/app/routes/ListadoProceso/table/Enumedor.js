import React, { Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 55,
    minHeight:3
    
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Enumerador() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    enumerador: '',
    name: '',
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <Fragment>
        <div className="row ">
          <div className="align-self-center">
          <label>
              Mostrar
          </label>
          </div>
        
       
      <FormControl variant="outlined" className={classes.formControl}>
         
        <InputLabel ref={inputLabel} htmlFor="outlined-enumerador-native-simple">
          
        </InputLabel>
        <Select
          native
          value={state.enumerador}
          onChange={handleChange('enumerador')}
          labelWidth={labelWidth}
          inputProps={{
            name: 'enumerador',
            id: 'outlined-enumerador-native-simple',
          }}
        >
          <option value={10}>5</option>
          <option value={20}>10</option>
          <option value={30}>15</option>
          <option value={30}>All</option>
        </Select>
      </FormControl>
     </div>
      
    </Fragment>
  );
}