import React from "react";
import axios from 'axios';

import "../Styles/Estudiantes_notas_ver_notas.css";

import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Estudiantes_notas_ver_notas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //id_estudiante: this.props.location.state.id_estudiante,
      //id_materia: this.props.location.state.id_materia,
      datos: []
    };
  }

  // Peticion get para traer todas las notas que corresponde a un estudiante respecto a una materia
componentDidMount(){
  axios.get(``, { id_estudiante: this.state.id_estudiante, id_materia: this.state.id_materia})
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
            {/* Notas del estudiante */}
            <div className="EstuFilter-Estudiantes_notas_ver_notas">
              <div className="FiltrosREstudiante-Estudiantes_notas_ver_notas">
                <div className="SelectR-Estudiantes_notas_ver_notas">
                  <p className="pTexts-Estudiantes_notas_ver_notas">Matricula</p>
                </div>
                <div className="SelectR-Estudiantes_notas_ver_notas">
                  <p className="pTexts-Estudiantes_notas_ver_notas">Emanuel</p>
                </div>
                <div className="SelectR-Estudiantes_notas_ver_notas">
                  <p className="pTexts-Estudiantes_notas_ver_notas">Acevedo Munoz</p>
                </div>
                <div className="SelectR-Estudiantes_notas_ver_notas">
                    <p className="pTexts-Estudiantes_notas_ver_notas">Actitudinal</p>
                </div>
                <div className="SelectR-Estudiantes_notas_ver_notas">
                    <p className="pTexts-Estudiantes_notas_ver_notas">4.5</p>
                </div>
              </div>
            </div>

            {/* 
          {notasEstudiante.map((datosT) => {
            return (
              <div className="EstuFilter-Estudiantes_notas_ver_notas">
              <div className="FiltrosREstudiante-Estudiantes_notas_ver_notas">
                <div className="SelectR-Estudiantes_notas_ver_notas">
                  <p className="pTexts-Estudiantes_notas_ver_notas">Matricula</p>
                </div>
                <div className="SelectR-Estudiantes_notas_ver_notas">
                  <p className="pTexts-Estudiantes_notas_ver_notas">Emanuel</p>
                </div>
                <div className="SelectR-Estudiantes_notas_ver_notas">
                  <p className="pTexts-Estudiantes_notas_ver_notas">Acevedo Munoz</p>
                </div>
                <div className="SelectR-Estudiantes_notas_ver_notas">
                    <p className="pTexts-Estudiantes_notas_ver_notas">Actitudinal</p>
                </div>
                <div className="SelectR-Estudiantes_notas_ver_notas">
                    <p className="pTexts-Estudiantes_notas_ver_notas">4.5</p>
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

export default withRouter(Estudiantes_notas_ver_notas);