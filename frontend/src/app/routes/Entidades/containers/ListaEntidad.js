import React, { useState, useEffect, Fragment, Component } from 'react'
import axios from 'axios'

import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link, Redirect } from 'react-router-dom'

import Swal from 'sweetalert2';

import Spinner from 'constants/Spinner/Spinner'

import { URL_GLOBAL } from 'constants/constants'


import { connect, useSelector, useDispatch } from 'react-redux'
import { getEntities } from 'actions/Entidades/EntidadesActions'


class ListaEntidad extends Component {

    state = {
        entidades: [],
        loading: true,
        error: null,
        redirect: false,
        time_out: null,
        id_proceso: ''

    }


    componentDidMount() {
        setTimeout(
            function () {
                if (this.state.loading) {
                    this.setState({
                        time_out: true
                    })
                } else {
                    this.setState({
                        time_out: false
                    })
                }

            }
                .bind(this),
            5000
        );

    }

    consultarApi = (id) => {
        this.setState({ ...this.state, id_proceso: id })
        axios
            .get(`${URL_GLOBAL}/api/proceso/entidades/${id}/`)
            .then(res => {
                this.setState({
                    entidades: res.data.tipoDoc_modelo,
                    loading: false,
                    error: false,
                })
            })
            .catch(err => {
                this.setState({
                    loading: false,
                    error: false,
                    redirect: false
                })
            });
    }



    componentDidUpdate(previousProps, previousState) {
        const { last_process_id } = this.props.entities
        if (previousProps.entities.last_process_id !== this.props.entities.last_process_id) {
            this.consultarApi(last_process_id)
            console.log("pase")
        } else {
            console.log("no pase")
        }


    }


    handleChange = (e, index, index_entity) => {

        let checkValue = e.target.value

        const { entidades } = this.state


        if (checkValue === 'true') {
            entidades[index].entidades_doc[index_entity].value = false
            this.setState({
                ...this.state,
                entidades,

            })

        } else {
            entidades[index].entidades_doc[index_entity].value = true
            this.setState({
                ...this.state,
                entidades
            })
        }

    }

    saveEntities = e => {
        e.preventDefault();
        const { id_proceso } = this.state
        axios.post(`${URL_GLOBAL}/api/reglas/proceso/${id_proceso}/`, this.state.entidades)
            .then(res => {
                Swal.fire(
                    'Exito!',
                    'Reglas creadas exitosamente',
                    'success'
                )

                this.setState({
                    ...this.state,
                    redirect: true
                })
            }).catch(error => {
                console.log(error)
            })

    }


    render() {

        const { entidades, error, loading, time_out } = this.state


        if (this.state.redirect) {
            return <Redirect to='/app/listado-proceso' />
        }

        if (error) {
            return (
                <div className="col d-flex justify-content-center">
                    <h2>Hubo un problema al cargar las entidades</h2>
                </div>
            )
        }

        if (time_out) {
            return (
                <div className="col d-flex justify-content-center">
                    <h2>Se agotó el tiempo de espera</h2>
                </div>
            )
        }




        return (
            <Fragment>
                {loading ?
                    <div className="col d-flex justify-content-center">
                        <Spinner />
                    </div>
                    :
                    <Fragment>
                        <form onSubmit={this.saveEntities} className="row" noValidate autoComplete="off">
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
                                                                        onClick={(event) => this.handleChange(event, index, index_entity)}
                                                                        name={index_entity}
                                                                        checked={entity.value}
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
}



const mapStateToProps = state => ({
    entities: state.entities
})


export default connect(mapStateToProps, { getEntities })(ListaEntidad)
