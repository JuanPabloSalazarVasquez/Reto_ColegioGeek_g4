import React from "react";

import "../Styles/Estudiantes_consolidados.css";

import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Estudiantes_consolidados extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <p>Esta es la parte de estudiantes para ver consolidados.</p>
      </>
    );
  }
}

export default withRouter(Estudiantes_consolidados);