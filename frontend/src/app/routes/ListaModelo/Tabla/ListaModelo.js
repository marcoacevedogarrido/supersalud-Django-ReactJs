import React from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';

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

const ListaModelo = ({ modelo, key }) => {

  return (
    <StyledTableRow key={key}>
      <StyledTableCell align="center">{modelo.nombre}</StyledTableCell>
      <StyledTableCell align="center">{modelo.proyecto_id}</StyledTableCell>
      <StyledTableCell align="center">{modelo.descripcion}</StyledTableCell>
      <StyledTableCell align="center">
        <Link to={`entrenamiento/${modelo.id}`} style={{ textDecoration: 'none' }}>
          <Button variant="contained" className="jr-btn">Ver</Button>
        </Link>
      </StyledTableCell>
    </StyledTableRow>
  )
}

export default ListaModelo