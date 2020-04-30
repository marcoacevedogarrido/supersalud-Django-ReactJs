import React, { Component } from 'react'
import ProjectCell from './ProjectCell';

import { connect } from 'react-redux';
import { getLastProcess } from 'actions/homeActions';

export class ProjectList extends Component {

    state = {
        isloading: true
    }


    componentDidMount() {
        this.props.getLastProcess()

        this.setState({
            isloading: false
        })

    }

    render() {
        const { lastProcess } = this.props

        return (
            <div className="table-responsive-material">
                <table className="project-list-table table remove-table-border mb-0">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Fecha Creacion</th>
                            <th colSpan="2" scope="col">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lastProcess.map(ultimos5 => {
                            return (
                                <ProjectCell
                                    key={ultimos5.id}
                                    ultimos5={ultimos5}
                                />
                            );
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}




const mapStateToProps = state => ({
    lastProcess: state.home.lastProcess
  })

export default connect(mapStateToProps, { getLastProcess })(ProjectList);
