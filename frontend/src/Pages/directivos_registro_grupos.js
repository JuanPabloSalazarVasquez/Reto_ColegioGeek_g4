/* eslint-disable react/jsx-pascal-case */
import React from "react";

import HeaderSistema from "../Components/HeaderSistema";
import Directivos_registro_grupos from "../Components/Directivos_registro_grupos";

import "../Styles/RegistroEstudiantes.css";

import { withRouter } from "react-router-dom";

class directivos_registro_grupos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <HeaderSistema Title="Registro de grupos" />
        <Directivos_registro_grupos />
      </>
    );
  }
}

export default withRouter(directivos_registro_grupos);
