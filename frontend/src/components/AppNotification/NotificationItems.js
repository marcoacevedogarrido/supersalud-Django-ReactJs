import React from 'react'
import Button from '@material-ui/core/Button';

import { NavLink } from 'react-router-dom'

function NotificationItems({notificacion}){

    const {id, nombre, fecha_ultima_clasificacion} = notificacion

    const options = {
        year: 'numeric', month: 'numeric', day: 'numeric',
        hour: 'numeric', minute: 'numeric'
    };

    let url_actual = window.location.href
    url_actual.toString()

    return (
        <li className="media">
            <div className="media-body align-self-center">
                {url_actual.includes('detalle') ?
                    <NavLink to={`${id}`} style={{ textDecoration: 'none' }}>
                        <h4 className="font-weight-light-titulo">
                            <small> {nombre}</small>
                        </h4>
                    </NavLink>
                    :
                    <NavLink to={`detalle-proceso/${id}`} style={{ textDecoration: 'none' }}>
                        <h4 className="font-weight-light-titulo">
                            <small> {nombre}</small>
                        </h4>
                    </NavLink>
                }
                <Button size="medium" className="jr-btn jr-btn-xs mb-0">
                    <i className={`zmdi zmdi-check-circle text-green zmdi-hc-fw`} /></Button> 
                    <span className="meta-date">
                       <h5 className="font-weight-light">
                    <small>Fecha Clasificación: {(new Date(fecha_ultima_clasificacion)).toLocaleDateString('es-CL', options)}</small>
                    </h5> 
                    </span>
            </div>
        </li>
    )
}
export default NotificationItems
