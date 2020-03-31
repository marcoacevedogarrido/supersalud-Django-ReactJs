import React from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';

import { mdiEye} from '@mdi/js'
import Icon from '@mdi/react'

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: 'rgb(33, 144, 171  )',
        color: 'rgb(39, 70, 77)',
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);


const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
        '&:hover': {
            backgroundColor: '#EDEDF3'
        }
    },
}))(TableRow);

const ListaDocumento = ({ documento, key, documentoState, setDocumentos }) => {
    return (
        <StyledTableRow key={key}>
            <StyledTableCell align="left">
                <Checkbox color="primary"
                    onChange={(event) => {
                        let checked = event.target.checked
                        setDocumentos(
                            documentoState.map(data => {
                                if (documento.id === data.id) {
                                    data.select = checked
                                }
                                return data
                            }))
                    }}
                    checked={documento.select}
                />
            </StyledTableCell>
            <StyledTableCell align="left">{documento.nombre}</StyledTableCell>
            <StyledTableCell align="left">
                {/* <Button variant="contained"
                    className="jr-btn jr-btn-lg bg-newcolor text-white">
                    <i className="zmdi zmdi-eye zmdi-hc-fw" />
                </Button> */}
                <Icon
                    path={mdiEye}
                    size={0.9}
                    color="	#749FCB"
                />
            </StyledTableCell>
            <StyledTableCell align="left">{documento.tipo_documento}</StyledTableCell>

        </StyledTableRow>
    )
}

export default ListaDocumento