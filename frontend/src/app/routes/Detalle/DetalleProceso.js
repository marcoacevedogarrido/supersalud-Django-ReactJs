import React, { Fragment, useState, useEffect } from 'react'

import Spinner from '../../../constants/Spinner/Spinner'

import { Redirect } from 'react-router-dom'

// Orden de componentes
import Info4Documento from './containers/Info4Documento'
import ResultadoClasiHeader from './containers/components/ResultadoClasiHeader'
import TablaTipoCantidad from './containers/TablaTipoCantidad';
import TablePrevious from './containers/TablePrevious'
import Iframe from './containers/Iframe';
import Clasificacion_Manual from './containers/Clasificacion_Manual';
import Metadatos from './containers/Metadatos'

import Error401 from 'components/Error401'


import { connect, useSelector, useDispatch } from 'react-redux'
import { getProceso } from '../../../actions/procesosActions';


const DetalleProceso = ({id, getTitle}) => {

    const dispatch = useDispatch()

    // Por defecto veremos los sin clasificados
    const [reload, setReload] = useState(false)
    const [doc_default, setDocDefault] = useState('Sin-Clasificar')
    const [doc_selected, setDocSelected] = useState('')

    // state childrens
    const [dataDocumento, setDataDocumento] = useState({
        rutaPdf: '',
        id_documento: '',
        tipo_de_documento: '',
        metadataDocu: '',
        clasificacion_manual: ''
    })

    useEffect(() => {
        dispatch(getProceso(id))
    },[])


    const proceso = useSelector(state => state.procesos.proceso)
    const loading = useSelector(state => state.procesos.loadingUnique)
    const error = useSelector(state => state.procesos.errorUnique)
    const unauthorized = useSelector(state => state.procesos.unauthorized)


    // Obtengo el tipo de documento de el componente
    const getTypeDoc = (tipo_documento) => {
        setDocDefault(tipo_documento)
    }

    const getMetadataDocument = (ubicacion_doc, id, nombre, metadata,tipo_documento) => {
        setDataDocumento({
            ...dataDocumento,
            rutaPdf: ubicacion_doc,
            id_documento: id,
            tipo_de_documento: nombre,
            metadataDocu: metadata,
            clasificacion_manual: tipo_documento
        })
    }

    const changeClasification = (tipo_de_documento) => {
        setDataDocumento({
            ...dataDocumento,
            clasificacion_manual: tipo_de_documento
        })
    }

    const reloadComponent = () => {

        setReload(true)
        setDataDocumento({
            ...dataDocumento,
            clasificacion_manual: ''
        })

        const interval = setInterval(() => {
            setReload(false)
          }, 1000);
        return () => clearInterval(interval);

    }


    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setReload(true)
    //     }, 10000);

    //     return () => {
    //         setReload(false)
    //         clearInterval(interval)
    //     }

    if(unauthorized.includes("401")){
        return (
            <Error401 />
        )
    }
    // })
    return (
        <Fragment>
            <div className="row">
                <Info4Documento
                    id={id}
                    reload={reload}
                />
            </div>
            <div className="row mb-md-3">
                <ResultadoClasiHeader
                    id={id}
                    proceso={proceso}
                    reload={reload}
                />
                <div className="col-6 ">
                    <div className="jr-card">
                        <TablaTipoCantidad
                            modelo={proceso.modelo}
                            id={id}
                            getTypeDoc={getTypeDoc}
                            reload={reload}
                        />
                    </div>
                </div>
            </div>
            {/*  */}
            <div className="row">
                <div className="col-lg-4 col-12 ">
                    <div className="jr-card">
                        <div className="jr-card-header d-flex align-items-center justify-content-between">
                            <h3 className="mb-0">Tipo Documento</h3>
                            <span className="badge badge-secondary">{doc_default}</span>
                        </div>
                        <TablePrevious
                            id={id}
                            doc_default={doc_default}
                            getMetadataDocument={getMetadataDocument}
                            reload={reload}
                        />
                    </div>
                </div>
                <div className="col-8">
                    <div className="jr-card d-flex">
                        <div className="col-8">
                            <div className="jr-card-header d-flex align-items-center justify-content-between">
                                <h3 className="mb-0">Vista Previa</h3>
                            </div>
                            <Iframe
                            rutaPdf={dataDocumento.rutaPdf}
                            metadataDocu={dataDocumento.metadataDocu}
                            />
                        </div>
                        <div className="col-md-4 align-self-md-top-center">
                            <div className="jr-card-header d-flex align-items-center justify-content-between">
                                <h3 className="mb-0">Clasificación Manual</h3>
                            </div>
                            <Clasificacion_Manual
                                id={id}
                                clasificacion_manual={dataDocumento.clasificacion_manual}
                                id_documento={dataDocumento.id_documento}
                                doc_default={doc_default}
                                changeClasification={changeClasification}
                                reloadComponent={reloadComponent}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-12 ">
                </div>
                <div className="col-8">
                    <div className="jr-card d-flex">
                        <div className="col-12">
                            <div className="jr-card-header d-flex align-items-center justify-content-between">
                                <h3 className="mb-0">Entidades del Documento</h3>
                            </div>
                            <Metadatos
                                metadata={dataDocumento.metadataDocu}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default connect()(DetalleProceso)