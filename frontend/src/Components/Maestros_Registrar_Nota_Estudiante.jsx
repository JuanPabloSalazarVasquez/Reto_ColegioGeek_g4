/* eslint-disable react/jsx-pascal-case */
import React from "react";
import axios from "axios";

import "../Styles/Maestros_Registrar_Nota_Estudiante.css";

import HeaderSistema_Maestros from "./HeaderSistema_Maestros";

import { withRouter } from "react-router-dom";

class Maestros_Registrar_Nota_Estudiante extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id_maestro: JSON.parse(sessionStorage.getItem('id_maestro')),
      id_grupo: this.props.location.state.id_grupo,
      id_estudiante: this.props.location.state.id_estudiante,
      id_materia: this.props.location.state.id_materia,
      datos: [],
      datosEstudiante: [],
      from: {
        
      }
    };
  }

  // Peticion post para crear un nuevo registro en la tabla notas
  peticionPost = async () => {
    delete this.state.form.ConfirmarContrasena;
    delete this.state.form.ConfirmarCorreo;
    await axios
      .post(
        "",
        this.state.form
      )
      .then((response) => {
        console.log("Se ha creado un nuevo trabajador");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

// Peticion get para traer todas las notas de un estudiante

componentWillMount() {
  axios
    .get(`http://localhost:4535/estudiantes/maestro-registro-estudiante-info-estudiante/${this.state.id_estudiante}`)
    .then((res) => {
      console.log(res.data);
      this.setState({
        datosEstudiante: res.data[0]
      });
    })
    .catch((err) => {
      console.log(err.massage);
    });
}

// Fin peticion get

  // Peticion get para traer todas las notas de un estudiante
  componentDidMount() {
    axios
      .get(`http://localhost:4535/notas/notas-materia-estudiante/${this.state.id_materia}/${this.state.id_estudiante}`)
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
  // Fin peticion get

  render() {
    console.log(this.state.datos);
    const notasEstudiante = this.state.datos;
    console.log(this.state.datosEstudiante);

    return (
      <>
      <HeaderSistema_Maestros pathname="/maestros/registrar_notas/grupo_estudiantes" PaginaAnterior = {[{
                        id_maestro: this.state.id_maestro,
                        id_grupo: this.state.id_grupo,
                        id_estudiante: this.state.id_estudiante,
                        id_materia: this.state.id_materia
                    }]} />
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
                    {this.state.datosEstudiante.codigo_estudiante}
                  </p>
                </div>
                <div className="SelectR-Maestros_Registrar_Nota_Estudiante">
                  <p className="pTexts-Maestros_Registrar_Nota_Estudiante">
                  {this.state.datosEstudiante.nombres}
                  </p>
                </div>
                <div className="SelectR-Maestros_Registrar_Nota_Estudiante">
                  <p className="pTexts-Maestros_Registrar_Nota_Estudiante">
                  {this.state.datosEstudiante.apellidos}
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

          {notasEstudiante.map((datosT) => {
            return (
              <div className="EstuFilter-Maestros_Registrar_Nota_Estudiante">
              <div className="FiltrosREstudiante-Maestros_Registrar_Nota_Estudiante">
                <div className="SelectR-Maestros_Registrar_Nota_Estudiante">
                  <p className="pTexts-Maestros_Registrar_Nota_Estudiante">
                    {datosT.codigo_estudiante}
                  </p>
                </div>
                <div className="SelectR-Maestros_Registrar_Nota_Estudiante">
                  <p className="pTexts-Maestros_Registrar_Nota_Estudiante">
                  {datosT.nombres}
                  </p>
                </div>
                <div className="SelectR-Maestros_Registrar_Nota_Estudiante">
                  <p className="pTexts-Maestros_Registrar_Nota_Estudiante">
                  {datosT.apellidos}
                  </p>
                </div>
                <div className="SelectR-Maestros_Registrar_Nota_Estudiante">
                  <p className="pTexts-Maestros_Registrar_Nota_Estudiante">
                  {datosT.nota}
                  </p>
                </div>
                <div className="SelectR-Maestros_Registrar_Nota_Estudiante">
                  <p className="pTexts-Maestros_Registrar_Nota_Estudiante">
                  {datosT.tipo_nota}
                  </p>
                </div>
              </div>
            </div>
            )
          })}

          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Maestros_Registrar_Nota_Estudiante);
