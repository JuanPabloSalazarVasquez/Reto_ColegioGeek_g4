import React from 'react';

import '../Styles/HeaderSistema_Maestros.css';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

let hola = 0;
console.log(hola);

class HeaderSistema_Maestros extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <div className="HeaderSisContainer-HeaderSistema_Maestros">
                    <div className="HeaderSisContainer2-HeaderSistema_Maestros">
                        <div className='LogoSistema-HeaderSistema_Maestros' >
                            <img className="logo-HeaderSistema_Maestros" src="https://images.vexels.com/media/users/3/224155/isolated/preview/f4bbe191bcc833b27d7fa241220c470e-libro-en-logo-de-pantalla-by-vexels.png" />
                        </div>
                        <div className='titleSisRContainer-HeaderSistema_Maestros'>
                            <h1 className='titleGeek-HeaderSistema_Maestros'>Colegio Geek</h1>
                            <h3 className='SubtitleGeek-HeaderSistema_Maestros'>{this.props.Title}</h3>
                        </div>
                        <div className='bContainer-HeaderSistema_Maestros'>
                            <Link to={{
                                pathname: this.props.pathname,
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

export default withRouter(HeaderSistema_Maestros);