import React from "react";

import Estudiantes_configuracion from "../Components/estudiantes";
import HeaderSistema_Estudiantes from "../Components/HeaderSistema_Estudiantes";

import { withRouter } from "react-router-dom";

class estudiantes_configuracion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <HeaderSistema_Estudiantes Title="Mi cuenta" pathname="/estudiantes" />
        <Estudiantes_configuracion />
      </>
    );
  }
}

export default withRouter(estudiantes_configuracion);
