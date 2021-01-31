import React from "react";

import "../Styles/Maestros_inicio.css";

import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Maestros_inicio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="DirectivosContainer-Maestros_inicio">
          <div className="DirectivosGrid-Maestros_inicio">
            <div className="ProfileCont-Maestros_inicio">
              <div className="ProfileContainer-Maestros_inicio">
                <div>
                  <img
                    className="ImgProfile-Maestros_inicio"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png"
                  />
                </div>
                <div className="DatosContainer-Maestros_inicio">
                  <p className="Pprofile-Maestros_inicio">
                    Bienvenido {this.props.Name}
                  </p>
                  <p className="Pprofile-Maestros_inicio">
                    Cargo: {this.props.Cargo}
                  </p>
                </div>
                <Link to="/">
                  <button className="button button2-Maestros_inicio">
                    Cerrar sesión
                  </button>
                </Link>
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
