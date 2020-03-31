import React from 'react';
import ContainerHeader from 'components/ContainerHeader';

import AdministrarUsuario from './AdministrarUsuario'


const Administrar = ({ match}) => {

    return (
        <div className="app-wrapper">
            <ContainerHeader match={match} title="Administrar" />
            <div className="row mb-md-3">
                <AdministrarUsuario/>
            </div>
        </div>
    );
}

export default Administrar;