//COMPONENTES 
import React, { Fragment } from 'react';

import ContainerHeader from 'components/ContainerHeader';
import CardBox from 'components/CardBox';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Alert } from 'reactstrap';

import Swal from 'sweetalert2';

// Con Hooks
import FechaPicker from './Formulario/FechaPicker';
import ModeloSelect from './Formulario/ModeloSelect';
import PeriocidadSelects from './Formulario/PerocidadSelects';
import SwitchLabels from './Formulario/SwitchLabels';



import TimePickers from './Formulario/TimePickers';
import DestinoApi from './Formulario/DestinoApi';
import UbicacionApicts from './UbicacionApi';
import ProgramacionSwitch from './Formulario/ProgramacionSwitch';
import UrlDocumento from './Formulario/UrlDocumento'



import { connect } from 'react-redux'
import { newProcess } from '../../../actions/procesosActions'

import moment from 'moment';

class CrearProceso extends React.Component {

    state = {
        nombre: '',
        modelo: '',
        ubicacion_archivo: '',
        destino_archivo: '',
        tipo_programacion: false,
        dia: moment().format('YYYY-MM-DD'),
        hora: moment().format('h:mm:ss'),
        periocidad: '0',
        tipo_show: false,
        switchProgramacion: {
            separar: false,
            clasificar: false,
            extraer: false,
            entidad: false,
        },
        scoreClasificacion: '',
        url: '',
        ubicacion_archivo_url: '',
        destino_archivo_url: '',
        disabledUbicacionInput: true,
        disabledDestinoInput: true,
        modalShow: false,
        error: false,
        errorSwitch: false,
        errorScore: false

    }

    //FUNCIONES QUE RECIBEN LOS STATE DE SUS HIJOS
    //Y LOS SETEAN EN EL PADRE
    callbackFunctionModelo = (modelo) => {
        this.setState({ modelo })
    }

    callbackFunctionDestino = (destino_archivo) => {
        this.setState({ destino_archivo })

        if(destino_archivo === ''){
            this.setState({
                disabledDestinoInput: true
            })
        }else{
            this.setState({
                disabledDestinoInput: false
            })
        }
    }

    callbackFunctionUbicacion = (ubicacion_archivo) => {
        
        this.setState({ ubicacion_archivo })

        if(ubicacion_archivo === ''){
            this.setState({
                disabledUbicacionInput: true
            })
        }else{
            this.setState({
                disabledUbicacionInput: false
            })
        }
        
    }

    callbackFunctionPeriocidad = (periocidad) => {
        this.setState({ periocidad })

    }
    // --------------------------------------------
    getSwitchSelected = (switchSeleccionados) => {
        this.setState({
            ...this.state,
            switchProgramacion: switchSeleccionados
        })
    }
    // ----------------------------------------------
    callbackFunctionDia = (childDia) => {
        this.setState({
            ...this.state,
            dia: childDia
        })
    }

    callbackFunctionHora = (chilHora) => {
        this.setState({
            ...this.state,
            hora: chilHora
        })

    }
    //MAREO PARA QUE LOS SWITCH CAMBIEN, ESTAN AL CONTRARIO
    //TODO: ARREGLAR MÁS ADELANTE
    callbackFunctionPrograSwitch = () => {
        if (this.state.tipo_programacion === false) {
            this.setState({
                tipo_programacion: true,
                tipo_show: true
            });
        }
        else {
            this.setState({
                tipo_programacion: false,
                tipo_show: false
            })
        }
    }

    nombre = e => {
        this.setState({ nombre: e.target.value })
    }

    scoreClasificacion = e => {
        this.setState({ scoreClasificacion: e.target.value })
    }

    ubicacion_archivo_url = e => {
        this.setState({ ubicacion_archivo_url : e.target.value})
    }

    destino_archivo_url = e => {
        this.setState({ destino_archivo_url : e.target.value })
    }




    newProcess = e => {
        e.preventDefault();

        const { nombre, modelo, ubicacion_archivo, destino_archivo,
            tipo_programacion, dia, hora, periocidad, destino_archivo_url, ubicacion_archivo_url,
            scoreClasificacion } = this.state;

        const { separar, clasificar, extraer, entidad } = this.state.switchProgramacion

        if (nombre === '' || modelo === '' || ubicacion_archivo === '' || destino_archivo === '') {
            this.setState({ error: true });
            return;
        }

        if (separar === false && clasificar === false && extraer === false && entidad === false) {
            this.setState({ errorSwitch: true })
            return;
        }

        if (scoreClasificacion < 50 || scoreClasificacion > 100) {
            this.setState({ errorScore: true })
            return;
        }

        const infoProceso = {
            nombre,
            modelo,
            ubicacion_archivo,
            destino_archivo,
            tipo_programacion,
            destino_archivo_url,
            ubicacion_archivo_url,
            separar,
            clasificar,
            extraer,
            entidad,
            dia,
            hora,
            periocidad,
            scoreClasificacion,
        }

        this.props.newProcess(infoProceso);
        if (entidad === false) {
            Swal.fire(
                'Nuevo Proceso!',
                `Se ha creado ${nombre}.`,
                'success',

            )

            this.props.history.push('listado-proceso')
        } else {
            Swal.fire(
                'Nuevo Proceso!',
                `Se ha creado ${nombre}, ahora debe seleccionar sus entidades.`,
                'success',

            )
            this.props.history.push('entidades')
        }

    }

