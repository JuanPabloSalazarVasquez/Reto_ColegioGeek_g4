import React from "react";

import "../Styles/Estudiantes_consolidados.css";

import { withRouter } from "react-router-dom";

class Estudiantes_consolidados extends React.Component {
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
                Año
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
            <div className="SelectR AñoInsF">
              <p>Consolidados</p>
            </div>
          </div>

          {/* Materias */}
          <div id="CardsContainerReEs">
            <div className="FiltrosREstudiante">
              <div className="SelectR">
                <p>Año</p>
              </div>
              <div className="SelectR">
                <p>Grado</p>
              </div>
              <div className="SelectR More">
                <p>Profesor de la materia</p>
              </div>
              <div className="Min GrupoF">
                <p>Estado</p>
              </div>
              <div className="SelectR AñoInsF">
                
                  <button className="DickBro">Descargar consolidado</button>
               
              </div>
              <div className="ImgRMas"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Estudiantes_consolidados);