import React from "react";

import Estudiantes_inicio from "../Components/Estudiantes_inicio";

import { withRouter } from "react-router-dom";

class estudiantes_inicio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Estudiantes_inicio />
      </>
    );
  }
}

export default withRouter(estudiantes_inicio);
