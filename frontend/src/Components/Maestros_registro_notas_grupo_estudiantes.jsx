import React from "react";
import axios from "axios";

import "../Styles/VerRegEstu.css";
import "../Styles/Maestros_registro_notas_grupo_estudiantes.css";

import { withRouter, Link } from "react-router-dom";

class Maestros_registro_notas_grupo_estudiantes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //id_maestro: this.props.location.id_maestro,
      //id_grupo: this.props.location.id_grupo,
      datos: []
    };
  }

  // Peticion get para traer todos los estudiantes de un grupo
  componentDidMount() {
    axios
      .get(`http://localhost:4535/grupos-estudiantes/estudiantes-grupo-notas-ver-all-estudiantes/${this.state.id_grupo}`)
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
  // Fin peticion get

  render() {
    console.log(this.state.datos);
    const gruposEstudiantes = this.state.datos;

    return (
      <>
        <div className="VerEstuGrupContainer-Maestros_registro_notas_grupo_estudiantes">
          <div className="FiltradoEstudiante-Maestros_registro_notas_grupo_estudiantes ">
            <div className="FiltrosREstudiante-Maestros_registro_notas_grupo_estudiantes">
              <div>
                <input
                  type="number"
                  className="SelectR-Maestros_registro_notas_grupo_estudiantes"
                  placeholder="Matricula"
                  autoComplete="off"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="SelectR-Maestros_registro_notas_grupo_estudiantes"
                  placeholder="Nombre"
                  autoComplete="off"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="SelectR-Maestros_registro_notas_grupo_estudiantes"
                  placeholder="Apellido"
                  autoComplete="off"
                />
              </div>
            </div>
            {/* Estudiantes */}
            <div className="EstuFilter-Maestros_registro_notas_grupo_estudiantes">
              <div className="FiltrosREstudiante-Maestros_registro_notas_grupo_estudiantes">
                <div className="SelectR-Maestros_registro_notas_grupo_estudiantes">
                  <p className="pTexts-Maestros_registro_notas_grupo_estudiantes">
                    Matricula
                  </p>
                </div>
                <div className="SelectR-Maestros_registro_notas_grupo_estudiantes">
                  <p className="pTexts-Maestros_registro_notas_grupo_estudiantes">
                    Emanuel
                  </p>
                </div>
                <div className="SelectR-Maestros_registro_notas_grupo_estudiantes">
                  <p className="pTexts-Maestros_registro_notas_grupo_estudiantes">
                    Acevedo Munoz
                  </p>
                </div>
                <Link to="/maestros/registrar_notas/grupo_estudiantes/agregar_nota">
                  <button className="Button-Maestros_registro_notas_grupo_estudiantes">
                    Agregar nota
                  </button>
                </Link>
              </div>
            </div>

            {/* 
          {gruposEstudiantes.map((datosT) => {
            return (
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
            )
          })}
          */}
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Maestros_registro_notas_grupo_estudiantes);
