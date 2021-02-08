/* eslint-disable react/jsx-pascal-case */
import React from "react";

import HeaderSistema from "../Components/HeaderSistema";
import Directivos_registro_maestros from "../Components/Directivos_registro_maestros";

import "../Styles/RegistroEstudiantes.css";

import { withRouter } from "react-router-dom";

class directivos_registro_maestros extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <HeaderSistema Title="Registro de maestros" />
        <Directivos_registro_maestros />
      </>
    );
  }
}

export default withRouter(directivos_registro_maestros);
