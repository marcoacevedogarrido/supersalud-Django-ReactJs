import React, { Component, Fragment } from 'react'

export class TimerProcess extends Component {
    render() {


        


        const {nombre, hora, estado } = this.props.proceso;

        return (
            <Fragment>
            <div className="list-line-item">
            
              <div className={
                estado === 'En cola' ? 'list-line-badge bg-danger':
                estado === 'Por procesar' ?  'list-line-badge bg-porProcesar':
                estado === 'Finalizado' ? 'list-line-badge bg-finalizado' : 'bg-grey'} 
                />
            
              <div className="list-line-content">
                <h4 className={
                  estado === 'En cola' ? 'mb-1 text-danger':
                  estado === 'Por procesar' ? 'mb-1 text-warning':
                  estado === 'Finalizado' ? 'mb-1 text-success': `mb-1 text-grey`}>{nombre}</h4>
                <p className="jr-fs-sm text-light">{hora}</p>
              </div>
            </div>

            {/* PROPIEDADES 
            
            color texto circulo = list-line-badge bg-danger = ROJO
            color texto = list-line-badge bg-danger = ROJO

            text circulo bg-success 
            color texto text-success mb-1
            
            
            
            */}

            </Fragment>
        )
    }
}

export default TimerProcess
