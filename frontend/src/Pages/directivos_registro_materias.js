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
      <HeaderSistema 
      InfoUsurio = {[{
                        Name: this.props.location.state.Name,
                        Contraseña: this.props.location.state.Contraseña,
                        Usuario: this.props.location.state.Usuario,
                        Edad: this.props.location.state.Edad,
                        Cargo: this.props.location.state.Cargo
                    }]}/>
      <Directivos_registro_materias InfoUsurio = {[{
                        Name: this.props.location.state.Name,
                        Contraseña: this.props.location.state.Contraseña,
                        Usuario: this.props.location.state.Usuario,
                        Edad: this.props.location.state.Edad,
                        Cargo: this.props.location.state.Cargo
                    }]}/>
      </>
     );
  }
}
 
export default withRouter(directivos_registro_materias);
 