import React, { useState, useEffect } from 'react'
import DetalleProceso from './DetalleProceso'
import ContainerHeader from "./containers/Header/index";

const Detalle = ({ match }) => {

    const [title, setTitle] = useState('Detalle')

    return (
        <div className="app-wrapper" >
            <ContainerHeader match={match} title={title} />
            <DetalleProceso
                id={match.params.id}
            />
        </div>
    )
}

export default Detalle;
