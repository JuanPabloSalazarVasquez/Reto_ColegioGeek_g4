import React from "react";

import Estudiantes_grupos_cursados from "../Components/Estudiantes_grupos_cursados";
import HeaderSistema_Estudiantes from '../Components/HeaderSistema_Estudiantes';

import { withRouter } from "react-router-dom";

class estudiantes_grupos_cursados extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
      <HeaderSistema_Estudiantes Title = "Grupos cursados" pathname = '/estudiantes' />
        <Estudiantes_grupos_cursados />
      </>
    );
  }
}

export default withRouter(estudiantes_grupos_cursados);