    openModal = () => {
        this.setState({
            ...this.state,
            modalShow: true
        })
    }

    onHideModal = () => {
        this.setState({
            ...this.state,
            modalShow: false
        })
    }


    urlChange = (url) => {
        console.log(url)
        this.setState({
            ...this.state,
            url
        })

    }

    render() {
        const { modelo,
            destino_archivo,
            ubicacion_archivo,
            periocidad,
            tipo_show,
            error,
            errorSwitch,
            errorScore, } = this.state;

        return (
            <div className="app-wrapper">
                <ContainerHeader match={this.props.match} title="Crear Proceso" />
                <div className="row">
                    <CardBox styleName="col-lg-12">

                        <form onSubmit={this.newProcess} className="row" noValidate autoComplete="off">
                            <div className="col-md-6 col-12">
                                {/* <Button variant="primary" onClick={() => this.openModal()}>
                                    Launch vertically centered modal
                                </Button> */}
                                <TextField
                                    id="nombre_proceso"
                                    label="Nombre Proceso"
                                    margin="normal"
                                    fullWidth
                                    onChange={this.nombre}
                                />
                            </div>
                            <div className="col-md-6 col-12">
                                <ModeloSelect
                                    parentModelo={this.callbackFunctionModelo}
                                    modelo={modelo} />
                            </div>
                            <div className="col-md-6 col-12">
                                <UbicacionApicts
                                    parentUbicacion={this.callbackFunctionUbicacion}
                                    ubicacion_archivo={ubicacion_archivo} />
                            </div>
                            <div className="col-md-6 col-12">
                                <TextField
                                    disabled={this.state.disabledUbicacionInput}
                                    label="Url Ubicación Archivo"
                                    margin="normal"
                                    fullWidth
                                    onChange={this.ubicacion_archivo_url}
                                />
                            </div>
                            <div className="col-md-6 col-12" >
                                <DestinoApi
                                    parentDestino={this.callbackFunctionDestino}
                                    destino_archivo={destino_archivo} />
                            </div>
                            <div className="col-md-6 col-12">
                                <TextField
                                    disabled={this.state.disabledDestinoInput}
                                    label="Url Destino Archivo"
                                    margin="normal"
                                    fullWidth
                                    onChange={this.destino_archivo_url}
                                />
                            </div>
                            <div className="p-3 col-md-6 col-12">
                                <div className="entry-description">
                                    <h3>Tipo de Programación</h3>
                                </div>
                                <ProgramacionSwitch
                                    showProgra={this.changeType}
                                    parentProgra={this.callbackFunctionPrograSwitch} />
                            </div>
                            <div className="col-6">
                                <div className="entry-description">
                                    <h3>Proceso</h3>
                                </div>
                                <SwitchLabels
                                    getSwitchSelected={this.getSwitchSelected}
                                />
                            </div>
                            <div className="p-3 col-md-6 col-12">
                                {/* <Button variant="primary" onClick={() => this.openModal()}>
                                    Launch vertically centered modal
                                </Button> */}
                                <TextField
                                    id="scoreClasificacion"
                                    label="Score Clasificacion"
                                    name='scoreClasificacion'
                                    fullWidth
                                    type="number"
                                    placeholder="0/100"
                                    onChange={this.scoreClasificacion}
                                />
                            </div>
                            {tipo_show ?
                                <Fragment>
                                    <div className="p-3 col-md-6 col-12">
                                        <FechaPicker
                                            parentDia={this.callbackFunctionDia} />
                                    </div>
                                    <div className="p-3 col-md-6 col-12">
                                        <PeriocidadSelects
                                            parentCallbackPeriocidad={this.callbackFunctionPeriocidad} periocidad={periocidad} />
                                    </div>
                                    <div className="p-3 col-md-6 col-12">
                                        <TimePickers
                                            parentHora={this.callbackFunctionHora} />
                                    </div>

                                </Fragment>

                                :
                                null}

                            <div className="p-3 col-md-12 col-12">
                                <Button type="submit" variant="contained" color="primary"
                                    className="jr-btn jr-btn-lg">
                                    Crear Proceso
                            </Button>
                            </div>
                            {error ? <div className="p-3 col-md-12 col-12">
                                <Alert className="shadow-lg" color="secondary">
                                    Faltan campos por completar
                             </Alert>
                            </div> : null}
                            {errorSwitch ? <div className="p-3 col-md-12 col-12">
                                <Alert className="shadow-lg" color="secondary">
                                    Elija al menos una opción
                             </Alert>
                            </div> : null}
                            {errorScore ? <div className="p-3 col-md-12 col-12">
                                <Alert className="shadow-lg" color="secondary">
                                    El Score ingresado es invalido
                             </Alert>
                            </div> : null}



                            <UrlDocumento
                                show={this.state.modalShow}
                                urlChange={this.urlChange}
                                onHide={() => this.onHideModal()}
                            />
                        </form>
                    </CardBox>
                </div>
            </div>
        );
    }
}



export default connect(null, { newProcess })(CrearProceso);

