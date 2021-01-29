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
        <p>Esta es la parte de estudiantes para configurar su cuenta.</p>
      </>
    );
  }
}

export default withRouter(Estudiantes_configuracion);