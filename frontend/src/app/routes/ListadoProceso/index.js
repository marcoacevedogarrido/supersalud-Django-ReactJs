import React from 'react';
import ContainerHeader from 'components/ContainerHeader';


class ListadoProceso extends React.Component {

    render() {
        return (
            <div className="app-wrapper">
                <ContainerHeader match={this.props.match} title="Listado de Procesos" />

                <div className="row mb-md-3">
                    <div className="col-12">
                        <div className="jr-card">
                            <h3>EJ</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListadoProceso;
