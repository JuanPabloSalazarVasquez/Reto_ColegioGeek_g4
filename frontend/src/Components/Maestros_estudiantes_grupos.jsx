import React from "react";

import "../Styles/Maestros_estudiantes_grupos.css";

import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Maestros_estudiantes_grupos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <p>Esta es la parte de maestros para ver los estudiantes por grupo</p>
      </>
    );
  }
}

export default withRouter(Maestros_estudiantes_grupos);