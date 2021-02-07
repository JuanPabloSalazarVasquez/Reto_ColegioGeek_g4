import React from 'react';
import axios from 'axios';

import '../Styles/RegistroEstudiantes.css';

import { withRouter, Redirect } from 'react-router-dom';



const Año = new Date();
const AñoY = Año.getFullYear();
const AñoM = Año.getMonth() + 1;
const AñoD = Año.getDate();

let GrupoVar = "";

class Directivos_registro_estudiantes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Bool: false,
            datos: [],
            form: {
                nombres: '',
                apellidos: '',
                tipo_documento: '',
                numero_documento: ''
            }
        }
    }

    form = () => {
        document.getElementById("RegistroEsContainer").style.filter = "blur(1px)";
        document.getElementById("Form").style.display = "flex";
        document.getElementById("Form").style.zIndex = "60";
    }

    

    Cambio = () => {
        document.getElementById("Form").style.display = "none";
        document.getElementById("RegistroEsContainer").style.filter = "blur(0)";
    }
   

    //Petición get para obtener los estudiantes existentes
    componentDidMount(){
        axios.get(`http://localhost:4535/estudiantes/directivos-all-estudiantes`)
          .then(res =>{
            console.log(res.data)
            this.setState({
              datos: res.data
            })
        }).catch(err=>{
          console.log(err.massage)
        })
      }
    //Fin get
    
    //Petición post para agregar nuevos estudiantes
    post_estudiante(){
        axios.post(`http://localhost:4535/estudiantes/directivos-nuevo-estudiante-persona`, { 
            nombres: this.state.form.nombres,
            apellidos: this.state.form.apellidos,
            tipo_documento: this.state.form.tipo_documento,
            numero_documento: this.state.form.numero_documento
         })
          .then(res =>{
            console.log(res.data)
            this.setState({
              datos: res.data
            })
        }).catch(err=>{
          console.log(err.massage)
        })
      }
    //Fin post

    handleChange = async (e) => {
        e.persist();
        await this.setState({
          form: {
            ...this.state.form,
            [e.target.name]: e.target.value
          },
        });
        console.log(this.state.form);
      };
    

    render() {
        return (
            <>
                <div id="Form">
                    <div id="Form2">
                        <div id="Form2_21">
                            <img className="ImgProfile" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png" />
                        </div>
                        <div id="Form2_2">
                            <div className="Form2_2_2">
                                <input className="REInput" id="NombreIn" placeholder="Nombre" autoComplete="off" onChange={this.handleChange}
                name="nombres" />
                                <input className="REInput" id="ApellidoIn" placeholder="Apellido" autoComplete="off" onChange={this.handleChange}
                name="apellidos" />
                                <select className="REInput" id="TipoDI">
                                    <option value="0" className="Dis">Tipo Documento</option>
                                    <option value="1">Cédula</option>
                                    <option value="2">Tarjeta de identidad</option>
                                </select>
                                <input className="REInput" id="DocumentoIn" placeholder="Documento de identidad" autoComplete="off" />
                            </div>
                        </div>
                        <div className="Form2_2_2">
                            <select className="REInput" id="GradoIn" onChange={this.Cambiar}>
                                <option value="0" className="Dis">Grado</option>
                                <option value="Sexto">Sexto</option>
                                <option value="Septimo">Septimo</option>
                                <option value="Octavo">Octavo</option>
                                <option value="Noveno">Noveno</option>
                                <option value="Decimo">Decimo</option>
                                <option value="Once">Once</option>
                            </select>
                            <select className="REInput" id="GrupoIn">
                                <option value="0" className="Dis">Grupo</option>
                                
                                        <option value="Esito.CodGrupo">Esito.CodGrupo</option>
                                   
                            </select>
                            <input onClick={this.Push_} className="REInput" type="button" value="Agregar" />
                            <input type="button" onClick={this.Cambio} className="REInput" value="Cancelar" />
                        </div>

                    </div>
                </div>

                <div id="RegistroEsContainer">
                    <div className="FiltrosREstudiante">
                        <input type="text" className="SelectR" placeholder="Matricula" autoComplete="off" />
                        <input type="text" className="SelectR" placeholder="Nombre" autoComplete="off" />
                        <input type="text" className="SelectR" placeholder="Apellido" autoComplete="off" />
                        <select className="SelectR GradoF">
                            <option value="0">Grados</option>
                            <option value="1">Sexto</option>
                            <option value="3">Septimo</option>
                            <option value="2">Octavo</option>
                            <option value="1">Noveno</option>
                            <option value="2">Decimo</option>
                            <option value="3">Once</option>
                        </select>
                        <select className="SelectR GrupoF">
                            <option value="0">Grupo</option>
                            <option value="1">Sexto 1</option>
                            <option value="2">Sexto 2</option>
                            <option value="3">Septimo 1</option>
                            <option value="1">Septimo 2</option>
                            <option value="2">Octavo 1</option>
                            <option value="3">Octavo 2</option>
                            <option value="1">Noveno 1</option>
                            <option value="2">Noveno 2</option>
                            <option value="2">Decimo 1</option>
                            <option value="3">Decimo 2</option>
                            <option value="3">Once 1</option>
                            <option value="1">Once 2</option>
                        </select>
                        <input type="text" className="SelectR AñoInsF" placeholder="Año Inscripción" autoComplete="off" />

                        <input id="ImgRMas" type="button" autoComplete="off" onClick={this.form} />
                        {this.state.Bool && <Redirect to={{
                            pathname: "/Directivos/Registro_Estudiantes",
                            state: {
                                
                            }
                        }}>
                        </Redirect>}
                    </div>
                    <div id="CardsContainerReEs">
                        
                            
                                <div className="FiltrosREstudiante">
                                    <div className="SelectR">
                                        <p>Esito.Matricula</p>
                                    </div>
                                    <div className="SelectR NameF">
                                        <p className="Peque" >Esito.Name Esito.Apellido</p>
                                    </div>
                                    <div className="SelectR GradoF">
                                        <p>Esito.Grado</p>
                                    </div>
                                    <div className="SelectR GrupoF">
                                        <p>Esito.Grupo</p>
                                    </div>
                                    <div className="SelectR AñoInsF">
                                        <p>Esito.Año</p>
                                    </div>
                                    <div className="ImgRMas">
                                    </div>
                                </div>
                           
                    </div>
                </div>
            </>
        );
    }
}

export default withRouter(Directivos_registro_estudiantes);