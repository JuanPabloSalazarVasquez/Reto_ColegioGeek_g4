import React from "react";
import Profile from "../Components/Profile";
import axios from 'axios';

import "../Styles/Directivos.css";

import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class directivos_inicio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: JSON.parse(sessionStorage.getItem('id_directivo')),
      datos_directivos: ''
    };
  }

  // Peticion get para traer la informacion de un directivo
componentDidMount() {
  axios.get(`http://localhost:4535/directivos/directivos-inicio-directivo/${this.state.datos.id_directivo}`)
    .then(res => {
      console.log(res.data)
      this.setState({
        datos_directivos: res.data[0]
      })
    }).catch(err => {
      console.log(err.massage)
    })
}
// Fin peticion get

  render() {

    let directivo = this.state.datos_directivos;

    return (
      <>
        <div id="DirectivosContainer">
          <div id="DirectivosGrid">
            <div id="ProfileCont">
              <Profile Name={directivo.nombres} Cargo="Directivo" foto={directivo.foto_perfil} />
            </div>
            <div id="CardsCont">
              <div id="Grupo1">
                <div>
                  <Link
                    to={{
                      pathname: "/Directivos/Registro_Grupos",
                    }}
                  >
                    <div className="Direc1 CardS">
                      <img
                        src="https://cdn0.iconfinder.com/data/icons/users-android-l-lollipop-icon-pack/24/group2-512.png"
                        alt="Grupos"
                        className="icono"
                      />
                    </div>
                  </Link>
                  <p className="pIcono">Grupos</p>
                </div>

                <div>
                  <Link
                    to={{
                      pathname: "/Directivos/Registro_Estudiantes",
                    }}
                  >
                    <div className="Direc2 CardS">
                      <img
                        src="https://cdn0.iconfinder.com/data/icons/education-flat-7/128/16_Bag-512.png"
                        alt="Estudiantes"
                        className="icono"
                      />
                    </div>
                  </Link>
                  <p className="pIcono">Estudiantes</p>
                </div>
              </div>
              <div id="Grupo2">
                <div>
                  <Link
                    to={{
                      pathname: "/Directivos/Registro_Maestros",
                    }}
                  >
                    <div className="Direc3 CardS">
                      <img
                        src="https://cdn0.iconfinder.com/data/icons/education-flat-7/128/35_Glasses-512.png"
                        alt="Maestros"
                        className="icono"
                      />
                    </div>
                  </Link>
                  <p className="pIcono">Maestros</p>
                </div>

                <div>
                  <Link
                    to={{
                      pathname: "/Directivos/Registro_Materias",
                    }}
                  >
                    <div className="Direc4 CardS">
                      <img
                        src="https://cdn0.iconfinder.com/data/icons/education-flat-7/128/07_Note_Book-512.png"
                        alt="Materias"
                        className="icono"
                      />
                    </div>
                  </Link>
                  <p className="pIcono">Materias</p>
                </div>

                <div>
                  <Link
                    to={{
                      pathname: "/directivos/mi_cuenta",
                    }}
                    onClick={() => this.componentDidMount}
                  >
                    <div className="img-direc3-Maestros_inicio CardS-Maestros_inicio">
                      <img
                        src="https://cdn0.iconfinder.com/data/icons/education-flat-7/128/02_Pen-512.png"
                        alt="Configuraciones"
                        className="icono"
                      />
                    </div>
                  </Link>
                  <p className="pIcono">Configuraciones cuenta</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(directivos_inicio);
