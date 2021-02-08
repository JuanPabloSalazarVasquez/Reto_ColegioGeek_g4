import React from "react";

import Maestros_registro_notas from "../Components/Maestros_registro_notas";
import HeaderSistema_Maestros from '../Components/HeaderSistema_Maestros';

import { withRouter } from "react-router-dom";

class maestros_registro_notas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
      <HeaderSistema_Maestros Title = "Registro notas" pathname = '/maestros' />
        <Maestros_registro_notas />
      </>
    );
  }
}

export default withRouter(maestros_registro_notas);