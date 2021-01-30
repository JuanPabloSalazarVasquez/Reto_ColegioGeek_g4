import React from "react";

import "../Styles/Maestros_configuracion.css";

import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Maestros_configuracion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <p>Esta es la parte de maestros para configurar su cuenta</p>
      </>
    );
  }
}

export default withRouter(Maestros_configuracion);