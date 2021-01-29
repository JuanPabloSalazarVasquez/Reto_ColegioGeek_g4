import React from 'react';

import HeaderSistema from '../Components/HeaderSistema';
import Directivos_registro_grupos from '../Components/Directivos_registro_grupos';

import '../Styles/RegistroEstudiantes.css';

import {Grupos} from '../Utiles/Mocks/Grupos';
import {withRouter} from 'react-router-dom';

class directivos_registro_grupos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: this.props.location.state.Name,
            Contraseña: this.props.location.state.Contraseña,
            Usuario: this.props.location.state.Usuario,
            Edad: this.props.location.state.Edad,
            Cargo: this.props.location.state.Cargo
        }
    }
    render() {
        return (
            <>
                    <HeaderSistema Title = "Registro de grupos" 
                    InfoUsurio = {[{
                        Name: this.props.location.state.Name,
                        Contraseña: this.props.location.state.Contraseña,
                        Usuario: this.props.location.state.Usuario,
                        Edad: this.props.location.state.Edad,
                        Cargo: this.props.location.state.Cargo
                    }]}
                    />
                    <Directivos_registro_grupos Grupos ={Grupos}/>
            </>
        );
    }
}

export default withRouter(directivos_registro_grupos);