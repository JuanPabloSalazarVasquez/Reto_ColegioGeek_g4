/* eslint-disable react/jsx-pascal-case */
import React from "react";

import HeaderSistema from "../Components/HeaderSistema";
import Directivos_registro_estudiantes from "../Components/Directivos_registro_estudiantes";

import "../Styles/RegistroEstudiantes.css";

import { withRouter } from "react-router-dom";

class directivos_registro_estudiantes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <HeaderSistema Title="Registro de estudiantes" />
        <Directivos_registro_estudiantes />
      </>
    );
  }
}

export default withRouter(directivos_registro_estudiantes);
