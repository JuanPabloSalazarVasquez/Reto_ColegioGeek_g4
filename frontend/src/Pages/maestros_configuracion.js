import React from "react";

import Maestros_configuracion from "../Components/Maestros_configuracion";
import HeaderSistema_Maestros from '../Components/HeaderSistema_Maestros';

import { withRouter } from "react-router-dom";

class maestros_configuracion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
      <HeaderSistema_Maestros Title = "Configuracion cuenta" pathname = '/maestros' />
        <Maestros_configuracion />
      </>
    );
  }
}

export default withRouter(maestros_configuracion);