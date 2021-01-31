import React from "react";

import "../Styles/Maestros_Registrar_Nota_Estudiante.css";

import { withRouter } from "react-router-dom";

class Maestros_Registrar_Nota_Estudiante extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="VerEstuGrupContainer-Maestros_Registrar_Nota_Estudiante">
          <div className="FiltradoEstudiante-Maestros_Registrar_Nota_Estudiante">
            <div className="FiltrosREstudiante-Maestros_Registrar_Nota_Estudiante">
              <div>
                <input
                  type="number"
                  className="SelectR-Maestros_Registrar_Nota_Estudiante"
                  placeholder="Nota"
                  autoComplete="off"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="SelectR-Maestros_Registrar_Nota_Estudiante"
                  placeholder="Tipo nota"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="EstuFilter-Maestros_Registrar_Nota_Estudiante">
              <div className="FiltrosREstudiante">
                <div className="SelectR-Maestros_Registrar_Nota_Estudiante">
                  <p className="pTexts-Maestros_Registrar_Nota_Estudiante">
                    Matricula
                  </p>
                </div>
                <div className="SelectR-Maestros_Registrar_Nota_Estudiante">
                  <p className="pTexts-Maestros_Registrar_Nota_Estudiante">
                    Emanuel
                  </p>
                </div>
                <div className="SelectR-Maestros_Registrar_Nota_Estudiante">
                  <p className="pTexts-Maestros_Registrar_Nota_Estudiante">
                    Acevedo Munoz
                  </p>
                </div>
                <div className="SelectR-Maestros_Registrar_Nota_Estudiante">
                  <input
                    type="number"
                    className="SelectR-Maestros_Registrar_Nota_Estudiante"
                    placeholder="Nota"
                    autoComplete="off"
                  />
                </div>
                <div className="SelectR-Maestros_Registrar_Nota_Estudiante">
                  <input
                    type="text"
                    className="SelectR-Maestros_Registrar_Nota_Estudiante"
                    placeholder="Tipo nota"
                    autoComplete="off"
                  />
                </div>
                <button className="Button-Maestros_Registrar_Nota_Estudiante">
                  Agregar
                </button>
              </div>
            </div>
            {/* Notas del estudiante */}
            <div className="EstuFilter-Maestros_Registrar_Nota_Estudiante">
              <div className="FiltrosREstudiante">
                <div className="SelectR-Maestros_Registrar_Nota_Estudiante">
                  <p className="pTexts-Maestros_Registrar_Nota_Estudiante">
                    Matricula
                  </p>
                </div>
                <div className="SelectR-Maestros_Registrar_Nota_Estudiante">
                  <p className="pTexts-Maestros_Registrar_Nota_Estudiante">
                    Emanuel
                  </p>
                </div>
                <div className="SelectR-Maestros_Registrar_Nota_Estudiante">
                  <p className="pTexts-Maestros_Registrar_Nota_Estudiante">
                    Acevedo Munoz
                  </p>
                </div>
                <div className="SelectR-Maestros_Registrar_Nota_Estudiante">
                  <p className="pTexts-Maestros_Registrar_Nota_Estudiante">
                    4.5
                  </p>
                </div>
                <div className="SelectR-Maestros_Registrar_Nota_Estudiante">
                  <p className="pTexts-Maestros_Registrar_Nota_Estudiante">
                    Actitudinal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Maestros_Registrar_Nota_Estudiante);
