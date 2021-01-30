import React from "react";

import "../Styles/VerRegEstu.css";
import "../Styles/Maestros_ver_estudiantes_grupos.css";

import { withRouter, Link } from "react-router-dom";

class Maestros_registro_notas_grupo_estudiantes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div id="VerEstuGrupContainer">
          <div className="FiltradoGroup">
            <div className="FiltrosREstudiante">
              <div>
                <input
                  type="number"
                  className="SelectR"
                  placeholder="Matricula"
                  autoComplete="off"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="SelectR"
                  placeholder="Nombre"
                  autoComplete="off"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="SelectR"
                  placeholder="Apellido"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className=" EstuFilter">
              <div className="FiltrosREstudiante">
                <div className="SelectR">
                  <p>Matricula</p>
                </div>
                <div className="SelectR">
                  <p>Emanuel</p>
                </div>
                <div className="SelectR">
                  <p>Acevedo Munoz</p>
                </div>
                <Link to="/maestros/registrar_notas/grupo_estudiantes/agregar_nota">
                  <div className="button">Agregar nota</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Maestros_registro_notas_grupo_estudiantes);
