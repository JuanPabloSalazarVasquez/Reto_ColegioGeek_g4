import React from "react";
import axios from 'axios';

import "../Styles/Maestros_ver_estudiantes_grupos.css";

import { withRouter } from "react-router-dom";



class Maestros_ver_estudiantes_grupos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id_grupo: this.props.location.state.id_grupo,
      datos: []
    };
  }

   // Peticion get para traer todos estudiantes de un grupo
componentDidMount(){
  console.log(this.state.id_grupo)
  axios.get(`http://34.75.218.172:4535/grupos-estudiantes/maestros-ver-estudiantes-grupo/${this.state.id_grupo}`)
    .then(res =>{
      console.log(res.data)
      this.setState({
        datos: res.data
      })
  }).catch(err=>{
    console.log(err.massage)
  })
}
// Fin peticion get


  render() {
    console.log(this.state.datos);
    const estudiantesGrupo = this.state.datos;

    return (
      <>
        <div className="VerEstuGrupContainer-Maestros_ver_estudiantes_grupos">
          <div className="FiltradoEstudiante-Maestros_ver_estudiantes_grupos">
          <div className="FiltrosREstudiante-Maestros_ver_estudiantes_grupos">
              <div>
                <input
                  type="number"
                  className="SelectR-Maestros_ver_estudiantes_grupos"
                  placeholder="Matricula"
                  autoComplete="off"
                />
              </div>
              <div>
                <input
                  type="text"
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
            </div>
      
          {estudiantesGrupo.map((datosT) => {
            return (
              <div className="EstuFilter-Maestros_ver_estudiantes_grupos">
              <div className="FiltrosREstudiante-Maestros_ver_estudiantes_grupos">
                <div className="SelectR-Maestros_ver_estudiantes_grupos">
                  <p className="pTexts-Maestros_ver_estudiantes_grupos MinMin-Maestros_ver_estudiantes_grupos">{datosT.codigo_estudiante}</p>
                </div>
                <div className="SelectR-Maestros_ver_estudiantes_grupos">
                  <p className="pTexts-Maestros_ver_estudiantes_grupos More-Maestros_ver_estudiantes_grupos">{datosT.nombres}</p>
                </div>
                <div className="SelectR-Maestros_ver_estudiantes_grupos">
                  <p className="pTexts-Maestros_ver_estudiantes_grupos More-Maestros_ver_estudiantes_grupos">{datosT.apellidos}</p>
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

export default withRouter(Maestros_ver_estudiantes_grupos);
