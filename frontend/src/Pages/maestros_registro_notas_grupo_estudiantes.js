/* eslint-disable react/jsx-pascal-case */
import React from "react";

import Maestros_registro_notas_grupo_estudiantes from "../Components/Maestros_registro_notas_grupo_estudiantes";
import HeaderSistema_Maestros from "../Components/HeaderSistema_Maestros";

import { withRouter } from "react-router-dom";

class maestros_registro_notas_grupo_estudiantes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <HeaderSistema_Maestros pathname="/maestros/registrar_notas" />
        <Maestros_registro_notas_grupo_estudiantes />
      </>
    );
  }
}

export default withRouter(maestros_registro_notas_grupo_estudiantes);
