import React from "react";

import "../Styles/Estudiantes_materias.css";

import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Estudiantes_materias extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <p>Esta es la parte de estudiantes para ver las materias a las que esta registrado.</p>
      </>
    );
  }
}

export default withRouter(Estudiantes_materias);