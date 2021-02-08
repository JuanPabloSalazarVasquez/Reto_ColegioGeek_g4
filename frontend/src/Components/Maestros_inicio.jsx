import React from "react";
import axios from 'axios';

import "../Styles/Maestros_inicio.css";

import { withRouter } from "react-router-dom";
import { Link, Redirect } from "react-router-dom";

class Maestros_inicio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: JSON.parse(sessionStorage.getItem('id_maestro')),
      datos_maestro: '',
      Bool1: false
    };
  }

  // Peticion get para traer la informacion de un directivo
componentDidMount() {
  axios.get(`http://35.185.93.150:4535/maestro/maestros-inicio-maestro/${this.state.datos.id_maestro}`)
    .then(res => {
      this.setState({
        datos_maestro: res.data[0]
      })
    }).catch(err => {
      console.log(err.massage)
    })
}
// Fin peticion get

logout = () => {
  sessionStorage.clear()
  this.setState({Bool1: true})
}

  render() {

    let maestro = this.state.datos_maestro;

    return (
      <>
        <div className="DirectivosContainer-Maestros_inicio">
          <div className="DirectivosGrid-Maestros_inicio">
            <div className="ProfileCont-Maestros_inicio">
              <div className="ProfileContainer-Maestros_inicio">
                <div>
                  <img
                    className="ImgProfile-Maestros_inicio"
                    src={maestro.foto_perfil}
                  />
                </div>
                <div className="DatosContainer-Maestros_inicio">
                  <p className="Pprofile-Maestros_inicio">
                    Bienvenido {maestro.nombres}
                  </p>
                  <p className="Pprofile-Maestros_inicio">
                    Cargo: Maestro
                  </p>
                </div>
                
                  <button className="button button2-Maestros_inicio" onClick={this.logout}>
                    Cerrar sesión
                  </button>
                  {this.state.Bool1 && (
                  <Redirect
                    to={{
                      pathname: "/"
                    }}
                  ></Redirect>
                )}
              </div>
            </div>
            <div className="CardsCont-Maestros_inicio">
              <div className="Grupo1-Maestros_inicio">
                <div>
                  <Link to="/maestros/registrar_notas">
                    <div className="img-direc1-Maestros_inicio CardS-Maestros_inicio">
                      <img src='https://cdn0.iconfinder.com/data/icons/education-flat-7/128/09_Examination-512.png' alt="Notas" className='icono'/>
                    </div>
                  </Link>
                  <p className='pIcono'>Registrar notas</p>
                </div>

                <div>
                  <Link to='/maestros/estudiantes_grupos'>
                    <div className="img-direc2-Maestros_inicio CardS-Maestros_inicio">
                      <img src='https://cdn0.iconfinder.com/data/icons/users-android-l-lollipop-icon-pack/24/group2-512.png' alt="Cantidad Estudiantes" className='icono'/>
                    </div>
                  </Link>
                  <p className='pIcono'>Cantidad de estudiantes</p>
                </div>
              </div>
              <div className="Grupo2-Maestros_inicio">
                <div>
                  <Link to='/maestros/mi_cuenta'>
                  <div className="img-direc3-Maestros_inicio CardS-Maestros_inicio">
                      <img src='https://cdn0.iconfinder.com/data/icons/education-flat-7/128/02_Pen-512.png' alt="Configuraciones" className='icono'/>
                    </div>
                  </Link>
                  <p className='pIcono'>Configuraciones cuenta</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Maestros_inicio);
