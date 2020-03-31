import React, { Component, Fragment, useState, useEffect } from 'react';
import axios from 'axios';

import Button from '@material-ui/core/Button';

import {URL_GLOBAL} from '../../../../constants/constants'

const TablaTipoCantidad = ({modelo, id, reload, getTypeDoc}) => {

  const [tablaTipo, setTabla] = useState({
    table_docu_counts: [],
    list_doc_type: [],
    id_url: '',
    type_doc_default: 'Sin-Clasificar',
    
  })


  useEffect(() => {
    getDocumentosFilter()
  },[reload])


  const getDocumentosFilter = () => {
    axios
      .get(`${URL_GLOBAL}/api/tipo-doc/counts/${id}/`)
      .then(res => {
        setTabla({
          ...tablaTipo,
          table_docu_counts: res.data
        })

      })
      .catch(err => {
        setTabla({
          ...tablaTipo,
          error: err
        })
      });
  }

  const { table_docu_counts } = tablaTipo

  return (
    <Fragment>
      <div className="row mb-md-3">
        <div className="col-12">
          <h3>{modelo}</h3>
        </div>
      </div>
      <div className="table-responsive-material">
        <table className="default-table table-unbordered table table-sm table-hover">
          <br></br>
          <thead className="th-border-b">
            <tr>
              <th className="status-cell text-left" >Tipo</th>
              <th className="status-cell text-center">Cantidad</th>
              <th className="status-cell text-right">Detalle</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(table_docu_counts).map((key) => {
                return <tr key={key} >
                  <td className="status-cell text-left" >{key}</td>
                  <td className="status-cell text-center">{table_docu_counts[key]} </td>
                  <td className="status-cell text-right">
                    <Button  onClick={() => getTypeDoc(key) }
                     variant="contained" className="jr-btn bg-newcolor2 text-white">
                      Ver
                    </Button></td>
                </tr>
              })}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}

export default TablaTipoCantidad;

