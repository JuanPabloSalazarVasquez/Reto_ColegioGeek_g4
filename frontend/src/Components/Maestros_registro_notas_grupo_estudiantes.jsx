import React from "react";
import axios from "axios";

import "../Styles/VerRegEstu.css";
import "../Styles/Maestros_registro_notas_grupo_estudiantes.css";

import { withRouter, Link } from "react-router-dom";

class Maestros_registro_notas_grupo_estudiantes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id_maestro: JSON.parse(sessionStorage.getItem('id_maestro')),
      id_grupo: this.props.location.state.id_grupo,
      id_materia: this.props.location.state.id_materia,
      datos: []
    };
  }

  // Peticion get para traer todos los estudiantes de un grupo
  componentDidMount() {
    if(this.state.id_grupo == null){
      console.log('No hay nada en la sessionStorage')
      //console.log(sessionStorage.getItem('El del if 1:','id_grupo'))
      this.setState({
        id_grupo: JSON.parse(sessionStorage.getItem('id_grupo')).id_grupo,
        id_materia: JSON.parse(sessionStorage.getItem('id_materia')).id_materia
      })

      axios
      .get(`http://localhost:4535/grupos-estudiantes/estudiantes-grupo-notas-ver-all-estudiantes/${JSON.parse(sessionStorage.getItem('id_grupo')).id_grupo}`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          datos: res.data,
        });
      })
      .catch((err) => {
        console.log(err.massage);
      });
    }else if(this.state.id_grupo != null){
      //console.log(sessionStorage.getItem('El del if 2:','id_grupo'))
      sessionStorage.setItem('id_grupo', JSON.stringify({
        id_grupo: this.state.id_grupo
      }))
      sessionStorage.setItem('id_materia', JSON.stringify({
        id_materia: this.state.id_materia
      }))

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
    console.log('este es el id_grupo:', JSON.parse(sessionStorage.getItem('id_grupo')).id_grupo)
    console.log('este el id_grupo en el estado:', this.state.id_grupo)
    
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

          {gruposEstudiantes.map((datosT) => {
            return (
              <div className="EstuFilter-Maestros_registro_notas_grupo_estudiantes">
              <div className="FiltrosREstudiante-Maestros_registro_notas_grupo_estudiantes"key={datosT.codigo_estudiante}>
                <div className="SelectR-Maestros_registro_notas_grupo_estudiantes">
                  <p className="pTexts-Maestros_registro_notas_grupo_estudiantes">
                    {datosT.codigo_estudiante}
                  </p>
                </div>
                <div className="SelectR-Maestros_registro_notas_grupo_estudiantes">
                  <p className="pTexts-Maestros_registro_notas_grupo_estudiantes">
                    {datosT.nombres}
                  </p>
                </div>
                <div className="SelectR-Maestros_registro_notas_grupo_estudiantes">
                  <p className="pTexts-Maestros_registro_notas_grupo_estudiantes">
                    {datosT.apellidos}
                  </p>
                </div>
                <Link to={{
                    pathname: "/maestros/registrar_notas/grupo_estudiantes/agregar_nota",
                    state: {
                      id_grupo: this.state.id_grupo,
                      id_estudiante: datosT.id_estudiante,
                      id_materia: this.state.id_materia
                  }
                  }}>
                  <button className="Button-Maestros_registro_notas_grupo_estudiantes">
                    Agregar nota
                  </button>
                </Link>
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

export default withRouter(Maestros_registro_notas_grupo_estudiantes);
