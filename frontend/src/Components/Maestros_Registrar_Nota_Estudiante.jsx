import React from "react";
import axios from "axios";

import "../Styles/Maestros_Registrar_Nota_Estudiante.css";

import { withRouter } from "react-router-dom";

class Maestros_Registrar_Nota_Estudiante extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: [],
    };
  }

  // Peticion post para crear un nuevo registro en la tabla notas
  peticionPost = async () => {
    delete this.state.form.ConfirmarContrasena;
    delete this.state.form.ConfirmarCorreo;
    await axios
      .post(
        "http://localhost:4020/api/nuevo-trabajador/registro",
        this.state.form
      )
      .then((response) => {
        console.log("Se ha creado un nuevo trabajador");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // Peticion get para ver las notas de une studiante
  componentDidMount() {
    axios
      .get(`http://localhost:4535/notas/notas-materia-estudiante/${this.state.id_materia}/${this.state.id_estudiante}`)
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

  // Peticion post agregar nota a un estudiante
  componentDidMount() {
    axios
      .post(`http://localhost:4535/notas/nueva-nota-estudiante/${this.state.id_maestro}`, {  })
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
    const notasEstudiante = this.state.datos;

    return (
      <>
        <div className="VerEstuGrupContainer-Maestros_Registrar_Nota_Estudiante">
          <div className="FiltradoEstudiante-Maestros_Registrar_Nota_Estudiante">
            {/* Filtrar las notas de un estudiante */}
            <div className="FiltrosREstudiante-Maestros_Registrar_Nota_Estudiante">
              <div>
                <input
                  type="number"
                  className="SelectR-Maestros_Registrar_Nota_Estudiante"
                  placeholder="Nota"
                  autoComplete="off"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="SelectR-Maestros_Registrar_Nota_Estudiante"
                  placeholder="Tipo nota"
                  autoComplete="off"
                />
              </div>
            </div>
            {/* Agregar una nota a un estudiante */}
            <div className="EstuFilter-Maestros_Registrar_Nota_Estudiante">
              <div className="FiltrosREstudiante-Maestros_Registrar_Nota_Estudiante-Registro">
                <div className="SelectR-Maestros_Registrar_Nota_Estudiante">
                  <p className="pTexts-Maestros_Registrar_Nota_Estudiante">
                    Matricula
                  </p>
                </div>
                <div className="SelectR-Maestros_Registrar_Nota_Estudiante">
                  <p className="pTexts-Maestros_Registrar_Nota_Estudiante">
                    Emanuel
                  </p>
                </div>
                <div className="SelectR-Maestros_Registrar_Nota_Estudiante">
                  <p className="pTexts-Maestros_Registrar_Nota_Estudiante">
                    Acevedo Munoz
                  </p>
                </div>
                <div className="SelectR-Maestros_Registrar_Nota_Estudiante">
                  <input
                    type="number"
                    className="SelectR-Maestros_Registrar_Nota_Estudiante"
                    placeholder="Nota"
                    autoComplete="off"
                  />
                </div>
                <div className="SelectR-Maestros_Registrar_Nota_Estudiante">
                  <input
                    type="text"
                    className="SelectR-Maestros_Registrar_Nota_Estudiante"
                    placeholder="Tipo nota"
                    autoComplete="off"
                  />
                </div>
                <button className="Button-Maestros_Registrar_Nota_Estudiante">
                  Agregar
                </button>
              </div>
            </div>

            {/* Notas del estudiante */}
            <div className="EstuFilter-Maestros_Registrar_Nota_Estudiante">
              <div className="FiltrosREstudiante-Maestros_Registrar_Nota_Estudiante">
                <div className="SelectR-Maestros_Registrar_Nota_Estudiante">
                  <p className="pTexts-Maestros_Registrar_Nota_Estudiante">
                    Matricula
                  </p>
                </div>
                <div className="SelectR-Maestros_Registrar_Nota_Estudiante">
                  <p className="pTexts-Maestros_Registrar_Nota_Estudiante">
                    Emanuel
                  </p>
                </div>
                <div className="SelectR-Maestros_Registrar_Nota_Estudiante">
                  <p className="pTexts-Maestros_Registrar_Nota_Estudiante">
                    Acevedo Munoz
                  </p>
                </div>
                <div className="SelectR-Maestros_Registrar_Nota_Estudiante">
                  <p className="pTexts-Maestros_Registrar_Nota_Estudiante">
                    4.5
                  </p>
                </div>
                <div className="SelectR-Maestros_Registrar_Nota_Estudiante">
                  <p className="pTexts-Maestros_Registrar_Nota_Estudiante">
                    Actitudinal
                  </p>
                </div>
              </div>
            </div>

            {/* 
          {notasEstudiante.map((datosT) => {
            return (
              <div className="EstuFilter-Maestros_Registrar_Nota_Estudiante">
              <div className="FiltrosREstudiante-Maestros_Registrar_Nota_Estudiante">
                <div className="SelectR-Maestros_Registrar_Nota_Estudiante">
                  <p className="pTexts-Maestros_Registrar_Nota_Estudiante">
                    Matricula
                  </p>
                </div>
                <div className="SelectR-Maestros_Registrar_Nota_Estudiante">
                  <p className="pTexts-Maestros_Registrar_Nota_Estudiante">
                    Emanuel
                  </p>
                </div>
                <div className="SelectR-Maestros_Registrar_Nota_Estudiante">
                  <p className="pTexts-Maestros_Registrar_Nota_Estudiante">
                    Acevedo Munoz
                  </p>
                </div>
                <div className="SelectR-Maestros_Registrar_Nota_Estudiante">
                  <p className="pTexts-Maestros_Registrar_Nota_Estudiante">
                    4.5
                  </p>
                </div>
                <div className="SelectR-Maestros_Registrar_Nota_Estudiante">
                  <p className="pTexts-Maestros_Registrar_Nota_Estudiante">
                    Actitudinal
                  </p>
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

export default withRouter(Maestros_Registrar_Nota_Estudiante);
