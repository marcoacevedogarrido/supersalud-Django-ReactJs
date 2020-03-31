import React, { Fragment } from 'react';
import { Card, CardFooter, CardHeader, CardText } from 'reactstrap';

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from 'react-router-dom'

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';



import Button from '@material-ui/core/Button';


const styles = theme => ({
    root: {
        display: 'flex',
    }
})

const ModeloCard = ({ cardStyle, key, modelo }) => {
    return (
        <Card className={`shadow border-0 ${cardStyle}`}>
            <CardHeader className="bg-teal text-white">{modelo.nombre}</CardHeader>

            <CardText>
                <List key={key}>
                    {modelo.tipoDoc_modelo.map(tipo_doc =>
                        <Fragment>
                            <ListItem >
                                <ListItemText className="br-break" primary={<h4 className="font-weight-bold">{tipo_doc.nombre}</h4>}
                                    secondary={
                                        <Fragment>
                                            <div className="row">
                                                <div className="col-12">
                                                    {Object.entries(tipo_doc.entidades_doc).map(([key, modelo_entidad]) => (
                                                        <Button key={key} variant="contained" fu className="mr-2 mt-2 jr-btn jr-btn-xs bg-modelo text-blue-grey ">{modelo_entidad.nombre}</Button>
                                                    ))}
                                                </div>
                                            </div>
                                        </Fragment>} />
                            </ListItem>

                        </Fragment>
                    )}

                </List>
            </CardText>


            <CardFooter style={{ backgroundColor: '#fff'}} >
            
                {modelo.reentrenar ? 
                
                <BottomNavigation showLabels
                className={'flex-wrap bottom-navigation float-left '}>
                
                <BottomNavigationAction 
                label="Reentrenamiento "
                component={Link}
                to={`entrenamiento/${modelo.id}`}
                style={{ textDecoration: 'none' }}
                icon={<RestoreIcon />} />
                <BottomNavigationAction 
                label=" "
                disabled
                />
                
                <BottomNavigationAction label="Matriz " icon={<LocationOnIcon />} />
            </BottomNavigation>
        
            
            
                :

                <BottomNavigation 
                showLabels
                className={'flex-wrap bottom-navigation float-left'}>
                <BottomNavigationAction 
                label="Reentrenamiento"
                disabled
                style={{ textDecoration: 'none' }}
                icon={<RestoreIcon />} />
                <BottomNavigationAction 
                label=" "
                disabled
                />
                <BottomNavigationAction label="Matriz" disabled icon={<LocationOnIcon />} />
            </BottomNavigation>
        


                }

            </CardFooter>
        </Card>
    )
}

export default ModeloCard
