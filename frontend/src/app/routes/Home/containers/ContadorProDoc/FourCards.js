import React, { Fragment } from 'react'

import Widget from "components/Widget/index";

const FourCards = ({ countPro }) => {
    return (
        <Fragment>
            {/* PRIMERO */}
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                <Widget styleName='p-3 bg-primary text-white '>

                    <div className=" media align-items-center flex-nowrap py-lg-2">
                        <div className="mr-3">

                            <img src={require('assets/images/dashboard/tasks-icon.png')}
                                alt={require('assets/images/dashboard/tasks-icon.png')} />

                        </div>
                        <div className="media-body">
                            <h1 className="jr-fs-xxl jr-font-weight-black mb-1 text-white">
                                {countPro.procesos_mensuales}
                            </h1>
                            <p className="mb-0 jr-fs-cp">Procesos Mensuales</p>
                        </div>
                    </div>
                </Widget>
            </div>
            {/* SEGUNDO */}
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                <Widget styleName={`p-3 bg-secondary text-white`}>
                    <div className="media align-items-center flex-nowrap py-lg-2">
                        <div className="mr-3">
                        <img src={require('assets/images/dashboard/tasks-icon.png')}
                                alt={require('assets/images/dashboard/tasks-icon.png')} />
                        </div>
                        <div className="media-body">
                            <h1 className="jr-fs-xxl jr-font-weight-black mb-1 text-white">
                                {countPro.procesos_anuales}
                            </h1>
                            <p className="mb-0 jr-fs-cp">Procesos Anuales</p>
                        </div>
                    </div>
                </Widget>
            </div>

            {/* TERCERO */}
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                <Widget styleName={`p-3 bg-info text-white`}>
                    <div className=" media align-items-center flex-nowrap py-lg-2">
                        <div className="mr-3">
                        <img src={require('assets/images/dashboard/files-icon.png')}
                                alt={require('assets/images/dashboard/files-icon.png')} />
                        </div>
                        <div className="media-body">
                            <h1 className="jr-fs-xxl jr-font-weight-black mb-1 text-white">
                                {countPro.documentos_mensuales}
                            </h1>
                            <p className="mb-0 jr-fs-cp">Docs Mensuales</p>
                        </div>
                    </div>
                </Widget>
                {/* CUARTO */}
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                <Widget styleName={`p-3 bg-warning text-white`}>
                    <div className="media align-items-center flex-nowrap py-lg-2">
                        <div className="mr-3">
                            <img src={require('assets/images/dashboard/files-icon.png')}
                                alt={require('assets/images/dashboard/files-icon.png')} />
                        </div>
                        <div className="media-body">
                            <h1 className="jr-fs-xxl jr-font-weight-black mb-1 text-white">
                                {countPro.documentos_anuales}
                            </h1>
                            <p className="mb-0 jr-fs-cp">Docs Anuales</p>
                        </div>
                    </div>
                </Widget>
            </div>

        </Fragment>
    )
}
export default FourCards