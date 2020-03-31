import React from 'react';
import ContainerHeader from 'components/ContainerHeader';
import ModelosDisponibles from './ModelosDisponibles';

const ListaModelo = ({ match}) => {

    return (
        <div className="app-wrapper">
            <ContainerHeader match={match} title="Lista de Modelos" />
            <div className="row mb-md-3">
                <ModelosDisponibles />
            </div>
        </div>
    );
}

export default ListaModelo;