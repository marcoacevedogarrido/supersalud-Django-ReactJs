import React, { useState, useEffect } from 'react'


import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// Redux 
import { connect, useSelector, useDispatch } from 'react-redux'
import { getModelos } from '../../../../actions/Modelos/modelosActions'


function ModeloSelect({ modelo, parentModelo }) {

    const dispatch = useDispatch()

    useEffect(() => {
        const getModelosApi = () => dispatch(getModelos())
        getModelosApi()
    }, [])

    const modelos = useSelector(state => state.modelos.modelos)
    const error = useSelector(state => state.modelos.error)

    return (
        <div className="row">
            <div className="p-3 col-md-12 col-12">
                <FormControl className="w-100 mb-2">
                    <InputLabel htmlFor="modelo">Modelos</InputLabel>
                    {error ?
                        <Select
                            native
                            value=''
                            input={<Input id="modelo" />}
                        >
                            <option value=""></option>
                                <option value=''>Error al obtener Modelos</option>
                          
                        </Select>
                        :
                        null
                    }
                    <Select
                        native
                        value={modelo}
                        onChange={e => parentModelo(e.target.value)}
                        input={<Input id="modelo" />}
                    >
                        <option value=""></option>
                        {modelos.map(modelo =>
                            <option key={modelo.id} value={modelo.id}>{modelo.nombre}</option>
                        )}
                    </Select>


                </FormControl>
            </div>
        </div>
    )
}

export default connect()(ModeloSelect)