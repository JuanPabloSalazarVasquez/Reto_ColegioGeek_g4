import React from 'react';

import '../Styles/Inicio_page.css';


export default class Main1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            estado: 1
        }
    }

    Cambio = () => {
        if (this.state.estado == 1) {
            document.getElementById("pCambio").innerHTML = "Dolor qui officia quo ullam magnam neque incidunt porro rem ex temporibus aperiam necessitatibus.";
            this.setState({
                estado: 2
            });
        } else if (this.state.estado == 2) {
            document.getElementById("pCambio").innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab hic iste odio distinctio tempora officiis asperiores.';
            this.setState({
                estado: 1
            });
        }
        return this;
    }

    render() {
        return (
            <>
                <div id="Main1Container">
                    <div id="Actualizaciones">
                        <div className="divTittle">
                            <p className="title">¡Bienvenido(a)!</p>
                        </div>
                        <div id="AJAAA">
                            <div className="espacio"><button className="b" onClick={this.Cambio}>←</button></div>
                            <div className="espacio" id="text">
                                <p id="pCambio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab hic iste odio distinctio tempora officiis asperiores.</p>
                            </div>
                            <div className="espacio"><button className="b" onClick={this.Cambio}>→</button></div>
                        </div>
                    </div>
                    <br/>
                    <div id="RedesSociales">
                        <div className="divTittle">
                            <p className="title">Redes Sociales</p>
                        </div>
                        <div id="redesContainer">
                            <img className="Inline" src="https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_1280.png" />
                            <img className="Inline" src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo-6.png" />
                            <img className="Inline" src="https://images.vexels.com/media/users/3/137419/isolated/preview/b1a3fab214230557053ed1c4bf17b46c-icono-de-twitter-logo-by-vexels.png" />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}