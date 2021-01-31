import React from "react";

import "../Styles/VerRegEstu.css";
import "../Styles/Maestros_registro_notas_grupo_estudiantes.css";

import { withRouter, Link } from "react-router-dom";

class Maestros_registro_notas_grupo_estudiantes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="VerEstuGrupContainer-Maestros_registro_notas_grupo_estudiantes">
          <div className="FiltradoEstudiante-Maestros_registro_notas_grupo_estudiantes ">
            <div className="FiltrosREstudiante-Maestros_registro_notas_grupo_estudiantes">
              <div>
                <input
                  type="number"
                  className="SelectR-Maestros_registro_notas_grupo_estudiantes"
                  placeholder="Matricula"
                  autoComplete="off"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="SelectR-Maestros_registro_notas_grupo_estudiantes"
                  placeholder="Nombre"
                  autoComplete="off"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="SelectR-Maestros_registro_notas_grupo_estudiantes"
                  placeholder="Apellido"
                  autoComplete="off"
                />
              </div>
            </div>
            {/* Estudiantes */}
            <div className="EstuFilter-Maestros_registro_notas_grupo_estudiantes">
              <div className="FiltrosREstudiante-Maestros_registro_notas_grupo_estudiantes">
                <div className="SelectR-Maestros_registro_notas_grupo_estudiantes">
                  <p className="pTexts-Maestros_registro_notas_grupo_estudiantes">Matricula</p>
                </div>
                <div className="SelectR-Maestros_registro_notas_grupo_estudiantes">
                  <p className="pTexts-Maestros_registro_notas_grupo_estudiantes">Emanuel</p>
                </div>
                <div className="SelectR-Maestros_registro_notas_grupo_estudiantes">
                  <p className="pTexts-Maestros_registro_notas_grupo_estudiantes">Acevedo Munoz</p>
                </div>
                <Link to="/maestros/registrar_notas/grupo_estudiantes/agregar_nota">
                  <button className="Button-Maestros_registro_notas_grupo_estudiantes">
                    Agregar nota
                  </button>
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
