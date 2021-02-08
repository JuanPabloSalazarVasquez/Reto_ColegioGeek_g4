import React from 'react';

import '../Styles/Header.css';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <div className="PadreHeader">
                    <div className="HeaderLogo HedLC">
                        <img className="logo" src="https://images.vexels.com/media/users/3/224155/isolated/preview/f4bbe191bcc833b27d7fa241220c470e-libro-en-logo-de-pantalla-by-vexels.png" />
                    </div>
                    <div className="titleHeader">
                        <h2 className="titleHeader-text">Colegio Geek</h2>
                    </div>
                    <nav id="Navar">
                        <Link to="/">
                            <button className="button">Inicio</button>
                        </Link>
                        <Link to="/login">
                            <button className="button">Login</button>
                        </Link>
                    </nav>
                </div>
            </>
        );
    }
}

