import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

const UserDetailCell = ({ data }) => {
  const { id, Usuario, Cantidad } = data;

  const imagen = 'https://via.placeholder.com/150x150'

  return (
    <tr
      tabIndex={-1}
      key={id}>
      <td className="border-bottom border-top-0">
        <div className="user-profile d-flex flex-row align-items-center">
          <Avatar
            alt={Usuario}
            src={imagen}
            className="user-avatar mr-2"
          />
          <div className="user-detail">
            <h5 className="user-name text-capitalize">{Usuario}</h5>
            {/* <p className="user-description">5</p> */}
          </div>
        </div>
      </td>
      <td className="text-right border-bottom border-top-0">
        {Cantidad > 1 ?
          <span className='jr-link badge text-white text-uppercase bg-pink'>{Cantidad} procesos</span>
          :
          <span className='jr-link badge text-white text-uppercase bg-pink'>{Cantidad} proceso</span>

        }

      </td>
      <td className="text-right border-bottom border-top-0">
        <IconButton className="icon-btn text-light p-1"><i className="zmdi zmdi-more-vert" /></IconButton>
      </td>
    </tr>

  );
};

export default UserDetailCell;
