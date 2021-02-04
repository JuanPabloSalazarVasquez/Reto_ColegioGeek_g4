import React from "react";
import axios from 'axios';

import "../Styles/Estudiantes_configuracion.css";

import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Estudiantes_configuracion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
//Petición get para obtener información de la cuenta
  componentDidMount(){
    axios.get(``, { id_estudiante: this.state.id_estudiante })
      .then(res =>{
        console.log(res.data)
        this.setState({
          datos: res.data
        })
    }).catch(err=>{
      console.log(err.massage)
    })
  } // Obtener información de la cuenta
  //Fin get

  //Petición put para modificar los datos de la cuenta
  componentDidMount(){
    axios.put(``, { id_estudiante: this.state.id_estudiante })
      .then(res =>{
        console.log(res.data)
        this.setState({
          datos: res.data
        })
    }).catch(err=>{
      console.log(err.massage)
    })
  } // Modificar información de la cuenta
  //Fin put 

  render() {
    return (
      <>
        <p>Esta es la parte de estudiantes para configurar su cuenta.</p>
      </>
    );
  }
}

export default withRouter(Estudiantes_configuracion);