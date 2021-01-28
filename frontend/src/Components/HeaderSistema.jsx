import React from 'react';

import '../Styles/RegistroEstudiantes.css';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

let hola = 0;
console.log(hola);

class HeaderS extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <div id="HeaderSisContainer">
                    <div id="HeaderSisContainer2">
                        <div id="LogoSistema" >
                            <img className="logo" src="https://images.vexels.com/media/users/3/224155/isolated/preview/f4bbe191bcc833b27d7fa241220c470e-libro-en-logo-de-pantalla-by-vexels.png" />
                        </div>
                        <div id="titleSisRContainer">
                            <h1 id="titleQuipux">Quipux Academy</h1>
                            <h3 id="SubtitleQuipux">{this.props.Title}</h3>
                        </div>
                        <div id="bContainer">
                            <Link to={{
                                pathname: "/Directivos",
                                state: {
                                    Name: this.props.location.state.Name,
                                    Contraseña: this.props.location.state.Contraseña,
                                    Usuario: this.props.location.state.Usuario,
                                    Edad: this.props.location.state.Edad,
                                    Cargo: this.props.location.state.Cargo
                                }
                            }}>
                                <button className={`button ${this.props.classDis}`} >Atras</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default withRouter(HeaderS);