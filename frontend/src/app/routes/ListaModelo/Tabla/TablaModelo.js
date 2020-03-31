import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ListaModelo from './ListaModelo'

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
    minWidth: 700,
  },
});



const TablaModelo = ({modelos}) => {

  const classes = useStyles();

  return (
    <div className="table-responsive-material">
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Nombre</StyledTableCell>
            <StyledTableCell align="center">Proyecto ID</StyledTableCell>
            <StyledTableCell align="center">Descripción</StyledTableCell>
            <StyledTableCell align="center">Entrenamiento</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {modelos.map(modelo => (
            <ListaModelo
              key={modelo.id}
              modelo={modelo}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default TablaModelo