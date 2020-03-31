import React, { Fragment, useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField';

const Metadatos = ({ metadata }) => {

    return (
        <Fragment>
            {metadata === undefined || null
                ?
                <h4 className="mb-0">Sin Metadatos...</h4>
                :
            Object.keys(metadata).length === 0 ?
                
            <h4 className="mb-0">Sin Metadatos...</h4>
            
                :
                <form className="row" noValidate autoComplete="off">
                    {Object.keys(metadata).map((item, i) => (
                        <div className="col-md-6 col-12">
                            <TextField
                                key={i}
                                id={metadata[item].nombre}
                                label={metadata[item].nombre.toUpperCase()}
                                margin="normal"
                                fullWidth
                                value={metadata[item].texto}
                            />
                        </div>
                    ))}
                </form>
            }
        </Fragment>
    )
}

export default Metadatos
