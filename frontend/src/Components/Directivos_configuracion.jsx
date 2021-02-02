import React from "react";
import axios from 'axios';

import "../Styles/Maestros_configuracion.css";

import { withRouter } from "react-router-dom";

class DirectivosConfiguracion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Peticion get para traer todos estudiantes de un grupo
  componentDidMount() {
    axios.get(``, { id_maestro: this.state.id_maestro })
      .then(res => {
        console.log(res.data)
        this.setState({
          datos: res.data
        })
      }).catch(err => {
        console.log(err.massage)
      })
  }
  // Fin peticion get

  render() {
    console.log(this.state.datos);

    return (
      <>
        <div className="VerEstuGrupContainer-Maestros_ver_estudiantes_grupos">
          <div className="FiltradoEstudiante-Maestros_ver_estudiantes_grupos">
            <div className="FiltrosREstudiante-Maestros_ver_estudiantes_grupos-Registro">
              <div>
                <input
                  type="number"
                  className="SelectR-Maestros_ver_estudiantes_grupos"
                  placeholder="Nombre"
                  autoComplete="off"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="SelectR-Maestros_ver_estudiantes_grupos"
                  placeholder="Apellido"
                  autoComplete="off"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="SelectR-Maestros_ver_estudiantes_grupos"
                  placeholder="Tipo_Doc"
                  autoComplete="off"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="SelectR-Maestros_ver_estudiantes_grupos"
                  placeholder="Num_Doc"
                  autoComplete="off"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="SelectR-Maestros_ver_estudiantes_grupos"
                  placeholder="Sexo"
                  autoComplete="off"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="SelectR-Maestros_ver_estudiantes_grupos"
                  placeholder="Fecha_Nacim"
                  autoComplete="off"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="SelectR-Maestros_ver_estudiantes_grupos"
                  placeholder="Reidencia"
                  autoComplete="off"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="SelectR-Maestros_ver_estudiantes_grupos"
                  placeholder="Ciudad"
                  autoComplete="off"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="SelectR-Maestros_ver_estudiantes_grupos"
                  placeholder="Telefono"
                  autoComplete="off"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="SelectR-Maestros_ver_estudiantes_grupos"
                  placeholder="Celular"
                  autoComplete="off"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="SelectR-Maestros_ver_estudiantes_grupos"
                  placeholder="Correo electronico"
                  autoComplete="off"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="SelectR-Maestros_ver_estudiantes_grupos"
                  placeholder="Foto Perfi"
                  autoComplete="off"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="SelectR-Maestros_ver_estudiantes_grupos"
                  placeholder="PDF Documento"
                  autoComplete="off"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(DirectivosConfiguracion);