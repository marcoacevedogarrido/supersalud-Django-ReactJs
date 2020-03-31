import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PaginationComponent from './PaginationComponent'
import SearchInput from './SearchInput';

import Proceso from './Proceso';

import { connect, useSelector, useDispatch } from 'react-redux'
import { getProcesos } from '../../../../actions/procesosActions';

import Select from '@material-ui/core/Select';

const ListaProcesos = () => {

  const [stateProce, setState] = useState({
    query: '',
    count: '',
    page: 1,
    pages: '',
    quantity: 20,
  })

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProcesos(quantity, query, page))
  }, [stateProce])

  const procesos = useSelector(state => state.procesos.procesos)
  const count = useSelector(state => state.procesos.count)
  const loading = useSelector(state => state.procesos.loading)
  const error = useSelector(state => state.procesos.error)



  const currentPage = (offset, pageNow) => {
    setState({
      ...stateProce,
      page: pageNow
    })
  }


  const { quantity, query, page } = stateProce

  return (
    <div className="jr-card">
      <div className="jr-card-header d-flex ">
        <div className="d-flex align-items-end  ">
          <div className="paddingQuantity">
            <h5>Mostrar</h5>
          </div>
          <Select
            native
            value={quantity}
            onChange={e => setState({
              ...stateProce,
              quantity: e.target.value
            })}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </Select>


        </div>
        <div className="col ">

        </div>
        <div className="col-3 d-flex align-items-end ">
          <SearchInput
            stateProce={stateProce}
            setState={setState}
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
          <br/>
          <thead className="th-border-b " >
            <tr >
              <th>Procesos</th>
              <th>Usuario</th>
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
            currentPage={currentPage}
            quantity={quantity}

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




export default connect()(ListaProcesos);