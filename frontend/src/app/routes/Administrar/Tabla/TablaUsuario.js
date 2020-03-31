import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ListaUsuario from './ListaUsuario'

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

const BasicTable = ({ usuarios }) => {

  const classes = useStyles();

  return (
    <div className="table-responsive-material">
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Username</StyledTableCell>
            <StyledTableCell align="left">Nombre</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">Rol</StyledTableCell>
            <StyledTableCell align="left">Estado</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usuarios.map(usuario => (
            <ListaUsuario
              key={usuario.id}
              usuario={usuario}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default BasicTable