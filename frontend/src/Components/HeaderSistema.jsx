import React from 'react';

import '../Styles/HeaderSistema.css';
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
                <div className='HeaderSisContainer-HeaderSistema'>
                    <div className='HeaderSisContainer2-HeaderSistema'>
                        <div className='LogoSistema-HeaderSistema'>
                            <img className="logo-HeaderSistema" src="https://images.vexels.com/media/users/3/224155/isolated/preview/f4bbe191bcc833b27d7fa241220c470e-libro-en-logo-de-pantalla-by-vexels.png" />
                        </div>
                        <div className='titleSisRContainer-HeaderSistema'>
                            <h1 className='titleGeek-HeaderSistema'>Colegio Geek</h1>
                            <h3 className='SubtitleGeek-HeaderSistema'>{this.props.Title}</h3>
                        </div>
                        <div className='bContainer-HeaderSistema'>
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
                                <button className={`button ${this.props.classDis}`} >Regresar</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default withRouter(HeaderS);