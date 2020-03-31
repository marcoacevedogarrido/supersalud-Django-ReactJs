import React from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';

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

const ListaUsuario = ({ usuario, key }) => {

  return (
    <StyledTableRow key={key}>
      <StyledTableCell align="left">{usuario.username}</StyledTableCell>
      <StyledTableCell align="left">{`${usuario.first_name} ${usuario.last_name}`}</StyledTableCell>
      <StyledTableCell align="left">{usuario.email}</StyledTableCell>
      <StyledTableCell align="left">{usuario.is_staff ? "Administrador" : "Usuario"}</StyledTableCell>
      <StyledTableCell align="center">
        {usuario.is_active ?
          <div className="badge text-uppercase text-white bg-finalizado">
            Activo
            </div>
          :
          <div className="badge text-uppercase text-white bg-danger">
            Inactivo
            </div>
        }
      </StyledTableCell>
    </StyledTableRow>
  )
}

export default ListaUsuario