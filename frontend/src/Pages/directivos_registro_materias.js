/* eslint-disable react/jsx-pascal-case */
import React from 'react';

import HeaderSistema from '../Components/HeaderSistema';
import Directivos_registro_materias from '../Components/Directivos_registro_materias';

import {withRouter} from 'react-router-dom';

class directivos_registro_materias extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <>
      <HeaderSistema />
      <Directivos_registro_materias />
      </>
     );
  }
}
 
export default withRouter(directivos_registro_materias);
 