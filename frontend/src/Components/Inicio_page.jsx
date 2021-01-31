//Página del carrusel: https://www.npmjs.com/package/react-responsive-carousel
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // require loader
import { Carousel } from 'react-responsive-carousel';

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
            document.getElementById("pCambio").innerHTML = "No olvide selecionar su estatus de directivo, maestro o estudiante";
            this.setState({
                estado: 2
            });
        } else if (this.state.estado == 2) {
            document.getElementById("pCambio").innerHTML = '¡Bienvenido al sistema de Colegio Geek! <br/> <br/> Haga click en el botón de Login para ingresar a la plataforma.';
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
                                <p id="pCambio">¡Bienvenido al sistema de Colegio Geek! <br /> <br /> Haga click en el botón de Login para ingresar a la plataforma.</p>
                            </div>
                            <div className="espacio"><button className="b" onClick={this.Cambio}>→</button></div>
                        </div>
                    </div>
                    <br />
                    <div id="RedesSociales">
                        <div className="divTittle">
                            <p className="title">Redes Sociales</p>
                        </div>
                        <div id="redesContainer">
                            <div className="redes">
                                <img className="vertical" src="https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_1280.png" />
                                <img className="vertical" src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo-6.png" />
                                <img className="vertical" src="https://images.vexels.com/media/users/3/137419/isolated/preview/b1a3fab214230557053ed1c4bf17b46c-icono-de-twitter-logo-by-vexels.png" />
                            </div>
                            <Carousel showThumbs={false} className="carousel">
                                <div>
                                    <img src="https://www.irishtimes.com/polopoly_fs/1.4440992.1608321267!/image/image.jpg_gen/derivatives/box_620_330/image.jpg" />
                                </div>
                                <div>
                                    <img src="https://media.edutopia.org/styles/responsive_2880px_16x9/s3/masters/2019-07/iStock-1045325476.jpg" />
                                </div>
                                <div>
                                    <img src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1225062688%2F0x0.jpg" />
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}