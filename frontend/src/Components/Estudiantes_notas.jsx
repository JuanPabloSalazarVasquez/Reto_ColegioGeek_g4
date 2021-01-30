import React from "react";

import "../Styles/Estudiantes_notas.css";

import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Estudiantes_notas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div></div>
        <div className="div-padre-cards-materias-Estudiante_notas">
          <div className="div-card-materia-Estudiante_notas">
            <div className='card-materia-Estudiantes_notas'>Matematicas</div>
            <div className="card-estudiante-Estudiantes_notas">Emanuel Acevedo Munoz</div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Estudiantes_notas);
