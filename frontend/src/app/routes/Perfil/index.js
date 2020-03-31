import React from 'react'
import ContainerHeader from 'components/ContainerHeader';

// 
import PerfilUsuario from './PerfilUsuario'




const Perfil = ({match}) => {

    return (
        <div className="app-wrapper">
            <ContainerHeader match={match} title="Perfil" />
                    <PerfilUsuario />
              
        </div>
    );

}

export default Perfil