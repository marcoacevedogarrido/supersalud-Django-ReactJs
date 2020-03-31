import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const UrlDocumento = (props) => {

    const [url, setUrl] = useState("")

    useEffect(() => {
        const timeOutId = setTimeout(() => props.urlChange(url), 500);
        return () => clearTimeout(timeOutId);
    }, [url]);


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Url Externa
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="col-12">
                    <TextField
                        label="Url"
                        margin="normal"
                        fullWidth
                        value={url}
                        onChange={e => setUrl(e.target.value)}
                    />
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} variant="contained" color="primary"
                    className="jr-btn jr-btn-lg">
                    Cerrar
                            </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default UrlDocumento
