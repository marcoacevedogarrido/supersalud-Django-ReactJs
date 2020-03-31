import React, { useState, Fragment } from 'react';
import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardSubtitle,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane
} from 'reactstrap';

import SimpleList from './SimpleList'

import classnames from 'classnames';

function NavTabCards({ modelo }) {
    const [activeTab, setActiveTab] = useState('1')
    const toggle = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab)
        }
    }

    let entidades = modelo.entidades;
    let convertirArray = entidades.split(','); // split string on comma space
    let newEntidades = Object.assign({}, convertirArray);

    return (
        <Fragment>
            <div className="d-flex justify-content-center">
                <h2>{modelo.nombre}</h2>
            </div>

            <Card className="shadow border-0">

                <CardHeader className="bg-primary">
                    <Nav className="card-header-tabs" tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '1' })}
                                onClick={() => toggle('1')}
                            >
                                Documentos
              </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '2' })}
                                onClick={() => toggle('2')}
                            >
                                Detalles
              </NavLink>
                        </NavItem>
                    </Nav>
                </CardHeader>

                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <hr />
                        {Object.keys(newEntidades).map((keyName, i) => (
                            
                            <SimpleList
                            key={i}
                            keyName={newEntidades[keyName]}
                            />
                            // <li className="travelcompany-input" key={i}>
                            // <span className="input-label">key: {i} Name: </span>
                            // </li>
                        ))}
                        
                    </TabPane>

                    <TabPane tabId="2">
                        <CardBody>
                            <h3 className="card-title">Card Title Disabled</h3>
                        </CardBody>
                        <CardFooter>2 days ago</CardFooter>
                    </TabPane>
                </TabContent>

            </Card>
        </Fragment>
    );
}

export default NavTabCards