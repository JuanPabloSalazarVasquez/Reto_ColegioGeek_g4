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
        <div className="RegistroEsContainer-Maestros_estudiantes_grupos">
          <div className="Filtros-Maestros_estudiantes_grupos">
            <select className="Select-Maestros_estudiantes_grupos">
              <option value="0" className="Dis-Maestros_estudiantes_grupos">
                Cod Grupo
              </option>
            </select>
            <select className="Select-Maestros_estudiantes_grupos MinMin">
              <option value="0" className="Dis-Maestros_estudiantes_grupos">
                Grado
              </option>
              <option value="Sexto">Sexto</option>
              <option value="Septimo">Septimo</option>
              <option value="Octavo">Octavo</option>
              <option value="Noveno">Noveno</option>
              <option value="Decimo">Decimo</option>
              <option value="Once">Once</option>
            </select>
            <select className="Select-Maestros_estudiantes_grupos More-Maestros_estudiantes_grupos">
              <option value="0" className="Dis-Maestros_estudiantes_grupos">
                Director
              </option>
            </select>
            <input
              type="number"
              className="GrupoF MinMin-Maestros_estudiantes_grupos"
              placeholder="Cantidad"
              autoComplete="off"
            />
          </div>
          
          {/* Grupos */}
          <div className='CardsContainer-Maestros_estudiantes_grupos'>
            <div className="Filtros-Maestros_estudiantes_grupos">
              <div className="Select-Maestros_estudiantes_grupos">
                <p className='p_Texts-Maestros_estudiantes_grupos'>qweasda</p>
              </div>
              <div className="Select-Maestros_estudiantes_grupos">
                <p className='p_Texts-Maestros_estudiantes_grupos'>Once</p>
              </div>
              <div className="Select-Maestros_estudiantes_grupos More-Maestros_estudiantes_grupos">
                <p className='p_Texts-Maestros_estudiantes_grupos'>Emanuel Acevedo Munoz</p>
              </div>
              <div className="Min ">
                <p className='p_Texts-Maestros_estudiantes_grupos'>11</p>
              </div>
              <div className="Select-Maestros_estudiantes_grupos">
                <Link
                  to={{
                    pathname: "/maestros/estudiantes_grupos/ver_estudiantes",
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

export default withRouter(Maestros_estudiantes_grupos);
