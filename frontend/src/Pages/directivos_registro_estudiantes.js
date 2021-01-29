import React from 'react';

import HeaderSistema from '../Components/HeaderSistema';
import Directivos_registro_estudiantes from '../Components/Directivos_registro_estudiantes';

import '../Styles/RegistroEstudiantes.css';

import {Estudiantes} from '../Utiles/Mocks/Estudiantes';
import {withRouter} from 'react-router-dom';



class directivos_registro_estudiantes extends React.Component {
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
                    <HeaderSistema Title = "Registro de estudiantes" 
                    InfoUsurio = {[{
                        Name: this.props.location.state.Name,
                        Contraseña: this.props.location.state.Contraseña,
                        Usuario: this.props.location.state.Usuario,
                        Edad: this.props.location.state.Edad,
                        Cargo: this.props.location.state.Cargo
                    }]}

                    />
                    <Directivos_registro_estudiantes 
                    Estudiantes = {Estudiantes}
                    InfoUsurio = {[{
                        Name: this.props.location.state.Name,
                        Contraseña: this.props.location.state.Contraseña,
                        Usuario: this.props.location.state.Usuario,
                        Edad: this.props.location.state.Edad,
                        Cargo: this.props.location.state.Cargo
                    }]}
                    />
            </>
        );
    }
}

export default withRouter(directivos_registro_estudiantes);