import React, { Fragment, useState, useEffect } from 'react'

const Iframe = () => {
    const [dataIframe, setDataIframe] = useState({
        rutaDelPdf: 'https://storage.cloud.google.com/promising-haiku-264715-vcm/demo.pdf?authuser=0',
    })
    
    return (
        <div className="embed-responsive embed-responsive-1by1">
            <Fragment>
                <iframe className="embed-responsive-item"
                    title="framePdf"
                    src={dataIframe.rutaDelPdf}
                    allowFullScreen
                />
            </Fragment>
        </div>
    )
}

export default Iframe
