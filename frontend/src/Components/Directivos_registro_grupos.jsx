/* eslint-disable eqeqeq */
/* eslint-disable no-array-constructor */
import React from 'react';
import axios from 'axios';

import '../Styles/RegistroEstudiantes.css';
import { Grupos } from '../Utiles/Mocks/Grupos';
import { Maestros } from '../Utiles/Mocks/Maestros';

import { withRouter, Link , Redirect } from 'react-router-dom';

let arry = new Array();
let arry2 = new Array();
for (let i = 0; i < Maestros.length; i++) {
    if (Maestros[i].Director == "No") {
        arry[i] = Maestros[i].Name + " " + Maestros[i].Apellido;
    } else {
        arry2[i] = Maestros[i].Name + " " + Maestros[i].Apellido;
    }
}


const Año = new Date();
const AñoY = Año.getFullYear();
const AñoM = Año.getMonth() + 1;
const AñoD = Año.getDate();
let GradoNum;

class Directivos_registro_grupos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Bool: false,
            Grupos: Grupos
        }
    }

    form = () => {
        document.getElementById("RegistroEsContainer").style.filter = "blur(1px)";
        document.getElementById("Form").style.display = "flex";
        document.getElementById("Form").style.zIndex = "60";
    }

    Push_ = () => {
        let Grado;
        let Director = document.getElementById("DirectorNull").value;
         GradoNum = document.getElementById("GradoIn").value;
        /*SEXTO*/
        if (GradoNum == "06") {
            Grado = "Sexto"
            Grupos[0].push({
                CodGrupo: AñoY + GradoNum + (((this.state.Grupos[0].length + 1).toString()).padStart(2, 0)),
                Grado: Grado,
                Grupo: Grado + " " + this.state.Grupos[0].length + 1,
                Director: Director,
                CEstudiantes: 0
            });
            for (let i = 0; i < Maestros.length; i++) {
                if ((Maestros[i].Name + " " + Maestros[i].Apellido) == Director) {
                    Maestros[i].Director = "Si";
                    Maestros[i].Grupo_D = AñoY + GradoNum + (((this.state.Grupos[0].length + 1).toString()).padStart(2, 0));
                }
            }
            /*SEPTIMO*/
        } else if (GradoNum == "07") {
            Grado = "Septimo"
            Grupos[1].push({
                CodGrupo: AñoY + GradoNum + (((this.state.Grupos[1].length + 1).toString()).padStart(2, 0)),
                Grado: Grado,
                Grupo: Grado + " " + this.state.Grupos[1].length + 1,
                Director: Director,
                CEstudiantes: 0
            }); for (let i = 0; i < Maestros.length; i++) {
                if ((Maestros[i].Name + " " + Maestros[i].Apellido) == Director) {
                    Maestros[i].Director = "Si";
                    Maestros[i].Grupo_D = AñoY + GradoNum + (((this.state.Grupos[1].length + 1).toString()).padStart(2, 0));
                }
            }
            /*OCTAVO*/
        } else if (GradoNum == "08") {
            Grado = "Octavo"
            Grupos[2].push({
                CodGrupo: AñoY + GradoNum + (((this.state.Grupos[2].length + 1).toString()).padStart(2, 0)),
                Grado: Grado,
                Grupo: Grado + " " + this.state.Grupos[2].length + 1,
                Director: Director,
                CEstudiantes: 0
            }); for (let i = 0; i < Maestros.length; i++) {
                if ((Maestros[i].Name + " " + Maestros[i].Apellido) == Director) {
                    Maestros[i].Director = "Si";
                    Maestros[i].Grupo_D = AñoY + GradoNum + (((this.state.Grupos[2].length + 1).toString()).padStart(2, 0));
                }
            }
            /*NOVENO*/
        } else if (GradoNum == "09") {
            Grado = "Noveno"
            Grupos[3].push({
                CodGrupo: AñoY + GradoNum + (((this.state.Grupos[3].length + 1).toString()).padStart(2, 0)),
                Grado: Grado,
                Grupo: Grado + " " + this.state.Grupos[3].length + 1,
                Director: Director,
                CEstudiantes: 0
            }); for (let i = 0; i < Maestros.length; i++) {
                if ((Maestros[i].Name + " " + Maestros[i].Apellido) == Director) {
                    Maestros[i].Director = "Si";
                    Maestros[i].Grupo_D =  AñoY + GradoNum + (((this.state.Grupos[3].length + 1).toString()).padStart(2, 0));
                }
            }
            /*DECIMO*/
        } else if (GradoNum == "10") {
            Grado = "Decimo"
            Grupos[4].push({
                CodGrupo: AñoY + GradoNum + (((this.state.Grupos[4].length + 1).toString()).padStart(2, 0)),
                Grado: Grado,
                Grupo: Grado + " " + this.state.Grupos[4].length + 1,
                Director: Director,
                CEstudiantes: 0
            }); for (let i = 0; i < Maestros.length; i++) {
                if ((Maestros[i].Name + " " + Maestros[i].Apellido) == Director) {
                    Maestros[i].Director = "Si";
                    Maestros[i].Grupo_D = AñoY + GradoNum + (((this.state.Grupos[4].length + 1).toString()).padStart(2, 0));
                }
            }
            /*DECIMO*/
        } else if (GradoNum == "11") {
            Grado = "Once"
            Grupos[5].push({
                CodGrupo: AñoY + GradoNum + (((this.state.Grupos[5].length + 1).toString()).padStart(2, 0)),
                Grado: Grado,
                Grupo: Grado + " " + this.state.Grupos[5].length + 1,
                Director: Director,
                CEstudiantes: 0
            }); for (let i = 0; i < Maestros.length; i++) {
                if ((Maestros[i].Name + " " + Maestros[i].Apellido) == Director) {
                    Maestros[i].Director = "Si";
                    Maestros[i].Grupo_D = AñoY + GradoNum + (((this.state.Grupos[5].length + 1).toString()).padStart(2, 0));
                }
            }
        }

        for (let i = 0; i < Maestros.length; i++) {
            if (Maestros[i].Director == "No") {
                arry[i] = Maestros[i].Name + " " + Maestros[i].Apellido;
            } else {
                arry2[i] = Maestros[i].Name + " " + Maestros[i].Apellido;
            }
        }

        document.getElementById("Form").style.display = "none";
        document.getElementById("RegistroEsContainer").style.filter = "blur(0)";

        this.setState({
            Bool: true
            
        });
        
        return this;
    }

    Cambio = () =>{
        document.getElementById("Form").style.display = "none";
        document.getElementById("RegistroEsContainer").style.filter = "blur(0)";
    }

