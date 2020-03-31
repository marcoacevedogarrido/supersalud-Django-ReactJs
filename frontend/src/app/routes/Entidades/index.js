import React, { Component } from 'react'
import ContainerHeader from 'components/ContainerHeader';

import ListaEntidad from './containers/ListaEntidad';



export class Entidades extends Component {


    render() {
        return (
            <div className="app-wrapper">
                <ContainerHeader match={this.props.match} title="Entidades" />
                    <ListaEntidad/>   
            </div>
     
        );
    }
}

export default Entidades
