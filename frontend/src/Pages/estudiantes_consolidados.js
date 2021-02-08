import React from "react";

import Estudiantes_consolidados from "../Components/Estudiantes_consolidados";
import HeaderSistema_Estudiantes from '../Components/HeaderSistema_Estudiantes';

import { withRouter } from "react-router-dom";

class estudiantes_consolidados extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
      <HeaderSistema_Estudiantes Title = "Mis consolidados" pathname = '/estudiantes' />
        <Estudiantes_consolidados />
      </>
    );
  }
}

export default withRouter(estudiantes_consolidados);