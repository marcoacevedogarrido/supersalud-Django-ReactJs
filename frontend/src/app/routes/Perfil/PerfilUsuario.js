import React, { Fragment, useState, useEffect } from 'react'
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';

import Spinner from '../../../constants/Spinner/Spinner'

import { connect, useSelector, useDispatch } from 'react-redux'
import { loadUser } from 'actions/Auth/Auth';
import { changePassActions } from 'actions/Perfil/PerfilActions';
import { Button } from '@material-ui/core';

import Swal from 'sweetalert2';


const PerfilUsuario = () => {


    const [form, setForm] = useState({
        newPass: '',
        repeatPass: '',
        olderPass: ''
    })

    const [error, setError] = useState(false)
    const [errorRepeat, setRepeat] = useState(false)

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    useEffect(() => {
        const { newPass, repeatPass } = form

        if (repeatPass !== newPass) {
            setRepeat(true)
        } else {
            setRepeat(false)
        }

    }, [form])



    const dispatch = useDispatch()

    useEffect(() => {
        const getUser = () => dispatch(loadUser())
        getUser()
    }, [])

    const usuario = useSelector(state => state.auth.user)

    // CAMBIAR PASS

    const handleSubmit = e => {

        e.preventDefault();

        const { newPass, olderPass, repeatPass } = form

        if (newPass === '' || olderPass === '' || repeatPass === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Rellene todos los campos',
            })
            return
        }

        if (newPass !== repeatPass) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Las Contraseñas no coinciden',
            })
            return
        }

        const formPass = {
            newPass,
            olderPass,
        }

        dispatch(changePassActions(formPass))

        setForm({
            newPass: '',
            olderPass: '',
            repeatPass: ''
        })
    }


    if (!usuario) {
        return (
            <div className="col d-flex justify-content-center">
                <Spinner />
            </div>
        );
    } else {

        const { email, first_name, is_staff, last_name, username } = usuario
        return (
            <div className="jr-card">
                <div className="row mb-md-3">

                    <div className="col-6">
                        Información Personal
                            <div className="col-md-12 col-12">
                            <TextField
                                id="outlined-error-helper-text"
                                label="Usuario"
                                defaultValue="Hello World"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                value={username}
                            />
                        </div>
                        <div className="col-md-12 col-12">
                            <TextField
                                id="outlined-error-helper-text"
                                label="Nombre"
                                defaultValue="Hello World"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                value={first_name}
                            />
                        </div>
                        <div className="col-md-12 col-12">
                            <TextField
                                id="outlined-error-helper-text"
                                label="Apellido"
                                defaultValue="Hello World"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                value={last_name}
                            />
                        </div>
                        <div className="col-md-12 col-12">
                            <TextField
                                id="outlined-error-helper-text"
                                label="Correo"
                                defaultValue="Hello World"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                value={email}
                            />
                        </div>

                    </div>

                    <div className="col-6">
                        <form onSubmit={handleSubmit} noValidate autoComplete="off">
                            Cambiar contraseña
                            <div className="col-md-12 col-12">
                                <TextField
                                    id="outlined-error-helper-text"
                                    label="Contraseña Anterior"
                                    name="olderPass"
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    type='password'
                                    onChange={handleChange}
                                    value={form.olderPass}
                                />
                            </div>

                            <div className="col-md-12 col-12">
                                <TextField
                                    id="outlined-error-helper-text"
                                    label="Nueva Contraseña"
                                    variant="outlined"
                                    name="newPass"
                                    margin="normal"
                                    fullWidth
                                    type='password'
                                    onChange={handleChange}
                                    value={form.newPass}
                                />
                            </div>
                            <div className="col-md-12 col-12">
                                <TextField
                                    id="outlined-error-helper-text"
                                    label="Repetir Contraseña"
                                    variant="outlined"
                                    name="repeatPass"
                                    margin="normal"
                                    fullWidth
                                    type='password'
                                    error={errorRepeat}
                                    onChange={handleChange}
                                    value={form.repeatPass}
                                />
                            </div>
                            <div className="col-md-12 col-12">

                                <div className="p-4 col-md-12 col-12 d-flex d-flex justify-content-center">
                                    <Button type="submit" variant="contained" color="primary"
                                        className="jr-btn jr-btn-lg">
                                        Cambiar Contraseña
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }


}

export default connect()(PerfilUsuario)