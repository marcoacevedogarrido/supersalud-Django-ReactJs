import React from 'react';
import Button from '@material-ui/core/Button';

const Footer = () => {
    let fecha = new Date();
    let ano = fecha.getFullYear();
    return (
      <footer className="app-footer">
        <span className="d-inline-block">Copyright &copy; Apiux {ano}  </span>
        <Button
          href="http://www.api-ux.com/"
          target="_blank"
          size="small"
          color="primary"
        >Apiux SPA</Button>
      </footer>
    );
  }
;

export default Footer;
