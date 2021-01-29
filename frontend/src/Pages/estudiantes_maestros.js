import React from "react";

import Estudiantes_maestros from "../Components/Estudiantes_maestros";
import HeaderSistema_Estudiantes from '../Components/HeaderSistema_Estudiantes';

import { withRouter } from "react-router-dom";

class estudiantes_maestros extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
      <HeaderSistema_Estudiantes Title = "Mis maestros" pathname = '/estudiantes' />
        <Estudiantes_maestros />
      </>
    );
  }
}

export default withRouter(estudiantes_maestros);