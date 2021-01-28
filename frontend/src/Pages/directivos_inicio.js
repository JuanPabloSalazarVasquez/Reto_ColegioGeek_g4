import React from 'react';
import Profile from '../Components/Profile';

import '../Styles/Directivos.css';

import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class directivos_inicio extends React.Component {
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
                <div id="DirectivosContainer">
                    <div id="DirectivosGrid">
                        <div id="ProfileCont">
                            <Profile
                                Name={this.state.Name}
                                Edad={this.state.Edad} />
                        </div>
                        <div id="CardsCont">
                            <div id="Grupo1">
                                <Link to={{ 
                                    pathname:"/Directivos/Registro_Estudiantes",
                                    state: {
                                        Name: this.props.location.state.Name,
                                        Contraseña: this.props.location.state.Contraseña,
                                        Usuario: this.props.location.state.Usuario,
                                        Edad: this.props.location.state.Edad,
                                        Cargo: this.props.location.state.Cargo
                                      }   
                                    }} >
                                <div id="Direc1" className="CardS"></div>
                                </Link>
                                <Link to={{
                                    pathname: "/Directivos/Registro_Maestros",
                                    state: {
                                        Name: this.props.location.state.Name,
                                        Contraseña: this.props.location.state.Contraseña,
                                        Usuario: this.props.location.state.Usuario,
                                        Edad: this.props.location.state.Edad,
                                        Cargo: this.props.location.state.Cargo
                                    }
                                }}>
                                <div id="Direc2" className="CardS"></div>
                                </Link>
                                <Link to={{
                                    pathname: "/Directivos/Registro_Grupos",
                                    state: {
                                        Name: this.props.location.state.Name,
                                        Contraseña: this.props.location.state.Contraseña,
                                        Usuario: this.props.location.state.Usuario,
                                        Edad: this.props.location.state.Edad,
                                        Cargo: this.props.location.state.Cargo
                                    }
                                }}>
                                <div id="Direc3" className="CardS"></div>
                                </Link>
                            </div>
                            <div id="Grupo2">
                                <Link to={{
                                    pathname: "/Directivos/Registro_Materias",
                                    state: {
                                        Name: this.props.location.state.Name,
                                        Contraseña: this.props.location.state.Contraseña,
                                        Usuario: this.props.location.state.Usuario,
                                        Edad: this.props.location.state.Edad,
                                        Cargo: this.props.location.state.Cargo     
                                    }
                                }}> 
                                <div id="Direc4" className="CardS"></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default withRouter(directivos_inicio);