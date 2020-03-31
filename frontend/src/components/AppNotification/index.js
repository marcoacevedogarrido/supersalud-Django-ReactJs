import React, { useState, useEffect } from 'react'

import NotificationItems from './NotificationItems';
import CustomScrollbars from 'util/CustomScrollbars';
import { connect, useSelector } from 'react-redux';
import { getNotifications } from '../../actions/Dashboard/notificacionesActions'


function AppNotification({ dispatch }) {

    // USAR EL ISLOADING DEL STATE
    const [notificaciones, setNotificaciones] = useState()
    const [isLoading, setLoading] = useState(true)


    let arrayNotificaciones = useSelector(state => state.notificaciones.notificaciones)

    useEffect(() => {
        dispatch(getNotifications())
        setNotificaciones(arrayNotificaciones)
        setLoading(false)

    }, [])


    if (isLoading) {
        return (
            <CustomScrollbars className="messages-list scrollbar" style={{ height: 280 }}>
                <ul className="list-unstyled">
                    <h5>Cargando...</h5>
                </ul>
            </CustomScrollbars>
        )
    } else {
        if (notificaciones.length === 0) {
            return (
                <CustomScrollbars className="messages-list scrollbar" style={{ height: 280 }}>
                    <ul className="list-unstyled">
                        <li className="media">
                            <div className="media-body">
                                <h3 className="font-weight-light-titulo">
                                    <small> No hay Notificaciones.</small>
                                </h3>
                            </div>
                        </li>
                    </ul>
                </CustomScrollbars>
            )
        } else {
            return (
                <CustomScrollbars className="messages-list scrollbar" style={{ height: 280 }}>
                    <ul className="list-unstyled">
                        {notificaciones.map((notificacion, index) => <NotificationItems key={index} notificacion={notificacion} />)
                        }
                    </ul>

                </CustomScrollbars>
            )
        }
    }









}

export default connect()(AppNotification)