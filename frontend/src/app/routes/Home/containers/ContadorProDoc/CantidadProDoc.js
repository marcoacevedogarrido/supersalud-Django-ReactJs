import React, { useEffect, Fragment } from 'react'

// COMPONENT
import FourCards from './FourCards'

// REDUX
import { connect, useSelector } from 'react-redux';
import { getCount } from '../../../../../actions/Dashboard/dashProcesosActions'

import Spinner from 'constants/Spinner/Spinner'

const CantidadProDoc = ({ dispatch }) => {


    useEffect(() => {
        const getCountApi = () => dispatch(getCount());
        getCountApi();
    }, []);

    const loading = useSelector(state => state.countProceDash.loading)
    const countPro = useSelector(state => state.countProceDash.countProceDash)
    const error = useSelector(state => state.countProceDash.error)
    return (
        <Fragment>
            {error ?

                <div className="col d-flex justify-content-center">
                    <h3>Error al cargar componente</h3>
                </div>

                :

                loading ? (
                    <div className="col d-flex justify-content-center">
                        <Spinner />
                    </div>
                )
                    :
                    <FourCards
                        countPro={countPro}
                    />

            }
        </Fragment>
    )
}

export default connect()(CantidadProDoc)


