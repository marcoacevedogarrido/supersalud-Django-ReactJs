import React, { Component } from 'react'
import ContainerHeader from 'components/ContainerHeader';

//container
import GridModelos from './containers/GridModelos'
import ModelosCards from './ModelosCards'

const Modelo = ({match}) => {
        return (
            <div className="app-wrapper">
                <ContainerHeader match={match} title="Modelos" />
                <div className="row">
                    <ModelosCards
                    match={match}
                    />
                </div>
            </div>
        );
}

export default Modelo
