import React from 'react';
import ContainerHeader from 'components/ContainerHeader';

import ListaProcesos from './table/ListaProcesos'


class ListadoProceso extends React.Component {

    render() {
        
        return (
            <div className="app-wrapper">
                <ContainerHeader match={this.props.match} title="Listado de Procesos" />

                <div className="row mb-md-3">
                    <div className="col-12">
                            <ListaProcesos />
                    </div>
                </div>
            </div>
        );
    }
}



export default ListadoProceso;
