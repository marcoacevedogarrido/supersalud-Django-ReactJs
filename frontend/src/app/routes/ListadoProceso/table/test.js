import React, { Component} from 'react';
import { Link } from 'react-router-dom';

import PaginationComponent from './PaginationComponent'
import SearchInput from './SearchInput';

import Proceso from './Proceso';

import { connect } from 'react-redux';
import { getProcesos } from '../../../../actions/procesosActions';

import Select from '@material-ui/core/Select';

class ListaProcesos extends Component {
  
  state = {
    query: '',
    count: '',
    page: 1,
    pages: '',
    quantity: 1,

  }

  componentDidMount() {
    this.consultarApi()

  }
  
  consultarApi() {
    const { quantity, query, page } = this.state
    this.props.getProcesos(quantity, query, page)
  }


  handleChange = name => event => {
    this.setState({ [name]: event.target.value })
  };

  componentDidUpdate(prevProps, prevState){
    if(prevState !== this.state.quantity){
        this.consultarApi()
    }
  }



  currentPage = (offset) => {
    let paginaActual = offset
    console.log(paginaActual)
    if(paginaActual === 0){
      paginaActual = 1
    }else{
      paginaActual /= 10
    }
   
    this.setState({
      page: paginaActual
    }, () => {
      this.setState({
        ...this.state,
        quantity: 20
      })
      this.consultarApi();
    })
  }


  render() {

    const { procesos } = this.props
    let { page, quantity } = this.state
    const { count } = this.props

    return (
      <div className="jr-card">
        <div className="jr-card-header d-flex ">
          <div className="d-flex align-items-end  ">
            <div className="paddingQuantity">
              <h5>Mostrar</h5>
            </div>
            <Select
              native
              value={this.state.quantity}
              onChange={this.handleChange('quantity')}
            >
              <option value={1}>5</option>
              <option value={2}>10</option>
              <option value={3}>15</option>
              <option value={4}>20</option>
            </Select>


          </div>
          <div className="col ">

          </div>
          <div className="col-3 d-flex align-items-end ">
            <SearchInput
              getProcesos={this.props.getProcesos}
            />
          </div>
          <div className="col-1 d-flex align-items-end">
            <Link to="/app/crear-proceso" style={{ textDecoration: 'none' }}>

              <i className="zmdi zmdi-plus-circle-o"
                style={{
                  fontSize: 30
                }} />

            </Link>
          </div>
        </div>

        <div className="table-responsive-material">
          <table className="default-table table-unbordered table table-sm table-hover " >
            <div className="mt-3"></div>
            <thead className="th-border-b " >
              <tr >
                <th>Procesos</th>
                <th>Acción</th>
                <th>Modelo</th>
                <th>Fecha Creación</th>
                <th className="status-cell text-left">Estado</th>
                <th>Detalle</th>
                <th>Ejecutar</th>
              </tr>
            </thead>
            <tbody>
              {procesos.map(proceso => (
                <Proceso
                  key={proceso.id}
                  proceso={proceso}
                />
              ))}
            </tbody>
          </table>
        </div>
        <br />
        <div className="row">
          <div className="col-9 d-flex align-items-center">
            {quantity > 1 ?
              <div className="col-9 d-flex align-items-center">
                Registros del 1 al {quantity} mostrando : {count} procesos
             </div>
              :
              <div className="col-9 d-flex align-items-center">
                Registros del 1 al {quantity} mostrando: {count} proceso
             </div>
            }

          </div>
          <div className="col-3 ">
            <PaginationComponent
            count={count}
            currentPage={this.currentPage}
            
            />
            {/* <Fragment>
              <IconButton onClick={this.pagAnterior} disabled={page === 0} ><i className="zmdi zmdi-chevron-left" /></IconButton>
              <Button size="small">{page}</Button>
              <IconButton onClick={this.pagSiguiente} disabled ><i className="zmdi zmdi-chevron-right" /></IconButton>
            </Fragment> */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  procesos: state.procesos.procesos,
  count: state.procesos.count
})

export default connect(mapStateToProps, { getProcesos })(ListaProcesos);