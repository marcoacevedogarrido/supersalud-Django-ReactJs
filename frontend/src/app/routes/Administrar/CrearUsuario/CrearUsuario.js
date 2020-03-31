import React, { useState, useEffect } from 'react'
import ContainerHeader from 'components/ContainerHeader';
import CardBox from 'components/CardBox';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Alert } from 'reactstrap';

// REDUX
import { connect, useSelector, useDispatch } from 'react-redux'
import { newUser } from '../../../../actions/Usuarios/UsuariosActions'

import CircularProgress from '@material-ui/core/CircularProgress';

const CrearUsuario = ({ match, history }) => {

    const dispatch = useDispatch()

    const [crearUsuario, setUsuario] = useState({
        username: '',
        email: '',
        first_name: '',
        last_name: ''
    })

    const [errorForm, setErrorForm] = useState(false)
    const [errores, setErrores] = useState({
        errorNombre: false,
        errorEmail: false,
        errorNombre: false,
        errorApellido: false
    })

    const [newUsuario, setNewUsuario] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleChange = e => {
        setUsuario({
            ...crearUsuario,
            [e.target.name]: e.target.value
        })
    };

    useEffect(() => {
        const { email } = crearUsuario
        if (email !== '') {
            if (email.includes('@') && email.includes('.com')) {
                setErrores({
                    ...errores,
                    errorEmail: false
                })
            } else {
                setErrores({
                    ...errores,
                    errorEmail: true
                })
            }
        }
    }, [crearUsuario.email])


    const usuarios = useSelector(state => state.usuarios)

    useEffect(() => {
        if (usuarios.loadingNew) {
            setLoading(true)
        } else {
            setLoading(false)
            if(usuarios.url_success === '/app/administrar'){
                history.push('/app/administrar')
            }
        }
    }, [usuarios])

    const handleSubmit = e => {

        e.preventDefault();

        const { username, email, first_name, last_name } = crearUsuario

        if (username === '' || email === '' || first_name === '', last_name === '') {
            setErrorForm(true)
            return
        } else {
            setErrorForm(false)
        }

        const infoUsuario = {
            username,
            email,
            first_name,
            last_name
        }

        dispatch(newUser(infoUsuario))
    }

    return (
        <div className="app-wrapper">
            <ContainerHeader match={match} title="Crear Usuario" />
            <div className="row">
                {errorForm === true ?
                    (<div className="p-3 col-md-12 col-12">
                        <Alert className="shadow-lg" color="secondary">
                            Faltan campos por completar
                        </Alert>
                    </div>) :
                    null
                }
                <CardBox styleName="col-lg-12">

                    <form onSubmit={handleSubmit} className="row" noValidate autoComplete="off">
                        <div className="col-md-6 col-12">
                            <TextField
                                id="username"
                                required
                                name="username"
                                label="Username"
                                margin="normal"
                                fullWidth
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-6 col-12">

                            <TextField
                                id="email"
                                error={errores.errorEmail}
                                required
                                name="email"
                                type="email"
                                label="Email"
                                margin="normal"
                                fullWidth
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-6 col-12">
                            <TextField
                                id="first_name"
                                required
                                name="first_name"
                                label="Nombre"
                                margin="normal"
                                fullWidth
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-6 col-12">

                            <TextField
                                id="last_name"
                                required
                                name="last_name"
                                label="Apellidos"
                                margin="normal"
                                fullWidth
                                onChange={handleChange}
                            />
                        </div>
                        {/* <div className="col-md-6 col-12">
                            <TextField
                                id="password"
                                required
                                name="password"
                                helperText={
                                    <p>
                                        <h6 className={classes.h1}>Su contraseña no puede asemejarse tanto a su otra información personal.</h6>
                                        <h6 className={classes.h1}>Su contraseña debe contener al menos 8 caracteres.</h6>
                                        <h6 className={classes.h1}>Su contraseña no puede ser una clave utilizada comunmente.</h6>
                                        <h6 className={classes.h1}>Su contraseña no puede ser completamente numérica.</h6>
                                    </p>
                                }
                                type="password"
                                label="Contraseña"
                                margin="normal"
                                fullWidth
                                onChange={handleChange}
                                error={errorPass}
                            />
                        </div>
                        */}
                        <div className="p-3 col-md-12 col-12">
                            <Button type="submit" variant="contained" color="primary"
                                className="jr-btn jr-btn-lg">
                                Crear Usuario
                            </Button>
                        </div>
                    </form>
                </CardBox>
            </div>
            {
                loading &&
                <div className="loader-view">
                    <CircularProgress />
                </div>
            }
        </div>
    )

}

export default connect()(CrearUsuario)