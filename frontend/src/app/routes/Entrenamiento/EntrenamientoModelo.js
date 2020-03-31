import React, { useEffect, Fragment, useState } from 'react'

import TablaEntrenamiento from './Tabla/TablaEntrenamiento'
import Iframe from './Iframe/Iframe'

import { connect, useSelector, useDispatch } from 'react-redux'
import { getEntrenamientoDocuAction } from 'actions/EntrenamientoModelos/EntrenamientoActions'

import Spinner from 'constants/Spinner/Spinner'


const EntrenamientoModelo = ({id}) => {

    const dispatch = useDispatch()

    const [page, setPage] = useState(1)


    useEffect(() => {
        const getEntrenamiento = () => dispatch(getEntrenamientoDocuAction(id, page))
        getEntrenamiento()
    }, [page])

    const documentos = useSelector(state => state.docuEntrenamiento.docuEntrenamiento)
    const count = useSelector(state => state.docuEntrenamiento.count)
    const loading = useSelector(state => state.docuEntrenamiento.loading)
    const error = useSelector(state => state.docuEntrenamiento.error)


    console.log(documentos)
    return (
        <Fragment>
            {error ?
                <Fragment>
                    <div className="col-5 ">
                        <div className="col d-flex justify-content-center">
                            <h3>Error al cargar componente</h3>
                        </div>
                    </div>
                    <div className="col-7 ">
                        <div className="jr-card ">
                            <h3>Error al cargar componente</h3>

                        </div>
                    </div>
                </Fragment>
                :
                loading ?
                    <Fragment>
                        <div className="col-5 ">
                            <div className="col d-flex justify-content-center">
                                <Spinner />
                            </div>
                        </div>
                        <div className="col-7 ">
                            <div className="jr-card col d-flex justify-content-center ">
                                <Spinner />
                            </div>
                        </div>
                    </Fragment>

                    :
                    <Fragment>
                        <div className="col-5 ">
                            <div className="jr-card ">
                                <TablaEntrenamiento
                                    documentos={documentos}
                                    count={count}
                                    setPage={setPage}
                                />

                            </div>
                        </div>
                        <div className="col-7 ">
                            <div className="jr-card ">
                                <Iframe />

                            </div>
                        </div>

                    </Fragment>
            }
        </Fragment>

    )
}

export default connect()(EntrenamientoModelo)