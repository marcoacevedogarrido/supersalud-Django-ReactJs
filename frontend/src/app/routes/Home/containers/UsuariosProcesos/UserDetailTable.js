import React, { useEffect } from 'react';
import UserDetailCell from './UserDetailCell';

import Spinner from 'constants/Spinner/Spinner'


import { connect, useSelector, useDispatch } from 'react-redux'
import { getInfoProcesos } from 'actions/Dashboard/InfoProcesosActions'


const UsuariosProcesos = ({ data, tableStyle }) => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getInfoProcesos())
  }, [])

  const infoProcesos = useSelector(state => state.home.infoProcesos)
  const loading = useSelector(state => state.home.loadingInfo)
  const error = useSelector(state => state.home.errorInfo)

  return (
    <div className="table-responsive-material table-userdetail-mmin">
      {error ?

        <div className="col d-flex justify-content-center">
          <h3>Error</h3>
        </div>
        :
        loading ?
          <div className="col d-flex justify-content-center">
            <Spinner />
          </div>
          :
          <table className={`default-table table-sm table full-table mb-0 ${tableStyle}`}>
            <tbody>
              {infoProcesos.map(data => {
                return (
                  <UserDetailCell key={data.id} data={data} />
                );
              })}
            </tbody>
          </table>

      }

    </div>
  );
};

export default UsuariosProcesos;