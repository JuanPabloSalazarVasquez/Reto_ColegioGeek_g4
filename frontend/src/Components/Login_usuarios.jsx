import React from "react";
import axios from "axios";

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
      },
      login: false,
      token: null,
      datos: [],
      datos_user: null,
      datos_user2: null,
      Bool1: false,
      Bool2: false,
      Bool3: false,
    };
  }

  login = async () => {
    await axios
      .post(`http://localhost:4535/api/login`, {
        tipo_usuario: this.state.form.tipo_usuario,
        correo_electronico: this.state.form.correo_electronico,
        numero_documento: this.state.form.numero_documento,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data.token);
        this.setState({ token: res.data.token });
        console.log(this.state.token);
        if (
          res.data.message == "Asegurese de ingresar los datos correctamente."
        ) {
          console.log(res.data.message);
        } else {
          sessionStorage.setItem(
            "login",
            JSON.stringify({
              login: true,
              token: res.data.token,
            })
          );
          this.login2();
        }
      })
      .catch((err) => {
        console.log(err.massage);
      });
  };

  login2 = async () => {
    let token_authorization = "bearer " + this.state.token;
    console.log(token_authorization);
    await axios
      .get(`http://localhost:4535/api/privada`, {
        headers: {
          Authorization: `${token_authorization}`,
        },
      })
      .then((res) => {
        this.setState({ datos_user: res.data.data });
        this.Ingreso();
        /*
        console.log(res);
        console.log(res.data);
        console.log(res.data.data.id_persona);
        this.setState({ id_persona: res.data.id_persona });
        console.log(this.state.id_persona);
        */
      })
      .catch((err) => {
        console.log(err.massage);
      });
  };

  Ingreso = async () => {
    await axios
      .get(
        `http://localhost:4535/api/user-datos/${this.state.datos_user.id_persona}/${this.state.datos_user.tipo_usuario}`
      )
      .then((res) => {
        console.log(
          "Esta es la informacion de la tabla del usuario logeado:",
          res.data[0]
        );
        console.log("Tipo_usuario:", this.state.datos_user.tipo_usuario);
        if (this.state.datos_user.tipo_usuario == "Estudiante") {
          console.log("Esta es la res.data[0]", res.data[0]);
          // this.setState({datos_user2: res.data[0]})
          sessionStorage.setItem(
            "id_estudiante",
            JSON.stringify({
              id_estudiante: res.data[0].id_estudiante,
            })
          );
          this.setState({ Bool3: true });
        }
        if (this.state.datos_user.tipo_usuario == "Maestro") {
          //this.setState({datos_user2: res.data[0]})
          sessionStorage.setItem(
            "id_maestro",
            JSON.stringify({
              id_maestro: res.data[0].id_maestro,
            })
          );
          this.setState({ Bool2: true });
        }
        if (this.state.datos_user.tipo_usuario == "Directivo") {
          //this.setState({datos_user2: res.data[0]})
          sessionStorage.setItem(
            "id_directivo",
            JSON.stringify({
              id_directivo: res.data[0].id_directivo,
            })
          );
          this.setState({ Bool1: true });
        }
      })
      .catch((err) => {
        console.log(err.massage);
      });
  };

  handleChange = async (e) => {
    e.persist();
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      tipo_usuario: this.state.form.tipo_usuario,
      correo_electronico: this.state.form.correo_electronico,
      numero_documento: this.state.form.numero_documento,
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
              <select
                className="input"
                id="Select"
                name="tipo_usuario"
                onChange={this.handleChange}
              >
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
                >
                  Ingresar
                </button>
                {/* Directivos */}
                {this.state.Bool1 && (
                  <Redirect
                    to={{
                      pathname: "/directivos",
                    }}
                  ></Redirect>
                )}

                {/* Maestros */}
                {this.state.Bool2 && (
                  <Redirect
                    to={{
                      pathname: "/maestros",
                    }}
                  ></Redirect>
                )}

                {/* Estudiantes */}
                {this.state.Bool3 && (
                  <Redirect
                    to={{
                      pathname: "/estudiantes",
                    }}
                  ></Redirect>
                )}
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
