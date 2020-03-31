import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'

import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom'

import Swal from 'sweetalert2';

import { useImmer } from "use-immer";
import produce from "immer"

import { URL_GLOBAL } from 'constants/constants'


import { connect, useSelector, useDispatch } from 'react-redux'
import { getEntities } from 'actions/Entidades/EntidadesActions'


const ListaEntidad = () => {

    const [entidades, setEntidades] = useState([])
    const [hola, setHola] = useState('xd')
    const [otra, setOtras] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)


    const last_process_id = useSelector(state => state.entities.last_process_id)

    useEffect(() => {


        axios
            .get(`${URL_GLOBAL}/api/proceso/entidades/${80}/`)
            .then(res => {
                setEntidades(res.data.tipoDoc_modelo)
                setOtras(res.data.tipoDoc_modelo)
                setLoading(false)
                setError(false)
            })
            .catch(err => {
                setError(true)
                setLoading(false)
            });


    }, [])


    // const handleChange = (event, id_entidad, entity_id) => {
    // const handleChange = (event, index, index_entity) => {

    //     let newObjectEntidad = {}
    //     let newObjectEntity = {}
    //     let checkValue = event.target.value


    //     console.log(index, index_entity)
    //     console.log(typeof(entidades[index].entidades_doc[index_entity].value))

    //     let newArray = [...otra]
    //     newArray[index].entidades_doc

    //     setOtras(newArray)


    // if(entidades[index].entidades_doc[index_entity].value == true){
    //     entidades[index].entidades_doc[index_entity].value = false
    //     setEntidades(entidades)

    // }else {
    //     entidades[index].entidades_doc[index_entity].value = true
    //     setEntidades(entidades)
    // }


    // entidades.map(entidad => {
    //     if (entidad.id !== id_entidad) return entidad
    //     newObjectEntidad = entidad

    //     entidad.entidades_doc.map(entity => {
    //         if (entity.id !== entity_id) return entity
    //         newObjectEntity = entity
    //     })

    // })
    // console.log(newObjectEntity)



    // }



    // setEntidades(entidades.map(entidad => {
    //     if(entidad.id !== id_entidad) return entidad
    //     entidad.map(entity_child => {
    //         if(entity_child.id !== entity_id) return entity_child
    //             return {...entity_child, value : checked}
    //     })
    // }))
    // }


    const handleChange = (e, index, index_entity) => {
        let checkIdChild = e.target.name
        let checkValue = e.target.checked
        let checkId = e.target.id


        setEntidades(prevState => {
            const entidades = [...prevState.entidades]
            const entidades_doc = [...entidades[index].entidades_doc]

            entidades_doc[index_entity] = { ...entidades_doc[index_entity], value : checkValue }
            entidades[index] = { ...entidades[index], entidades_doc }

            return { entidades }
        })

    }
    // if(checkValue){
    //     const newState = {
    //         ...entidades,
    //         entidades[index]
    //     }
    // } 





    // if(checkValue === 'true'){
    //     entidades[checkId].properties[checkIdChild].value = false
    //     this.setState({
    //         entidades
    //     })

    // }else {
    //     entidades[checkId].properties[checkIdChild].value = true
    //     this.setState({
    //         entidades
    //     })
    // }











    const saveEntities = e => {
        e.preventDefault();



        axios.post(`http://localhost:8000/api/reglastest/`, this.state.entidades)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })




        // Swal.fire(
        //     'Agregadas!',
        //     `Entidades Guardadas Correctamente.`,
        //     'success',
        // )

        // this.props.history.push('listado-proceso')



    }


    return (
        <Fragment>
            {error ?
                <h1>Error...</h1>
                :
                loading ?
                    <h1>Cargando...</h1>
                    :

                    <Fragment>
                        <form onSubmit={saveEntities} className="row" noValidate autoComplete="off">
                            {entidades.map((entidad, index) => (
                                <div className="col-4">
                                    <div className="jr-card">
                                        <div className="row mb-md-3">
                                            <div className="col-12">
                                                <Fragment>
                                                    <div className="jr-card-header ">
                                                        <h3 className="mb-0">{entidad.nombre} </h3>
                                                    </div>
                                                    {entidad.entidades_doc.map((entity, index_entity) => (
                                                        <Fragment>


                                                            <FormControlLabel className="col-12"
                                                                control={
                                                                    <Checkbox color="primary"
                                                                        // onChange={(event) => handleChange(event, entidad.id, entity.id)}
                                                                        // onClick={(event) => handleChange(event, index, index_entity)}
                                                                        onClick={(event) => handleChange(event, index, index_entity)}

                                                                        name={index_entity}
                                                                        checked={entity.value }
                                                                        value={entity.value}
                                                                    />
                                                                }
                                                                key={entity.nombre}
                                                                label={entity.nombre}

                                                            />
                                                            
                                                        </Fragment>

                                                    ))}
                                                </Fragment>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ))}



                            <div className="p-3 col-md-12 col-12">

                                <Button type="submit" variant="contained" color="primary"
                                    className="jr-btn jr-btn-lg">
                                    Guardar Entidades
                            </Button>

                            </div>
                        </form>

                    </Fragment>
            }

        </Fragment>
    )
}


export default connect()(ListaEntidad)
