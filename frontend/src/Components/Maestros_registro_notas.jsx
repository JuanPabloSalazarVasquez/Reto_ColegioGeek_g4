import React from "react";

import "../Styles/Maestros_registro_notas.css";

import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Maestros_registro_notas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div id="RegistroEsContainer">
          <div className="FiltrosREstudiante">
            <select className="SelectR">
              <option value="0" className="Dis">
                Cod Grupo
              </option>
            </select>
            <select className="SelectR MinMin">
              <option value="0" className="Dis">
                Grado
              </option>
              <option value="Sexto">Sexto</option>
              <option value="Septimo">Septimo</option>
              <option value="Octavo">Octavo</option>
              <option value="Noveno">Noveno</option>
              <option value="Decimo">Decimo</option>
              <option value="Once">Once</option>
            </select>
            <select className="SelectR More">
              <option value="0" className="Dis">
                Director
              </option>
            </select>
          </div>

          {/* Grupos */}
          <div id="CardsContainerReEs">
            <div className="FiltrosREstudiante">
              <div className="SelectR">
                <p>qweasda</p>
              </div>
              <div className="SelectR">
                <p>Once</p>
              </div>
              <div className="SelectR More">
                <p>Emanuel</p>
              </div>
              <div className="Min GrupoF">
                <p>11</p>
              </div>
              <div className="SelectR AñoInsF">
                <Link
                  to={{
                    pathname: "/maestros/registrar_notas/grupo_estudiantes",
                  }}
                >
                  <button className="DickBro">Ver Estudiantes</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Maestros_registro_notas);