<<<<<<< HEAD
    PostGrupo(){
        axios.post(``, { id_estudiante: this.state.id_estudiante, id_consolidado: this.state.id_consolidado})
=======
    //Petición get para obtener los grupos existentes
    componentDidMount(){
        axios.get(`http://localhost:4535/grupos/directivos-ver-grupos/${this.state.id_directivo}`)
>>>>>>> d43b4309ec29fdbf8ffebb17284f3d9129261e03
          .then(res =>{
            console.log(res.data)
            this.setState({
              datos: res.data
            })
        }).catch(err=>{
          console.log(err.massage)
        })
<<<<<<< HEAD
    }

// Este es el get para traer todos los grupos registrados
    componentDidMount(){
        axios.get(``, { id_estudiante: this.state.id_estudiante, id_consolidado: this.state.id_consolidado})
=======
      }
    //Fin get
    
    //Petición post para agregar nuevos grupos
    post_grupo(){
        axios.post(`http://localhost:4535/grupos/directivos-nuevo-grupo/${this.state.id_directivo}`, {  })
>>>>>>> d43b4309ec29fdbf8ffebb17284f3d9129261e03
          .then(res =>{
            console.log(res.data)
            this.setState({
              datos: res.data
            })
        }).catch(err=>{
          console.log(err.massage)
        })
      }
<<<<<<< HEAD

=======
    //Fin post
>>>>>>> d43b4309ec29fdbf8ffebb17284f3d9129261e03

    render() {

        return (
            <>
                <div id="Form">
                    <div id="Form2">
                        <div id="Form2_2">
                            <div className="Form2_2_2">
                                <select className="REInput" id="GradoIn">
                                    <option value="0" className="Dis">Grado</option>
                                    <option value="06">Sexto</option>
                                    <option value="07">Septimo</option>
                                    <option value="08">Octavo</option>
                                    <option value="09">Noveno</option>
                                    <option value="10">Decimo</option>
                                    <option value="11">Once</option>
                                </select>
                                <select className="REInput" id="DirectorNull">
                                    <option className="REInput Dis">Director</option>
                                    {arry.map((Esito, index) => {
                                        return (
                                            <option key={index} value={Esito}>{Esito}</option>
                                        );
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="Form2_2_2">
                            <input onClick={this.Push_} className="REInput" type="button" value="Agregar" />
                            {this.state.Bool && <Redirect to={{
                                pathname: "/directivos/registro_Grupos",
                                state: {
                                    Name: this.props.location.state.Name,
                                    Contraseña: this.props.location.state.Contraseña,
                                    Usuario: this.props.location.state.Usuario,
                                    Edad: this.props.location.state.Edad,
                                    Cargo: this.props.location.state.Cargo
                                }
                            }}>
                            </Redirect>}
                            <input type="button" onClick={this.Cambio} className="REInput" value="Cancelar" />
                        </div>

                    </div>
                </div>

                <div id="RegistroEsContainer">
                    <div className="FiltrosREstudiante">
                        <select className="SelectR">
                            <option value="0" className="Dis">Cod Grupo</option>
                            {Grupos[0].map((Esito, index) => {
                                return (
                                    <option key={index}>{Esito.CodGrupo}</option>
                                );
                            })}{Grupos[1].map((Esito, index) => {
                                return (
                                    <option key={index}>{Esito.CodGrupo}</option>
                                );
                            })}{Grupos[2].map((Esito, index) => {
                                return (
                                    <option key={index}>{Esito.CodGrupo}</option>
                                );
                            })}{Grupos[3].map((Esito, index) => {
                                return (
                                    <option key={index}>{Esito.CodGrupo}</option>
                                );
                            })}{Grupos[4].map((Esito, index) => {
                                return (
                                    <option key={index}>{Esito.CodGrupo}</option>
                                );
                            })}{Grupos[5].map((Esito, index) => {
                                return (
                                    <option key={index}>{Esito.CodGrupo}</option>
                                );
                            })}
                        </select>
                        <select className="SelectR MinMin">
                            <option value="0" className="Dis">Grado</option>
                            <option value="Sexto">Sexto</option>
                            <option value="Septimo">Septimo</option>
                            <option value="Octavo">Octavo</option>
                            <option value="Noveno">Noveno</option>
                            <option value="Decimo">Decimo</option>
                            <option value="Once">Once</option>
                        </select>
                        <select className="SelectR More">
                            <option value="0" className="Dis">Director</option>
                            {arry2.map((Esito, index) => {
                                return (
                                    <option key={index}>{Esito}</option>
                                );
                            })}
                        </select>
                        <input type="number" className="GrupoF Min" placeholder="Cant E" autoComplete="off" />
                        <div className="SelectR AñoInsF">
                            <p>Estudiantes</p>
                        </div>
                        <input id="ImgRMas" type="button" onClick={this.form} />
                    </div>
                    <div id="CardsContainerReEs">
                        {Grupos[0].map((Esito, index) => {
                            return (
                                <div key={index} className="FiltrosREstudiante">
                                    <div className="SelectR">
                                        <p>{Esito.CodGrupo}</p>
                                    </div>
                                    <div className="SelectR">
                                        <p>{Esito.Grado}</p>
                                    </div>
                                    <div className="SelectR More">
                                        <p>{Esito.Director}</p>
                                    </div>
                                    <div className="Min GrupoF ">
                                        <p>{Esito.CEstudiantes}</p>
                                    </div>
                                    <div className="SelectR AñoInsF">
                                        <Link to={{
                                            pathname: '/directivos/grupos_VerEstudiantes',
                                            state:{
                                                Name: this.props.location.state.Name,
                                                Contraseña: this.props.location.state.Contraseña,
                                                Usuario: this.props.location.state.Usuario,
                                                Edad: this.props.location.state.Edad,
                                                Cargo: this.props.location.state.Cargo,
                                                CodGrupo: Esito.CodGrupo,
                                                Grado: Esito.Grado
                                            } 
                                        }}>
                                        <button className="DickBro">Ver Estudiantes</button>
                                        </Link>
                                    </div>
                                    <div className="ImgRMas">
                                    </div>
                                </div>
                            );
                        })}{Grupos[1].map((Esito, index) => {
                            return (
                                <div key={index} className="FiltrosREstudiante">
                                    <div className="SelectR">
                                        <p>{Esito.CodGrupo}</p>
                                    </div>
                                    <div className="SelectR">
                                        <p>{Esito.Grado}</p>
                                    </div>
                                    <div className="SelectR More">
                                        <p>{Esito.Director}</p>
                                    </div>
                                    <div className="Min GrupoF">
                                        <p>{Esito.CEstudiantes}</p>
                                    </div>
                                    <div className="SelectR AñoInsF">
                                    <Link to={{
                                            pathname: '/directivos/grupos_VerEstudiantes',
                                            state:{
                                                Name: this.props.location.state.Name,
                                                Contraseña: this.props.location.state.Contraseña,
                                                Usuario: this.props.location.state.Usuario,
                                                Edad: this.props.location.state.Edad,
                                                Cargo: this.props.location.state.Cargo,
                                                CodGrupo: Esito.CodGrupo,
                                                Grado: Esito.Grado 
                                            } 
                                        }}>
                                        <button className="DickBro">Ver Estudiantes</button>
                                        </Link>
                                    </div>
                                    <div className="ImgRMas">
                                    </div>
                                </div>
                            );
                        })}{Grupos[2].map((Esito, index) => {
                            return (
                                <div key={index} className="FiltrosREstudiante">
                                    <div className="SelectR">
                                        <p>{Esito.CodGrupo}</p>
                                    </div>
                                    <div className="SelectR">
                                        <p>{Esito.Grado}</p>
                                    </div>
                                    <div className="SelectR More">
                                        <p>{Esito.Director}</p>
                                    </div>
                                    <div className="Min GrupoF">
                                        <p>{Esito.CEstudiantes}</p>
                                    </div>
                                    <div className="SelectR AñoInsF">
                                    <Link to={{
                                            pathname: '/directivos/grupos_VerEstudiantes',
                                            state:{
                                                Name: this.props.location.state.Name,
                                                Contraseña: this.props.location.state.Contraseña,
                                                Usuario: this.props.location.state.Usuario,
                                                Edad: this.props.location.state.Edad,
                                                Cargo: this.props.location.state.Cargo,
                                                CodGrupo: Esito.CodGrupo,
                                                Grado: Esito.Grado 
                                            } 
                                        }}>
                                        <button className="DickBro">Ver Estudiantes</button>
                                        </Link>
                                    </div>
                                    <div className="ImgRMas">
                                    </div>
                                </div>
                            );
                        })}{Grupos[3].map((Esito, index) => {
                            return (
                                <div key={index} className="FiltrosREstudiante">
                                    <div className="SelectR">
                                        <p>{Esito.CodGrupo}</p>
                                    </div>
                                    <div className="SelectR">
                                        <p>{Esito.Grado}</p>
                                    </div>
                                    <div className="SelectR More">
                                        <p>{Esito.Director}</p>
                                    </div>
                                    <div className="Min GrupoF">
                                        <p>{Esito.CEstudiantes}</p>
                                    </div>
                                    <div className="SelectR AñoInsF">
                                    <Link to={{
                                            pathname: '/directivos/grupos_VerEstudiantes',
                                            state:{
                                                Name: this.props.location.state.Name,
                                                Contraseña: this.props.location.state.Contraseña,
                                                Usuario: this.props.location.state.Usuario,
                                                Edad: this.props.location.state.Edad,
                                                Cargo: this.props.location.state.Cargo,
                                                CodGrupo: Esito.CodGrupo,
                                                Grado: Esito.Grado 
                                            } 
                                        }}>
                                        <button className="DickBro">Ver Estudiantes</button>
                                        </Link>
                                    </div>
                                    <div className="ImgRMas">
                                    </div>
                                </div>
                            );
                        })}{Grupos[4].map((Esito, index) => {
                            return (
                                <div key={index} className="FiltrosREstudiante">
                                    <div className="SelectR">
                                        <p>{Esito.CodGrupo}</p>
                                    </div>
                                    <div className="SelectR">
                                        <p>{Esito.Grado}</p>
                                    </div>
                                    <div className="SelectR More">
                                        <p>{Esito.Director}</p>
                                    </div>
                                    <div className="Min GrupoF">
                                        <p>{Esito.CEstudiantes}</p>
                                    </div>
                                    <div className="SelectR AñoInsF">
                                    <Link to={{
                                            pathname: '/directivos/grupos_VerEstudiantes',
                                            state:{
                                                Name: this.props.location.state.Name,
                                                Contraseña: this.props.location.state.Contraseña,
                                                Usuario: this.props.location.state.Usuario,
                                                Edad: this.props.location.state.Edad,
                                                Cargo: this.props.location.state.Cargo,
                                                CodGrupo: Esito.CodGrupo,
                                                Grado: Esito.Grado 
                                            } 
                                        }}>
                                        <button className="DickBro">Ver Estudiantes</button>
                                        </Link>
                                    </div>
                                    <div className="ImgRMas">
                                    </div>
                                </div>
                            );
                        })}{Grupos[5].map((Esito, index) => {
                            return (
                                <div key={index} className="FiltrosREstudiante">
                                    <div className="SelectR">
                                        <p>{Esito.CodGrupo}</p>
                                    </div>
                                    <div className="SelectR">
                                        <p>{Esito.Grado}</p>
                                    </div>
                                    <div className="SelectR More">
                                        <p>{Esito.Director}</p>
                                    </div>
                                    <div className="Min GrupoF">
                                        <p>{Esito.CEstudiantes}</p>
                                    </div>
                                    <div className="SelectR AñoInsF">
                                    <Link to={{
                                            pathname: '/directivos/grupos_VerEstudiantes',
                                            state:{
                                                Name: this.props.location.state.Name,
                                                Contraseña: this.props.location.state.Contraseña,
                                                Usuario: this.props.location.state.Usuario,
                                                Edad: this.props.location.state.Edad,
                                                Cargo: this.props.location.state.Cargo,
                                                CodGrupo: Esito.CodGrupo,
                                                Grado: Esito.Grado 
                                            } 
                                        }}>
                                        <button className="DickBro">Ver Estudiantes</button>
                                        </Link>
                                    </div>
                                    <div className="ImgRMas">
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </>
        );
    }
}

export default withRouter(Directivos_registro_grupos);