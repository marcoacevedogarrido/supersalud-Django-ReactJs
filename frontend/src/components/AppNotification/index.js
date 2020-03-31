import React from 'react'

import CustomScrollbars from 'util/CustomScrollbars';

function AppNotification() {

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
}

export default AppNotification