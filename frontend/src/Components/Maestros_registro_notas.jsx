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
        <div className='RegistroEsContainer-Maestros_registro_notas'>
          <div className="FiltrosMaestrosRegistroNotas-Maestros_registro_notas">
            <select className="SelectMaestrosRegistroNotas-Maestros_registro_notas">
              <option value="0" className="Dis-Maestros_registro_notas">
                Cod Grupo
              </option>
            </select>
            <select className="SelectMaestrosRegistroNotas-Maestros_registro_notas MinMin-Maestros_registro_notas">
              <option value="0" className="Dis-Maestros_registro_notas">
                Grado
              </option>
              <option value="Sexto">Sexto</option>
              <option value="Septimo">Septimo</option>
              <option value="Octavo">Octavo</option>
              <option value="Noveno">Noveno</option>
              <option value="Decimo">Decimo</option>
              <option value="Once">Once</option>
            </select>
            <select className="SelectMaestrosRegistroNotas-Maestros_registro_notas More-Maestros_registro_notas">
              <option value="0" className="Dis-Maestros_registro_notas">
                Director
              </option>
            </select>
          </div>

          {/* Grupos Maestros */}
          <div className="CardsContainerMaestrosRegistroNotas-Maestros_registro_notas">
            <div className="FiltrosMaestrosRegistroNotas-Maestros_registro_notas">
              <div className="SelectMaestrosRegistroNotas-Maestros_registro_notas">
                <p>qweasda</p>
              </div>
              <div className="SelectMaestrosRegistroNotas-Maestros_registro_notas">
                <p>Once</p>
              </div>
              <div className="SelectMaestrosRegistroNotas-Maestros_registro_notas More-Maestros_registro_notas">
                <p>Emanuel</p>
              </div>
              <div className="Min-Maestros_registro_notas">
                <p>11</p>
              </div>
              <div className="SelectMaestrosRegistroNotas-Maestros_registro_notas">
                <Link
                  to={{
                    pathname: "/maestros/registrar_notas/grupo_estudiantes",
                  }}
                >
                  <button className="ButtonMaestrosRegistroNotas-Maestros_registro_notas">Ver Estudiantes</button>
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
