import React, { Component } from 'react'

import { Button } from '@material-ui/core';

const Lista_Documentos = ({documento: {id, ubicacion_doc, metadata,nombre, tipo_documento}, getDataDocument}) => {

        return (
                <tr 
                tabIndex={-1}
                key={id}>
                    <td className="max-width-100">
                        <p className="text-truncate mb-0">{nombre}</p>
                    </td>
                    <td>              
                        <Button variant="contained"
                        onClick={() => getDataDocument(ubicacion_doc, id, nombre, metadata,tipo_documento )}
                        className="jr-btn jr-btn-lg bg-newcolor text-white">
                        
                        <i className="zmdi zmdi-eye zmdi-hc-fw" />
                        </Button>
                    </td>
                </tr>
        );
    }


export default Lista_Documentos
