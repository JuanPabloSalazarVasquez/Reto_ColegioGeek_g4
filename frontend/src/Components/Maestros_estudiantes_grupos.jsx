/* eslint-disable eqeqeq */
/* eslint-disable no-array-constructor */
import React from "react";

import "../Styles/Maestros_estudiantes_grupos.css";

import { withRouter, Link } from "react-router-dom";

class Maestros_estudiantes_grupos extends React.Component {
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
            <input
              type="number"
              className="GrupoF Min"
              placeholder="Cant E"
              autoComplete="off"
            />
            <div className="SelectR AñoInsF">
              <p>Estudiantes</p>
            </div>
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
                    pathname: "/maestros/estudiantes_grupos/ver_estudiantes",
                  }}
                >
                  <button className="DickBro">Ver Estudiantes</button>
                </Link>
              </div>
              <div className="ImgRMas"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Maestros_estudiantes_grupos);
