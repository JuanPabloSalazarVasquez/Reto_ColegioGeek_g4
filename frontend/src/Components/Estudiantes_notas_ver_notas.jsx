import React from "react";

import "../Styles/Estudiantes_notas.css";

import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Estudiantes_notas_ver_notas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <p>Esta es la parte donde se muestran las materias del estudiante.</p>
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
                <div>
                    tipo_nota
                </div>
                <div>
                    nota
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Estudiantes_notas_ver_notas);