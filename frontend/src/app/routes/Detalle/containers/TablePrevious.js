import React, { useState, Fragment, useEffect } from 'react';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';


import Lista_Documentos from './Lista_Documentos';
import PaginationComponent from './PaginationComponent'

import { connect, useSelector, useDispatch } from 'react-redux'
import { getDocFilter } from '../../../../actions/DocumentosActions';

const TablePrevious = ({id, doc_default, reload, getMetadataDocument}) => {

    const distpatch = useDispatch()

    const [dataTable, setData] = useState({
        type_doc_default: '',
        list_documentos: [],
        id_url: '',
        rutaPdf: '',
        id_documento: '',
        nombre: '',
        reload: false,
        tipo_documento: '',
        metadata: [],
    })

    const [page, setPage] = useState(1)



    const defaultApi = () => {
        distpatch(getDocFilter(id, doc_default , page))
    }

    useEffect(() => {
        defaultApi()
    },[doc_default, reload, page])

    // Obtener los states de los hijos
    const getDataDocument = (ubicacion_doc, id, nombre, metadata,tipo_documento) => {
        getMetadataDocument(
            ubicacion_doc,
            id,
            nombre,
            metadata,
            tipo_documento
        )
    }
    
    const documentos = useSelector(state => state.documentos.documentos)
    const loading = useSelector(state => state.documentos.loading)
    const count = useSelector(state => state.documentos.count)



    const currentPage = (offset) => {
        let paginaActual = offset  
        paginaActual = (paginaActual + 10) / 10
        console.log(paginaActual)
        setPage(paginaActual)
      }
      
    return (
        <div className="table-responsive-material">
            {loading ?

                <table className="project-list-table table remove-table-border mb-0">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Visualizar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="max-width-100">
                                <p className="text-truncate mb-0">xd</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                :
                <table className="project-list-table table remove-table-border mb-0">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Visualizar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {documentos.map(documento => (
                            <Lista_Documentos
                                key={documento.id}
                                documento={documento}
                                getDataDocument={getDataDocument}
                            />
                        ))}
                    </tbody>
                </table>

            }
        
            <hr/>
            <PaginationComponent
            count={count}
            currentPage={currentPage}
            />
        

        </div>
    );
}


export default connect()(TablePrevious)

