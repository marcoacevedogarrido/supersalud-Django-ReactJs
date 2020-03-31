import React, { useEffect } from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import TablaUsuario from './Tabla/TablaUsuario'

import { connect, useSelector, useDispatch } from 'react-redux'
import { getUsuarios } from '../../../actions/Usuarios/UsuariosActions'


const AdministrarUsuario = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        const getUsuariosApi = () => dispatch(getUsuarios())
        getUsuariosApi()
    }, [])

    const usuarios = useSelector(state => state.usuarios.usuarios)

    return (
        <div className="col-12 ">
            <div className="jr-card">
                <div className="jr-btn-group d-flex flex-row-reverse ">
                    <Link to="/app/administrar/crear-usuario" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" className="jr-btn jr-btn-lg bg-red lighten-1 text-white">
                            <i className="zmdi zmdi-account-add" />
                            <span>Agregar Usuario</span>
                        </Button>
                    </Link>
                    <Button variant="contained" className="jr-btn jr-btn-lg bg-indigo lighten-1 text-white">
                        <i className="zmdi zmdi-accounts-add" />
                        <span>Crear Grupo</span>
                    </Button>
                </div>
                <TablaUsuario
                    usuarios={usuarios}
                />
                
            </div>
            {/* <AsignarUsuario
            usuarios={usuarios}
            /> */}
        </div>
    )
}

export default connect()(AdministrarUsuario)