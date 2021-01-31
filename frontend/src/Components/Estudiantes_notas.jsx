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
        <div className="RegistroEsContainer-Estudiantes_notas">
          <div className="FiltrosNotasEstudiantes-Estudiantes_notas">
            <select className="SelectNotas-Estudiantes_notas More-Estudiantes_notas">
              <option value="0" className="Dis-Estudiantes_notas">
                Codigo Materia
              </option>
            </select>
            <select className="SelectNotas-Estudiantes_notas MinMin-Estudiantes_notas">
              <option value="0" className="Dis-Estudiantes_notas">
                Grado
              </option>
              <option value="Sexto">Sexto</option>
              <option value="Septimo">Septimo</option>
              <option value="Octavo">Octavo</option>
              <option value="Noveno">Noveno</option>
              <option value="Decimo">Decimo</option>
              <option value="Once">Once</option>
            </select>
            <select className="SelectNotas-Estudiantes_notas More-Estudiantes_notas">
              <option value="0" className="Dis-Estudiantes_notas">
                Profesor
              </option>
            </select>
          </div>

          {/* Materias */}
          <div className='CardsContainerEstudiantes_Notas-Estudiantes_notas'>
            <div className="FiltrosREstudiante">
              <div className="SelectNotas-Estudiantes_notas">
                <p className="pTextos-Estudiantes_notas">CodMateria</p>
              </div>
              <div className="SelectNotas-Estudiantes_notas">
                <p className="pTextos-Estudiantes_notas">NombreMateria</p>
              </div>
              <div className="SelectNotas-Estudiantes_notas">
                <p className="pTextos-Estudiantes_notas">Once</p>
              </div>
              <div className="SelectNotas-Estudiantes_notas More-Estudiantes_notas">
                <p className="pTextos-Estudiantes_notas">Profesor de la materia</p>
              </div>
              <div className="SelectNotas-Estudiantes_notas">
                <Link to="/estudiantes/mis_notas/ver_notas">
                  <button className="ButtonNotas-Estudiantes_notas">Ver notas</button>
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
