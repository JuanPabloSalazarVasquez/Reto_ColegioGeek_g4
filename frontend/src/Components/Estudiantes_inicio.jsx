import React from "react";

import "../Styles/Estudiantes_inicio.css";

import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Estudiantes_inicio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="DirectivosContainer-Estudiantes_inicio">
          <div className="DirectivosGrid-Estudiantes_inicio">
            <div className="ProfileCont-Estudiantes_inicio">
              <div className="ProfileContainer-Estudiantes_inicio">
                <div>
                  <img
                    className="ImgProfile-Estudiantes_inicio"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png"
                  />
                </div>
                <div className="DatosContainer-Estudiantes_inicio">
                  <p className="Pprofile-Estudiantes_inicio">
                    Bienvenido {this.props.Name}
                  </p>
                  <p className="Pprofile-Estudiantes_inicio">
                    Cargo: {this.props.Cargo}
                  </p>
                </div>
                <Link to="/">
                  <button className="button button2-Estudiantes_inicio">
                    Cerrar sesión
                  </button>
                </Link>
              </div>
            </div>
            <div className="CardsCont-Estudiantes_inicio">
              <div className="Grupo1-Estudiantes_inicio">
                <div>
                  <Link to='/estudiantes/mis_notas'>
                  <img
                    src="https://image.flaticon.com/icons/png/512/2893/2893358.png"
                    className="img-direc1-Estudiantes_inicio CardS-Estudiantes_inicio"
                    alt="logo_1"
                  />
                  </Link>
                  Ver mis notas
                </div>

                <div>
                  <Link to='/estudiantes/mis_materias'>
                  <img
                    src="https://image.flaticon.com/icons/png/512/29/29302.png"
                    className="img-direc2-Estudiantes_inicio CardS-Estudiantes_inicio"
                    alt="logo_2"
                  />
                  </Link>
                  Ver mis materias
                </div>
              </div>
              <div className="Grupo2-Estudiantes_inicio">
                <div>
                  <Link to='/estudiantes/mis_maestros'>
                  <img
                    src="https://www.titecnoeducacion.com.mx/images/imgs/icono-maestros-blanco.png"
                    className="img-direc3-Estudiantes_inicio CardS-Estudiantes_inicio"
                    alt="logo_3"
                  />
                  </Link>
                  Ver mis maestros
                </div>

                <div>
                  <Link to='/estudiantes/mi_cuenta'>
                  <img
                    src="https://w7.pngwing.com/pngs/864/574/png-transparent-computer-icons-computer-configuration-a-new-user-miscellaneous-logo-monochrome.png"
                    className="img-direc4-Estudiantes_inicio CardS-Estudiantes_inicio"
                    alt="logo_4"
                  />
                  </Link>
                  Configuracion de mi cuenta
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Estudiantes_inicio);
