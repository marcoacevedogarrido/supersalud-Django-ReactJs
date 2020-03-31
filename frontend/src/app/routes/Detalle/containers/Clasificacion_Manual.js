import React, { Component, Fragment, useState, useEffect } from 'react'

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import { Alert } from 'reactstrap';

import axios from 'axios'
import Swal from 'sweetalert2';

import { URL_GLOBAL } from '../../../../constants/constants'


const Clasificacion_Manual = (
    {
        id, id_documento, changeClasification, doc_default, clasificacion_manual,
        reloadComponent
    }) => {

    const [dataClasificacion, setClasificacion] = useState({
        opcionesForm: [],
        clasificacion_selected: '',
        reload: false,
    })

    const [error, setError] = useState(false)
    const [errorSelectSinClasificar, setErrorSin] = useState(false)


    useEffect(() => {
        getDocumentosFilter()
    }, [])


    const selectKey = (key) => {
        setClasificacion({
            ...dataClasificacion,
            clasificacion_selected: key
        })

        changeClasification(key)
    }

    // Llenar los radiobuttons
    const getDocumentosFilter = () => {
        axios
            .get(`${URL_GLOBAL}/api/tipo-doc/counts/${id}/`)
            .then(res => {
                setClasificacion({
                    ...dataClasificacion,
                    opcionesForm: res.data
                })
            })
            .catch(err => {
                console.log(error)
            });
    }


    const updateDocument = () => {
        axios
            .post(`${URL_GLOBAL}/api/update/documento/${id_documento}/`, {

                tipo_doc: dataClasificacion.clasificacion_selected
            })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log({ error: err });
            });
    }

    const updateType = e => {
        e.preventDefault()

        let { clasificacion_selected } = dataClasificacion

        if (doc_default !== 'Sin-Clasificar' && doc_default !== 'Otros') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No puede actualizar un documento ya clasificado!',
            })
            return

        } else if (clasificacion_selected === '' || doc_default === '') {
            setError(true)
            return;
        } else if (clasificacion_selected === 'Sin-Clasificar') {
            setErrorSin(true)
            return
        }

        setErrorSin(false)
        setError(false)

        updateDocument()

        reloadComponent(true)

        setClasificacion({
            ...dataClasificacion,
            clasificacion_selected: ''
        })
    }



    const { opcionesForm } = dataClasificacion
    return (
        <Fragment>
            <form onSubmit={updateType} className="align-items-xl-end" noValidate autoComplete="off">
                <FormControl component="fieldset" required>
                    <RadioGroup
                        value={clasificacion_manual}
                    >
                        {Object.keys(opcionesForm).map((key) => {
                            return (
                                <FormControlLabel value={key} control={
                                    <Radio color="bg-blue"
                                    />}
                                    key={key}
                                    onClick={() => selectKey(key)}
                                    label={key}
                                />
                            )
                        })}
                    </RadioGroup>
                </FormControl>
                <hr />
                <div className="mt-auto">
                    <Tooltip
                        title="Deberá definir la hora de reentreno del modelo"
                        placement="bottom" arrow>
                        <Button type="submit" variant="contained"
                            className="jr-btn jr-btn-lg bg-newcolor3  lighten-1 text-white">
                            <i className="zmdi zmdi-refresh-alt zmdi-hc-fw" />
                            <span>Actualizar</span>
                        </Button>
                    </Tooltip>
                    {error ?
                        (<div className="p-3 col-md-12 col-12">
                            <Alert className="shadow-lg" color="secondary">
                                No ha seleccionado ninguna opción!
                             </Alert>
                        </div>) : null}
                    {errorSelectSinClasificar ?
                        (<div className="p-3 col-md-12 col-12">
                            <Alert className="shadow-lg" color="secondary">
                                Seleccione una opción válida
                             </Alert>
                        </div>) : null}
                </div>
            </form>
        </Fragment>

    )
}

export default (Clasificacion_Manual)
