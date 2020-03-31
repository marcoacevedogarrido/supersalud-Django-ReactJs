import React, { Fragment, useEffect } from 'react'
import Spinner from '../../../../../constants/Spinner/Spinner'
import RestoreIcon from '@material-ui/icons/Restore';

import { Link } from 'react-router-dom'

import ChartPie from './ChartPie';



const ResultadoClasiHeader = ({ proceso, id, reload}) => {


    return (
        <Fragment>
            {!proceso.fecha_ultima_clasificacion ?
                <div className="col-6">
                    <div className="jr-card">
                        <div className="col d-flex justify-content-center">
                            <Spinner />
                        </div>
                    </div>
                </div>
                :
                <div className="col-6">
                    <div className="jr-card">
                        <div className="row mb-md-3">
                            <div className="col-10">
                                <h3> Resultado Clasificación </h3>
                            </div>
                            <div className="col-2">
                                <Link to={`${id}`}
                                    style={{
                                        textDecoration: 'none'

                                    }}>
                                    <RestoreIcon style={{
                                        textDecoration: 'none'

                                    }} />
                                </Link>
                            </div>
                        </div>
                        <p className="text-grey mb-4">
                            Fecha Última Clasificación : {(new Date(proceso.fecha_ultima_clasificacion)).toLocaleDateString()}
                        </p>
                        <ChartPie
                            id={id}
                            reload={reload}
                        />
                    </div>
                </div>
            }
        </Fragment >
    )
}

export default ResultadoClasiHeader