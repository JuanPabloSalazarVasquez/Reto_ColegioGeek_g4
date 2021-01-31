import React from "react";

import "../Styles/VerRegEstu.css";

import { withRouter } from "react-router-dom";



class Maestros_ver_estudiantes_grupos extends React.Component {
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
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Maestros_ver_estudiantes_grupos);
