import React, { useEffect, useState } from 'react'
import TablaUsuario from './Tabla/TablaModelo'
import { connect, useSelector, useDispatch } from 'react-redux'
import { getModelos } from '../../../actions/Modelos/modelosActions'

const ModelosDisponibles = () => {


    const dispatch = useDispatch()

    useEffect(() => {
        const getModelosApi = () => dispatch(getModelos())
        getModelosApi()
    }, [])

    const modelos = useSelector(state => state.modelos.modelos)
    const error = useSelector(state => state.modelos.error)

    console.log(modelos)


    return (
        <div className="col-12 ">
            <div className="jr-card ">
                <TablaUsuario
                    modelos={modelos}
                />
            </div>
        </div>

    )
}

export default connect()(ModelosDisponibles)