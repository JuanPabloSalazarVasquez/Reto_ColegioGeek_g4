import React from "react";

import "../Styles/Maestros_ver_estudiantes_grupos.css";

import { withRouter } from "react-router-dom";



class Maestros_ver_estudiantes_grupos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="VerEstuGrupContainer-Maestros_ver_estudiantes_grupos">
          <div className="FiltradoEstudiante-Maestros_ver_estudiantes_grupos">
            <div className="FiltrosREstudiante-Maestros_ver_estudiantes_grupos-Registro">
              <div>
                <input
                  type="number"
                  className="SelectR-Maestros_ver_estudiantes_grupos"
                  placeholder="Matricula"
                  autoComplete="off"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="SelectR-Maestros_ver_estudiantes_grupos"
                  placeholder="Nombre"
                  autoComplete="off"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="SelectR-Maestros_ver_estudiantes_grupos"
                  placeholder="Apellido"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="EstuFilter-Maestros_ver_estudiantes_grupos">
              <div className="FiltrosREstudiante-Maestros_ver_estudiantes_grupos-Registro">
                <div className="SelectR-Maestros_ver_estudiantes_grupos">
                  <p className="pTexts-Maestros_ver_estudiantes_grupos MinMin-Maestros_ver_estudiantes_grupos">Matricula</p>
                </div>
                <div className="SelectR-Maestros_ver_estudiantes_grupos">
                  <p className="pTexts-Maestros_ver_estudiantes_grupos More-Maestros_ver_estudiantes_grupos">Emanuel</p>
                </div>
                <div className="SelectR-Maestros_ver_estudiantes_grupos">
                  <p className="pTexts-Maestros_ver_estudiantes_grupos More-Maestros_ver_estudiantes_grupos">Acevedo Munoz</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Maestros_ver_estudiantes_grupos);
