import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Icon from '@mdi/react'
import { mdiPencil, mdiDeleteOutline, mdiFileExport } from '@mdi/js'
import Button from '@material-ui/core/Button';
import Swal from 'sweetalert2';


// AXIOS
import axios from 'axios';
import { connect } from 'react-redux';
import { deleteProceso } from '../../../../actions/procesosActions';
import { loadUser } from '../../../../actions/Auth/Auth';

import { URL_GLOBAL } from 'constants/constants'


class Proceso extends Component {
    csvLink = React.createRef()

    confirmDelete = () => {

        const { is_staff } = this.props.auth

        if (is_staff) {
            Swal.fire({
                title: 'Estás seguro?',
                text: "Esta acción no se puede deshacer!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#f44336',
                cancelButtonColor: '#2196F3',
                confirmButtonText: 'Si, borrar!',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.value) {
                    this.deleteProceso()
                    Swal.fire(
                        'Eliminado!',
                        'El proceso ha sido eliminado.',
                        'success'
                    )
                }
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No tienes permiso para realizar esta acción!',

            })
        }
    }

    deleteProceso = () => {
        const { id } = this.props.proceso;
        this.props.deleteProceso(id);
    }

    error = () => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No es posible editar un proceso manual',

        })
    }

    setSubmitted = id => {
        axios.post(`${URL_GLOBAL}/api/proceso/manual/${id}`)
    }


    downloadCsv = id => {
        window.open(`${URL_GLOBAL}/api/proceso/csv/${id}/`)
    }

    render() {
        const { id, user, nombre, modelo, fecha_creacion, estado, tipo_programacion } = this.props.proceso;
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };

        return (
            <Fragment>
                <tr>
                    <td>{nombre}</td>
                    <td>{user}</td>
                    <td>
                        {tipo_programacion ?
                            <span>
                                <Link to={`editar-proceso/${id}`}>
                                    <Icon
                                        path={mdiPencil}
                                        size={0.9}
                                        color="	#505050"
                                    />
                                </Link>
                            </span>

                            :
                            <span>

                                <Icon
                                    onClick={this.error}
                                    path={mdiPencil}
                                    size={0.9}
                                    color="	#505050"
                                />
                            </span>
                        }

                        <span >
                            <Icon onClick={this.confirmDelete} path={mdiDeleteOutline}
                                size={0.9}
                                color="#505050"
                            />
                        </span>
                        <span>
                            <Icon onClick={(e) => this.downloadCsv(id)} path={mdiFileExport}
                                size={0.9}
                                color="#505050"
                            />

                        </span>
                    </td>
                    <td>{modelo}</td>
                    <td>{(new Date(fecha_creacion)).toLocaleDateString('es-CL', options)}</td>
                    <td className="status-cell text-left">
                        <div className={
                            estado === "En cola" ? "badge text-uppercase text-white bg-danger" :
                                estado === "Por procesar" ? "badge text-uppercase text-white bg-porProcesar" :
                                    estado === "Clasificado" ? "badge text-uppercase text-white bg-light-green" :
                                        estado === "Finalizado" ? "badge text-uppercase text-white bg-finalizado" :
                                            estado === "Error en el Proceso" ? "badge text-uppercase text-white bg-danger"
                                                : "badge text-uppercase text-white bg-grey"}>

                            {estado}
                        </div>
                    </td>
                    <td>
                        {estado === "Finalizado" ?
                            <Link to={`detalle-proceso/${id}`} style={{ textDecoration: 'none' }}>
                                <Button variant="contained" className="jr-btn">Ver</Button>
                            </Link>
                            :
                            estado === "Clasificado" ?
                                <Link to={`detalle-proceso/${id}`} style={{ textDecoration: 'none' }}>
                                    <Button variant="contained" className="jr-btn">Ver</Button>
                                </Link>
                                :
                                estado === "Procesando" ?
                                    <Link to={`detalle-proceso/${id}`} style={{ textDecoration: 'none' }}>
                                        <Button variant="contained" className="jr-btn">Ver</Button>
                                    </Link>
                                    :

                                    <Button variant="contained" className="jr-btn" disabled>Ver</Button>
                        }
                    </td>
                    <td>
                        {estado === "Por procesar" ?
                            <Button type='submit' onClick={(e) => this.setSubmitted(id)} variant="contained" className="jr-btn bg-newcolor text-white">
                                Procesar
                            </Button>
                            :
                            <Button variant="contained" className="jr-btn  text-white" disabled>
                                Procesar
                            </Button>
                        }
                    </td>

                </tr>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth.user
})


export default connect(mapStateToProps, { loadUser, deleteProceso })(Proceso);
