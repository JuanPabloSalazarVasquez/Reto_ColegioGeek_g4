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
        <div className="RegistroEsContainer-Estudiantes_consolidados">
          <div className="FiltrosConsolidadosEstudiantes-Estudiantes_consolidados">
            <select className="SelectConsolidados-Estudiantes_consolidados">
              <option value="0" className="Dis-Estudiantes_consolidados">
                Año
              </option>
            </select>
            <select className="SelectConsolidados-Estudiantes_consolidados MinMin-Estudiantes_consolidados">
              <option value="0" className="Dis-Estudiantes_consolidados">
                Grado
              </option>
              <option value="Sexto">Sexto</option>
              <option value="Septimo">Septimo</option>
              <option value="Octavo">Octavo</option>
              <option value="Noveno">Noveno</option>
              <option value="Decimo">Decimo</option>
              <option value="Once">Once</option>
            </select>
            <select className="SelectConsolidados-Estudiantes_consolidados More-Estudiantes_consolidados">
              <option value="0" className="Dis-Estudiantes_consolidados">
                Director
              </option>
            </select>
            <div className="SelectConsolidados-Estudiantes_consolidados">
              <p>Consolidados</p>
            </div>
          </div>

          {/* Consolidados */}
          <div className="CardsContainerEstudiantes_consolidados-Estudiantes_consolidados">
            <div className="FiltrosConsolidadosEstudiantes-Estudiantes_consolidados">
              <div className="SelectConsolidados-Estudiantes_consolidados">
                <p className="pTextos-Estudiantes_consolidados">Año</p>
              </div>
              <div className="SelectConsolidados-Estudiantes_consolidados">
                <p className="pTextos-Estudiantes_consolidados">Grado</p>
              </div>
              <div className="SelectConsolidados-Estudiantes_consolidados More-Estudiantes_consolidados">
                <p className="pTextos-Estudiantes_consolidados">
                  Profesor de la materia
                </p>
              </div>
              <div className="Min GrupoF">
                <p className="pTextos-Estudiantes_consolidados">Estado</p>
              </div>
              <div className="SelectConsolidados-Estudiantes_consolidados">
                <button className="ButtonConsolidados-Estudiantes_consolidados">
                  Descargar consolidado
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Estudiantes_consolidados);
