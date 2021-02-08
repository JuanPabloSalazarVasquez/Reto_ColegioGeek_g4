import React from "react";
import axios from "axios";

import "../Styles/Estudiantes_consolidados.css";

import { withRouter } from "react-router-dom";

class Estudiantes_consolidados extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id_estudiante: JSON.parse(sessionStorage.getItem("id_estudiante")),
      datos: [],
    };
  }

  // Peticion get para traer todos los consolidados que pertenescan al estudiante
  componentDidMount() {
    axios
      .get(
        `http://35.185.93.150:4535/consolidados/consolidados-estudiante/${this.state.id_estudiante.id_estudiante}`
      )
      .then((res) => {
        console.log(res.data);
        this.setState({
          datos: res.data,
        });
      })
      .catch((err) => {
        console.log(err.massage);
      });
  }

  render() {
    console.log(this.state.datos);
    const consolidados = this.state.datos;

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

          {consolidados.map((datosT) => {
            return (
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
                    <p className="pTextos-Estudiantes_consolidados">
                      {datosT.consolidado}
                    </p>
                  </div>
                  <div className="SelectConsolidados-Estudiantes_consolidados">
                    <button className="ButtonConsolidados-Estudiantes_consolidados">
                      Descargar consolidado
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default withRouter(Estudiantes_consolidados);
