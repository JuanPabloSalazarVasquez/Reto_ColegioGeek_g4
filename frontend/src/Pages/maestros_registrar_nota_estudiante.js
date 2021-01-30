/* eslint-disable react/jsx-pascal-case */
import React from "react";

import Maestros_Registrar_Nota_Estudiante from "../Components/Maestros_Registrar_Nota_Estudiante";
import HeaderSistema_Maestros from "../Components/HeaderSistema_Maestros";

import { withRouter } from "react-router-dom";

class maestros_registrar_nota_estudiante extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <HeaderSistema_Maestros pathname="/maestros/registrar_notas/grupo_estudiantes" />
        <Maestros_Registrar_Nota_Estudiante />
      </>
    );
  }
}

export default withRouter(maestros_registrar_nota_estudiante);
