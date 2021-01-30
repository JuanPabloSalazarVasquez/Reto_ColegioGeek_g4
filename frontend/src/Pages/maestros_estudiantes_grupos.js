import React from "react";

import Maestros_estudiantes_grupos from "../Components/Maestros_estudiantes_grupos";
import HeaderSistema_Maestros from '../Components/HeaderSistema_Maestros';

import { withRouter } from "react-router-dom";

class maestros_estudiantes_grupos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
      <HeaderSistema_Maestros Title = "Estudiantes por grupo" pathname = '/maestros' />
        <Maestros_estudiantes_grupos />
      </>
    );
  }
}

export default withRouter(maestros_estudiantes_grupos);