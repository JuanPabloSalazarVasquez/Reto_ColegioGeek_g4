import React from "react";

import "../Styles/Estudiantes_maestros.css";

import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Estudiantes_maestros extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <p>Esta es la parte de estudiantes para ver los maestros que le dan clase.</p>
      </>
    );
  }
}

export default withRouter(Estudiantes_maestros);