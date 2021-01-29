import React from "react";

import Estudiantes_materias from "../Components/Estudiantes_materias";
import HeaderSistema_Estudiantes from '../Components/HeaderSistema_Estudiantes';

import { withRouter } from "react-router-dom";

class estudiantes_materias extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
      <HeaderSistema_Estudiantes Title = "Mis materias" pathname = '/estudiantes' />
        <Estudiantes_materias />
      </>
    );
  }
}

export default withRouter(estudiantes_materias);