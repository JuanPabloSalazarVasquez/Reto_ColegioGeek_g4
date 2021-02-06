import React from "react";
import axios from 'axios';

import "../Styles/Login_usuarios.css";

import { BrowserRouter as Router, Redirect } from "react-router-dom";

class Login_usuarios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        tipo_usuario: null,
        correo_electronico: null,
        numero_documento: null,
        login: false,
        token: null
      },
      datos: []
    };
  }

  
  login = async () => {
    await axios.post(`http://localhost:4535/api/login`, { 
        tipo_usuario: this.state.form.tipo_usuario,
        correo_electronico: this.state.form.correo_electronico,
        numero_documento: this.state.form.numero_documento
     })
          .then(res =>{
            console.log(res);
            console.log(res.data.token)
            if(res.data.message == 'Asegurese de ingresar los datos correctamente.'){
                console.log(res.data.message)
            }else{
                localStorage.setItem('login', JSON.stringify({
                    login: true,
                    token: res.data.token
                }));
                this.setState({login:true, token: res.data.token})
            }
            
        }).catch(err=>{
          console.log(err.massage)
        })
  }

  login2 = async () => {
      let token="bearer "+
    await axios.get(`http://localhost:4535/api/privada`)
    .then(res =>{
      console.log(res.data)
      this.setState({
        datos: res.data
      })
  }).catch(err=>{
    console.log(err.massage)
  })
  }

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

  handleSubmit = (e) => {
    e.preventDefault();
    const user = {
        tipo_usuario: this.state.form.tipo_usuario,
        correo_electronico: this.state.form.correo_electronico,
        numero_documento: this.state.form.numero_documento
    };
    this.setState({
      form: user,
    });
    console.log(user);
  };


  render() {
    return (
      <>
        <div className="Main2Container">
          <div id="SelecContainer">
            <form id="Palborde" onSubmit={this.handleSubmit}>
              <select className="input" id="Select" name="tipo_usuario" onChange={this.handleChange}>
                <option value="0" className="Dis">
                  Seleccione su Cargo
                </option>
                <option value="Estudiante">Estudiante</option>
                <option value="Directivo">Directivo</option>
                <option value="Maestro">Maestro</option>
              </select>
              <p>Correo electrónico:</p>
              <input
                type="text"
                id="UsuarioI"
                className="input"
                placeholder="correo@ejemplo.com"
                autoComplete="off"
                onChange={this.handleChange}
                name="correo_electronico"
              ></input>
              <p>Documento:</p>
              <input
                type="password"
                id="ContraseñaI"
                className="input"
                placeholder="Ingrese su documento"
                autoComplete="off"
                onChange={this.handleChange}
                name="numero_documento"
              ></input>
              <div id="SoloParaCentrar">
                <button
                  type="button"
                  className="button button2"
                  onClick={this.login}
                >Ingresar</button>
            
              </div>
            </form>
          </div>
          <div id="InfoContainer">
            <div>
              <img
                src="https://images.vexels.com/media/users/3/224155/isolated/preview/f4bbe191bcc833b27d7fa241220c470e-libro-en-logo-de-pantalla-by-vexels.png"
                alt="Logo"
              />
            </div>
            <div>
              <h2>¡Bienvenido!</h2>
              <p>Por favor, ingrese al sistema de Colegio Geek.</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login_usuarios;
