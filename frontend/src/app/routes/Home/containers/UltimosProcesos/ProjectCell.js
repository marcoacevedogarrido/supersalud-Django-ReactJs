import React, { Component } from 'react'
import { Badge } from 'reactstrap';

export class ProjectCell extends Component {

  render() {
    const { id, nombre, fecha_creacion, estado } = this.props.ultimos5
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return (
      <tr
        tabIndex={-1}
        key={'proceso-' + id}>

        <td className="max-width-100">
          <p className="text-truncate mb-0">{nombre}</p>
        </td>

        <td className="text-nowrap">
          {(new Date(fecha_creacion)).toLocaleDateString('es-CL', options)}
        </td>
        <td>
          <Badge className="d-block" color={
            estado === 'En cola' ? 'danger' :
              estado === 'Por procesar' ? 'warning' :
                estado === 'Clasificado' ? 'light-green' :
                  estado === 'Finalizado' ? 'success' : 
                    estado === 'Error en el Proceso' ? 'danger' : 'grey'}>
            {estado}
          </Badge>
        </td>

      </tr>
    )
  }
}

export default ProjectCell
