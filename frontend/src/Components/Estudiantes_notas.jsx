import React from "react";

import "../Styles/Estudiantes_notas.css";

import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Estudiantes_notas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div id="RegistroEsContainer">
          <div className="FiltrosREstudiante">
            <select className="SelectR More">
              <option value="0" className="Dis">
                Codigo Materia
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
                Profesor
              </option>
            </select>
          </div>

          {/* Materias */}
          <div id="CardsContainerReEs">
            <div className="FiltrosREstudiante">
              <div className="SelectR">
                <p>CodMateria</p>
              </div>
              <div className="SelectR">
                <p>NombreMateria</p>
              </div>
              <div className="SelectR">
                <p>Once</p>
              </div>
              <div className="SelectR More">
                <p>Profesor de la materia</p>
              </div>
              <div className="SelectR AñoInsF">
                <Link to="/estudiantes/mis_notas/ver_notas">
                  <button className="DickBro">Ver notas</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Estudiantes_notas);
