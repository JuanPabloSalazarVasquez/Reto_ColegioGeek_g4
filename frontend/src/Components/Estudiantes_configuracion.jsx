import React from "react";

import "../Styles/Estudiantes_configuracion.css";

import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Estudiantes_configuracion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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

export default withRouter(Estudiantes_configuracion);