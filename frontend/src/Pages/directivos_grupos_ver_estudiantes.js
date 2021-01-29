import React from 'react';
import {withRouter} from 'react-router-dom';
import MainRS4 from '../Components/MainRS4';

import HeaderSistema from '../Components/HeaderSistema';
class directivos_grupos_ver_estudiantes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (
            <>
            <HeaderSistema classDis="Dis"/>
            <MainRS4 
            InfoUsurio = {[{
                Name: this.props.location.state.Name,
                Contraseña: this.props.location.state.Contraseña,
                Usuario: this.props.location.state.Usuario,
                Edad: this.props.location.state.Edad,
                Cargo: this.props.location.state.Cargo,
                CodGrupo: this.props.location.state.CodGrupo,
                Grado: this.props.location.state.Grado
            }]}
            />
            </>
         );
    }
}
 
export default withRouter(directivos_grupos_ver_estudiantes);