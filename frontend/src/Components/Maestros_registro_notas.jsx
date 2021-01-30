import React from "react";

import "../Styles/Estudiantes_consolidados.css";

import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Maestros_registro_notas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <p>Esta es la parte de maestros para registrar notas</p>
      </>
    );
  }
}

export default withRouter(Maestros_registro_notas);