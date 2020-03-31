import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import ListaDocumento from './ListaDocumento'

import PaginationComponent from './PaginationComponent'

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: '#CBCBD5',
        color: 'rgb(39, 70, 77)',
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const useStyles = makeStyles({
    table: {
        minWidth: 300,
    },
});

const TablaEntrenamiento = ({ documentos, setPage, count }) => {

    const classes = useStyles();

    const [documentoState, setDocumentos] = useState([])


    useEffect(() => {
        setDocumentos(
            documentos.map(d => {
                return {
                    select: false,
                    id: d.id,
                    nombre: d.nombre,
                    tipo_documento: d.tipo_documento
                }
            })
        )
    }, [documentos])

    const currentPage = (offset) => {
        let paginaActual = offset
        paginaActual = (paginaActual + 10) / 10
        console.log(paginaActual)
        setPage(paginaActual)
    }


    return (
        <div className="table-responsive-material">
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="left">
                            <Checkbox
                                onChange={e => {
                                    let checked = e.target.checked
                                    setDocumentos(
                                        documentoState.map(d => {
                                            d.select = checked
                                            return d
                                        })
                                    )
                                }}
                                color="primary"

                            />
                        </StyledTableCell>
                        <StyledTableCell align="left">Documento</StyledTableCell>
                        <StyledTableCell align="left"></StyledTableCell>
                        <StyledTableCell align="left">Clasificación</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {documentoState.map(documento => (
                        <ListaDocumento
                            key={documento.id}
                            documento={documento}
                            documentoState={documentoState}
                            setDocumentos={setDocumentos}
                        />
                    ))}
                </TableBody>

            </Table>

            <div className="d-flex justify-content-end mt-3">
                <PaginationComponent
                    count={count}
                    currentPage={currentPage}
                />

            </div>



        </div>
    )
}

export default TablaEntrenamiento