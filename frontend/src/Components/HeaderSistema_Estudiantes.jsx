import React from 'react';

import '../Styles/HeaderSistema_Estudiantes.css';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

let hola = 0;
console.log(hola);

class HeaderSistema_Estudiantes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <div className='HeaderSisContainer-HeaderSistema_Estudiantes'>
                    <div className='HeaderSisContainer2-HeaderSistema_Estudiantes'>
                        <div id="LogoSistema" >
                            <img className="logo-HeaderSistema_Estudiantes" src="https://images.vexels.com/media/users/3/224155/isolated/preview/f4bbe191bcc833b27d7fa241220c470e-libro-en-logo-de-pantalla-by-vexels.png" />
                        </div>
                        <div className='titleSisRContainer-HeaderSistema_Estudiantes'>
                            <h1 className='titleGeek-HeaderSistema_Estudiantes'>Colegio Geek</h1>
                            <h3 className='SubtitleGeek-HeaderSistema_Estudiantes'>{this.props.Title}</h3>
                        </div>
                        <div className='bContainer-HeaderSistema_Estudiantes'>
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

export default withRouter(HeaderSistema_Estudiantes);