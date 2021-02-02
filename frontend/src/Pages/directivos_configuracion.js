import React from "react";

import Directivos_configuracion from "../Components/Directivos_configuracion";
import HeaderSistema from '../Components/HeaderSistema';

import { withRouter } from "react-router-dom";

class directivos_configuracion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
      <HeaderSistema Title = "Configuracion de cuenta Directivos" pathname = '/directivos' />
        <Directivos_configuracion />
      </>
    );
  }
}

export default withRouter(directivos_configuracion);