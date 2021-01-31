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
                            <div>
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
                                        <div className="Direc1 CardS">
                                            <img src='https://cdn0.iconfinder.com/data/icons/users-android-l-lollipop-icon-pack/24/group2-512.png' alt="Grupos" className='icono' />
                                        </div>
                                    </Link>
                                    <p className='pIcono'>Grupos</p>
                                </div>

                                <div>
                                    <Link to={{
                                        pathname: "/Directivos/Registro_Estudiantes",
                                        state: {
                                            Name: this.props.location.state.Name,
                                            Contraseña: this.props.location.state.Contraseña,
                                            Usuario: this.props.location.state.Usuario,
                                            Edad: this.props.location.state.Edad,
                                            Cargo: this.props.location.state.Cargo
                                        }
                                    }} >
                                        <div className="Direc2 CardS">
                                            <img src='https://cdn0.iconfinder.com/data/icons/education-flat-7/128/16_Bag-512.png' alt="Estudiantes" className='icono' />
                                        </div>
                                    </Link>
                                    <p className='pIcono'>Estudiantes</p>
                                </div>

                                
                            </div>
                            <div id="Grupo2">
                                <div>
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
                                        <div className="Direc3 CardS">
                                            <img src='https://cdn0.iconfinder.com/data/icons/education-flat-7/128/35_Glasses-512.png' alt="Maestros" className='icono' />
                                        </div>
                                    </Link>
                                    <p className='pIcono'>Maestros</p>
                                </div>

                                <div>
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
                                        <div className="Direc4 CardS">
                                            <img src='https://cdn0.iconfinder.com/data/icons/education-flat-7/128/07_Note_Book-512.png' alt="Materias" className='icono' />
                                        </div>
                                    </Link>
                                    <p className='pIcono'>Materias</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default withRouter(directivos_inicio);