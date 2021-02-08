import React from "react";
import axios from "axios";

import "../Styles/Estudiantes_notas_ver_notas.css";

import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Estudiantes_notas_ver_notas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id_estudiante: JSON.parse(localStorage.getItem("id_estudiante")),
      id_materia: this.props.location.state.id_materia,
      datos: [],
    };
  }

  // Peticion get para traer todas las notas que corresponde a un estudiante respecto a una materia
  componentDidMount() {
    axios
      .get(
        `http://34.75.218.172:4535/notas/estudiante-ver-notas-materia-estudiante/${this.state.id_estudiante.id_estudiante}/${this.state.id_materia}`
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
    const notasEstudiante = this.state.datos;

    return (
      <>
        <div className="VerEstuGrupContainer-Estudiantes_notas_ver_notas">
          <div className="FiltradoEstudiante-Estudiantes_notas_ver_notas">
            <div className="FiltrosREstudiante">
              <div>
                <input
                  type="number"
                  className="SelectR-Estudiantes_notas_ver_notas"
                  placeholder="Nota"
                  autoComplete="off"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="SelectR-Estudiantes_notas_ver_notas"
                  placeholder="Tipo nota"
                  autoComplete="off"
                />
              </div>
            </div>

            {notasEstudiante.map((datosT) => {
              return (
                <div className="EstuFilter-Estudiantes_notas_ver_notas">
                  <div className="FiltrosREstudiante-Estudiantes_notas_ver_notas">
                    <div className="SelectR-Estudiantes_notas_ver_notas">
                      <p className="pTexts-Estudiantes_notas_ver_notas">
                        {datosT.codigo_estudiante}
                      </p>
                    </div>
                    <div className="SelectR-Estudiantes_notas_ver_notas">
                      <p className="pTexts-Estudiantes_notas_ver_notas">
                        {datosT.nombres}
                      </p>
                    </div>
                    <div className="SelectR-Estudiantes_notas_ver_notas">
                      <p className="pTexts-Estudiantes_notas_ver_notas">
                        {datosT.apellidos}
                      </p>
                    </div>
                    <div className="SelectR-Estudiantes_notas_ver_notas">
                      <p className="pTexts-Estudiantes_notas_ver_notas">
                        {datosT.tipo_nota}
                      </p>
                    </div>
                    <div className="SelectR-Estudiantes_notas_ver_notas">
                      <p className="pTexts-Estudiantes_notas_ver_notas" key={datosT.nota}>
                        {datosT.nota}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Estudiantes_notas_ver_notas);
