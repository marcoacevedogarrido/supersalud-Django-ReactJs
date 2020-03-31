import React from 'react';
import ContainerHeader from 'components/ContainerHeader';

import EntrenamientoModelo from './EntrenamientoModelo'


const Entrenamiento = ({ match}) => {

    return (
        <div className="app-wrapper">
            <ContainerHeader match={match} title="Entrenamiento del Modelo" />
            <div className="row mb-md-3">
                <EntrenamientoModelo 
                    id={match.params.id}
                />
            </div>
        </div>
    );
}

export default Entrenamiento;