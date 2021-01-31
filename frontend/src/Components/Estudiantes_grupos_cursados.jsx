import React from "react";

import "../Styles/Estudiantes_grupos_cursados.css";

import { withRouter } from "react-router-dom";

class Estudiantes_materias extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="RegistroEsContainer-Grupos_Cursados">
          <div className="FiltrosGruposCursados-Grupos_Cursados">
            <select className="Select-Grupos_Cursados More">
              <option value="0" className="Dis-Grupos_Cursados">
                Codigo Grupo
              </option>
              <option value="1">
                2020001
              </option>
            </select>
            <select className="Select-Grupos_Cursados MinMin">
              <option value="0" className="Dis-Grupos_Cursados">
                Grado
              </option>
              <option value="Sexto">Sexto</option>
              <option value="Septimo">Septimo</option>
              <option value="Octavo">Octavo</option>
              <option value="Noveno">Noveno</option>
              <option value="Decimo">Decimo</option>
              <option value="Once">Once</option>
            </select>
            <select className="Select-Grupos_Cursados More">
              <option value="0" className="Dis-Grupos_Cursados">
                Director
              </option>
            </select>
            <select className="Select-Grupos_Cursados MinMin">
              <option value="0" className="Dis-Grupos_Cursados">
              Año
              </option>
              <option value="1">2020</option>
            </select>
          </div>

          {/* Grupos cursados */}
          <div className="CardsContainerGruposCursados-Grupos_Cursados">
            <div className="FiltrosGruposCursados-Grupos_Cursados">
              <div className="Select-Grupos_Cursados">
                <p className="p_Texts-Grupos_Cursados">Codigo Grupo</p>
              </div>
              <div className="Select-Grupos_Cursados">
                <p className="p_Texts-Grupos_Cursados">Once</p>
              </div>
              <div className="Select-Grupos_Cursados More">
                <p className="p_Texts-Grupos_Cursados">Profesor director</p>
              </div>
              <div className="Min">
                <p className="p_Texts-Grupos_Cursados">Año</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Estudiantes_materias);