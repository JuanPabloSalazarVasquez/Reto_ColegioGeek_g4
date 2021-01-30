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
      <h1>Maestros</h1>
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
                    <img
                      src="https://1.bp.blogspot.com/-L3l1J1Z3ytg/X0hNNESpzuI/AAAAAAAAPME/3V8A1tELyXEyZw5XJaGn3A3HxnYTFQ1cACLcBGAsYHQ/s16000/Estudiantes.png"
                      className="img-direc1-Maestros_inicio CardS-Maestros_inicio"
                      alt="logo_1"
                    />
                  </Link>
                  Registrar notas
                </div>

                <div>
                  <Link>
                    <img
                      src="https://1.bp.blogspot.com/-zTYMDm4_vuk/X0ioVfB0ccI/AAAAAAAAPNY/Y0Ir1KWfCLUKgQw6dFWZct0qz84e-GKfACLcBGAsYHQ/s16000/Mestros.png"
                      className="img-direc2-Maestros_inicio CardS-Maestros_inicio"
                      alt="logo_2"
                    />
                  </Link>
                  Cantidad de estudiantes por grupos
                </div>
              </div>
              <div className="Grupo2-Maestros_inicio">
                <div>
                  <Link>
                    <img
                      src="https://1.bp.blogspot.com/-fzuKkHYNNq8/X0i-8mrociI/AAAAAAAAPOI/QD6HCg571wcMTe5C9Rz8-vTDZzNCyey8wCLcBGAsYHQ/s16000/Grupos.png"
                      className="img-direc3-Maestros_inicio CardS-Maestros_inicio"
                      alt="logo_3"
                    />
                  </Link>
                  Configuraciones de mi cuenta
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
