import React, { useEffect, Fragment } from 'react'

import { connect, useSelector, useDispatch } from 'react-redux'
import { getModelos } from 'actions/Modelos/modelosActions'

import Spinner from 'constants/Spinner/Spinner'
import ModeloCard from './modelos/ModeloCard';


const GridModelos = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        const getModelosApi = () => dispatch(getModelos())
        getModelosApi()
    }, [])

    const modelos = useSelector(state => state.modelos.modelos)
    const loading = useSelector(state => state.modelos.loading)
    const error = useSelector(state => state.modelos.error)


    return (
        <Fragment>
            {error ?

                <div className="col d-flex justify-content-center">
                    <h3>Error al cargar componente</h3>
                </div>

                : null}

            {loading ? (
                <div className="col d-flex justify-content-center">
                    <Spinner />
                </div>
            ) :
                <div className="row">
                    {modelos.map(modelo => (
                        <div className="col-6">
                            <ModeloCard
                                className="col-6"
                                cardStyle="text-center"
                                cardHeader="Center Aligned Header"
                                key={modelo.id}
                                modelo={modelo}
                            />
                        </div>
                    ))}
                </div>
            }
        </Fragment>
    )
}


export default connect()(GridModelos)





