import axios from 'axios';
import React from 'react';
import ContainerHeader from 'components/ContainerHeader';
import CardBox from 'components/CardBox';
import DatePickers from './selects/DatePickers';
import TimePickers from './selects/TimePickers';
import PeriocidadSelects from './selects/PerocidadSelects';
import Button from '@material-ui/core/Button';
import ProgramacionSwitch from './selects/ProgramacionSwitch';
import Swal from 'sweetalert2';


import CircularProgress from '@material-ui/core/CircularProgress';


import { connect } from 'react-redux';
import { getProceso, updateProcess } from '../../../actions/procesosActions';
import { URL_GLOBAL } from 'constants/constants';


class EditarProceso extends React.Component {


    state = {
        tipo_show: false,
        error: false,
        loading: true,
        proceso: [{
            // user: '',
            nombre: '',
            modelo: '',
            ubicacion_archivo: '',
            destino_archivo: '',
            tipo_programacion: false,
            separar: false,
            clasificar: false,
            extraer: false,
            entidad: false,
            dia: '',
            hora: '',
            periocidad: '0',
        }
        ]

    }

    //FUNCIONES QUE RECIBEN LOS STATE DE SUS HIJOS
    //Y LOS SETEAN EN EL PADRE

    callbackFunctionDia = (childDia) => {
        this.setState({
            ...this.state,
            proceso:{
                ...this.state.proceso,
                dia: childDia
            }
            
        })
    }

    callbackFunctionHora = (chilHora) => {
        this.setState({
            ...this.state,
            proceso:{
                ...this.state.proceso,
                hora: chilHora
            }
            
        })

    }

    callbackFunctionPeriocidad = (childDataPeriocidad) => {
        this.setState({ 
            ...this.state,
            proceso:{
                ...this.state.proceso,
                periocidad: childDataPeriocidad 
            }
        })
    }

    componentDidMount() {
        this.getModelos();

    }

    getModelos() {
        const { id } = this.props.match.params;
        axios
            .get(`${URL_GLOBAL}/api/get/proceso/${id}`)
            .then(res => {
                this.setState({
                    proceso: res.data,
                    loading: false
                });
            })
            .catch(err => {
                this.setState({ error: err });
            });
    }



    nombre = e => {
        this.setState({ nombre: e.target.value })
    }

    updateProcessApi = e => {
        e.preventDefault();

        const { dia, hora, periocidad, nombre, modelo, ubicacion_archivo,
            destino_archivo, tipo_programacion, separar, clasificar,
            extraer,} = this.state.proceso;

        // if (d) {
        //     this.setState({ error: true });
        //     return;
        // }


        const {id} = this.props.match.params

        const infoProceso = {
            id,
            dia,
            hora,
            periocidad,
            // user, 
            nombre,
            modelo,
            ubicacion_archivo,
            destino_archivo,
            tipo_programacion,
            separar,
            clasificar,
            extraer
         }

        this.props.updateProcess(infoProceso);


        Swal.fire(
            'Actualizado!',
            'Se ha modificado el Proceso!',
            'success'
        )


        this.props.history.push("listado-proceso");
        

        
        
    }

    render() {
        const { loading, periocidad, dia, hora } = this.state.proceso;
        if (loading) {
            return (
                <div className="app-wrapper">
                    <ContainerHeader match={this.props.match} title="Editar Proceso" />
                    <div className="row">
                        <CardBox styleName="col-lg-12">
                            <CircularProgress size={50} />
                        </CardBox>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="app-wrapper">
                    <ContainerHeader match={this.props.match} title="Editar Proceso" />
                    <div className="row">
                        <CardBox styleName="col-lg-12">
                            <form onSubmit={this.updateProcessApi} className="row" noValidate autoComplete="off">
                                <div className="p-3 col-md-6 col-12">
                                    <div className="entry-description">
                                        <h3>Tipo de Programación</h3>
                                    </div>
                                    <ProgramacionSwitch />
                                </div>
                                <div className="p-3 col-md-6 col-12">
                                </div>
                                <div className="p-3 col-md-6 col-12">
                                    <DatePickers
                                        parentDia={this.callbackFunctionDia}
                                        dia={dia} />

                                </div>
                                <div className="p-3 col-md-6 col-12">
                                    <TimePickers
                                        parentHora={this.callbackFunctionHora}
                                        hora={hora}
                                    />

                                </div>
                                <div className="p-3 col-md-6 col-12">
                                    <PeriocidadSelects
                                        parentCallbackPeriocidad={this.callbackFunctionPeriocidad}
                                        periocidad={periocidad} />
                                </div>
                                <div className="p-3 col-md-12 col-12">
                                    <Button type="submit" variant="contained" color="primary"
                                        className="jr-btn jr-btn-lg">
                                        Guardar Cambios
                                </Button>
                                </div>
                            </form>
                        </CardBox>
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = state => ({
    proceso: state.procesos.proceso
})

export default connect(mapStateToProps, { getProceso, updateProcess })(EditarProceso);