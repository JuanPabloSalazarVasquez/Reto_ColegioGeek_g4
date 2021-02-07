import React from "react";
import axios from "axios";

import "../Styles/VerRegEstu.css";

import { withRouter, Link } from "react-router-dom";

class Directivos_grupos_ver_estudiantes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id_grupo: this.props.location.state.id_grupo,
      datos: [],
      datos_materias: []
    };
  }

  //Petición get para obtener los estudiantes existentes dentro de un grupo
  componentWillMount() {
    console.log(this.state.id_grupo)
    axios
      .get(
        `http://localhost:4535/grupos-estudiantes/estudiantes-ver-grupos-estudiantes-directivos/${this.state.id_grupo}`
      )
      .then((res) => {
        console.log(res.data);
        this.setState({
          datos: res.data
        });
      })
      .catch((err) => {
        console.log(err.massage);
      });
  }
  //Fin get

  //Petición get para obtener los estudiantes existentes dentro de un grupo
  componentDidMount() {
    console.log(this.state.id_grupo)
    axios
      .get(
        `http://localhost:4535/grupos-materias/directivos-materias-grupo/${this.state.id_grupo}`
      )
      .then((res) => {
        console.log(res.data);
        this.setState({
          datos_materias: res.data
        });
      })
      .catch((err) => {
        console.log(err.massage);
      });
  }
  //Fin get

  render() {
    console.log(this.state.datos);
    const estudiantesGrupo = this.state.datos;
    const materiasGrupo = this.state.datos_materias;
    console.log(this.state.datos_materias)

    return (
      <>
        <div id="VerEstuGrupContainer">
          <div className="FiltradoGroup">
            {/* Filtro Estudiantes */}
            <div className="FiltrosREstudiante">
              <div>
                <input
                  type="number"
                  className="SelectR"
                  placeholder="Matricula"
                  autoComplete="off"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="SelectR"
                  placeholder="Nombre"
                  autoComplete="off"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="SelectR"
                  placeholder="Apellido"
                  autoComplete="off"
                />
              </div>
            </div>
            {/* Filtro Estudiantes */}
            {/* Estudiantes */}

            {estudiantesGrupo.map((datosT) => {
            return (
            <div className=" EstuFilter">
              <div className="FiltrosREstudiante">
                <div className="SelectR">
                  <p>{datosT.codigo_estudiante}</p>
                </div>
                <div className="SelectR">
                  <p>{datosT.nombres}</p>
                </div>
                <div className="SelectR">
                  <p>{datosT.apellidos}</p>
                </div>
              </div>
            </div>
            );
          })}
            {/* Fin Estudiantes */}
          </div>

          {/* Materias Grupo */}
          <div className="VerMate">
            <div className="VerMate2">
              <div className="SelectR SelectR3">
                <p>Materias</p>
              </div>
              <Link
                to={{
                  pathname: "/directivos/registro_Grupos",
                }}
              >
                <button className="SelectR button">Volver</button>
              </Link>
            </div>
            {materiasGrupo.map((datosT) => {
            return (
            <div className="VerMate3">
              <div className="VerMate4">
                <div className="SelectR">
                  <p>{datosT.nombre_materia}</p>
                </div>
                <div className="SelectR">
                  <p>{datosT.codigo_materia}</p>
                </div>
              </div>
            </div>
            );
          })}
          </div>
          {/* Fin Materias Grupo */}
        </div>
      </>
    );
  }
}

export default withRouter(Directivos_grupos_ver_estudiantes);
