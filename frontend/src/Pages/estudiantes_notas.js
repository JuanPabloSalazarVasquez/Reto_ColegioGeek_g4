/* eslint-disable react/jsx-pascal-case */
import React from "react";

import Estudiantes_notas from "../Components/Estudiantes_notas";
import HeaderSistema_Estudiantes from "../Components/HeaderSistema_Estudiantes";

import { withRouter } from "react-router-dom";

class estudiantes_notas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <HeaderSistema_Estudiantes Title="Mis notas" pathname="/estudiantes" />
        <Estudiantes_notas />
      </>
    );
  }
}

export default withRouter(estudiantes_notas);
