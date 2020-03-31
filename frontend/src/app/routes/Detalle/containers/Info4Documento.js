import React, { Fragment, useEffect, useState } from 'react'
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import ChartCard from "../ChartCard";
import { increamentData } from "../mdata";

import Spinner from 'constants/Spinner/Spinner'

import { connect, useSelector, useDispatch } from 'react-redux'

import { get4Filter } from 'actions/DetalleProceso/DetalleProcesoActions'


const Info4Documento = ({ id, reload }) => {

    const distpatch = useDispatch()

    useEffect(() => {
        distpatch(get4Filter(id))
    }, [reload])

    const datos = useSelector(state => state.datos.datos)
    const loading = useSelector(state => state.datos.loading)
    const error = useSelector(state => state.datos.error)
    const count = useSelector(state => state.datos.count)


    return (
        <Fragment>
            {error ?

                <div className="col d-flex justify-content-center">
                    <h3>Error al cargar componente</h3>
                </div>
                :

                loading ?

                    <div className="col d-flex justify-content-center">
                        <Spinner />
                    </div>
                    :
                    <Fragment>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                            <ChartCard chartProperties={{
                                title: 'Separar',
                                prize: datos.separado,
                                icon: 'stats',
                                bgColor: 'indigo',
                                styleName: 'up',
                                desc: 'Documentos Separados',
                                percent: datos.porcentajeSeparados
                            }}
                                children={<ResponsiveContainer width="100%" height={75}>
                                    <AreaChart data={increamentData}
                                        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                                        <Area dataKey='pv' strokeWidth={0} stackId="2" stroke='#273894' fill="#273894"
                                            fillOpacity={1} />
                                    </AreaChart>
                                </ResponsiveContainer>}

                            />
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                            <ChartCard
                                chartProperties={{
                                    title: 'TOTAL CLASIFICADOS',
                                    prize: datos.clasificado,
                                    icon: 'stats',
                                    bgColor: 'pink accent-2',
                                    styleName: 'up',
                                    desc: 'Documentos Clasificados ',
                                    percent: datos.porcentajeClasificados
                                }}
                                children={<ResponsiveContainer width="100%" height={75}>
                                    <AreaChart data={increamentData}
                                        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                                        <Area dataKey='pv' type='monotone' strokeWidth={0} stackId="2" stroke='#da2361'
                                            fill='#da2361'
                                            fillOpacity={1} />
                                    </AreaChart>
                                </ResponsiveContainer>}
                            />
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                            <ChartCard
                                chartProperties={{
                                    title: 'OCR',
                                    prize: datos.texto_extraido,
                                    icon: 'stats',
                                    bgColor: 'info',
                                    styleName: 'down',
                                    desc: 'Docs con Texto Extraido',
                                    percent: datos.porcentajeTextos
                                }}
                                children={<ResponsiveContainer width="100%" height={75}>
                                    <AreaChart data={increamentData}
                                        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                                        <Area dataKey='pv' strokeWidth={0} stackId="2" stroke='#0c8e9f' fill='#0c8e9f'
                                            fillOpacity={1} />
                                    </AreaChart>
                                </ResponsiveContainer>}
                            />
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                            <ChartCard
                                chartProperties={{
                                    title: 'ENTIDAD EXTRAIDA',
                                    prize: datos.entidades,
                                    icon: 'stats',
                                    bgColor: 'success',
                                    styleName: 'down',
                                    desc: 'Docs con Entidad Extraida',
                                    percent: datos.porcentajeEntidad_extraidas
                                }}
                                children={<ResponsiveContainer width="100%" height={75}>
                                    <AreaChart data={increamentData}
                                        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                                        <Area dataKey='pv' strokeWidth={0} stackId="2" stroke='#3a983e' fill='#3a983e'
                                            fillOpacity={1} />
                                    </AreaChart>
                                </ResponsiveContainer>}
                            />
                        </div>
                    </Fragment>
            }
        </Fragment>
    )
}


export default Info4Documento
