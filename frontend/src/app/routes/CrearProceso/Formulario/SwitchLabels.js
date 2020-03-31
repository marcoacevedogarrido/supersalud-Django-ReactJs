import React, {useState, Fragment, useEffect} from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Tooltip from '@material-ui/core/Tooltip';

const SwitchLabels = ({getSwitchSelected }) => {

  const [switchProceso, setState] = useState({
      separar: false,
      clasificar: false,
      extraer: false,
      entidad: false,
  })


  const handleChange = name => event => {
    setState({ ...switchProceso, [name]: event.target.checked });

    // if(switchProceso.clasificar){
    //   setState({    
    //     ...extraer,
    //     ...entidad,
    //     separar: false
    //   })
    // }
  };

  useEffect(() => {
    if(switchProceso.entidad){
      console.log("pase")
      setState({
        ...switchProceso,
        entidad: true,
        extraer: true
      })
    }else{
      setState({
        ...switchProceso,
        entidad: false,

      })
    }
    if(switchProceso.separar){
      setState({
        ...switchProceso,
        separar: true,
        clasificar: false
      })
    }
    if(switchProceso.clasificar){
      setState({
        ...switchProceso,
        clasificar: true,
        separar: false,
        
      })
    }
  
    
  },[switchProceso.entidad, switchProceso.clasificar,
     switchProceso.extraer, switchProceso.separar])


  useEffect(() => {
    getSwitchSelected(switchProceso)
  },[switchProceso])


  const { separar, clasificar, extraer, entidad } = switchProceso

    return (

      <Fragment>
        <div className="col-12">
        <FormControlLabel
          control={
            <Tooltip title="Al seleccionar este proceso podrá
            separar los documentos que esten unidos en un mismo
            archivo, sólo puede separar documentos por hoja"
            placement="left" arrow>

            <Switch color="primary"
                      checked={separar}
                      value={separar}
                      onChange={handleChange('separar')}
            />
            </Tooltip>
          }
          label="Separar/Clasificar"
        />
        </div>
        <div className="col-12">
        <FormControlLabel
          control={
            <Switch color="primary"
                      checked={clasificar}
                      value={clasificar}
                      name="clasificar"
                      onChange={handleChange('clasificar')}
                      
              // onChange={(event, checked) => this.setState({checkedB: checked})}
            />
          }
          label="Clasificar"
        />
        </div>
        <div className="col-12">
        <FormControlLabel
          control={
            <Switch color="primary"
                    
                    checked={extraer}
                    value={extraer}
                    name="extraer"
                    onChange={handleChange('extraer')}

             
            />
          }
          label="Extraer/OCR"
        />
        </div>
        <div className="col-12">
        <FormControlLabel
          control={
             <Tooltip title="Al seleccionar este proceso deberá
            definir los metadatos correspondientes a cada tipo 
            de documento"
            placement="left" arrow>

            <Switch color="primary"
                    checked={entidad}
                    name="entidad"
                    value={entidad}
                    onChange={handleChange('entidad')}
              
            />
            </Tooltip>
          }
          label="Entidad"
        />
        </div>
      </Fragment>
    );
  }


export default SwitchLabels;