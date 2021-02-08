import React from "react";
import axios from 'axios';

import "../Styles/Estudiantes_configuracion.css";

import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Estudiantes_configuracion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id_estudiante: this.props.location.state.id_estudiante,
      datos: []
    };
  }

//Petición get para obtener información de la cuenta
  componentDidMount(){
    axios.get(`http://35.185.93.150:4535/persona/${this.state.id_estudiante}`) //Esta peticion está pendiente en el backend
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
    axios.put(`http://35.185.93.150:4535/persona/${this.state.id_estudiante}`) //Esta peticion está pendiente en el backend
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
        <div className="VerEstuGrupContainer-Maestros_ver_estudiantes_grupos">
          <div className="FiltradoEstudiante-Maestros_ver_estudiantes_grupos">
            <div className="FiltrosREstudiante-Maestros_ver_estudiantes_grupos-Registro">
              <div>
                <input
                  type="number"
                  className="SelectR-Maestros_ver_estudiantes_grupos"
                  placeholder="Nombre"
                  autoComplete="off"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="SelectR-Maestros_ver_estudiantes_grupos"
                  placeholder="Apellido"
                  autoComplete="off"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="SelectR-Maestros_ver_estudiantes_grupos"
                  placeholder="Tipo_Doc"
                  autoComplete="off"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="SelectR-Maestros_ver_estudiantes_grupos"
                  placeholder="Num_Doc"
                  autoComplete="off"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="SelectR-Maestros_ver_estudiantes_grupos"
                  placeholder="Sexo"
                  autoComplete="off"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="SelectR-Maestros_ver_estudiantes_grupos"
                  placeholder="Fecha_Nacim"
                  autoComplete="off"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="SelectR-Maestros_ver_estudiantes_grupos"
                  placeholder="Reidencia"
                  autoComplete="off"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="SelectR-Maestros_ver_estudiantes_grupos"
                  placeholder="Ciudad"
                  autoComplete="off"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="SelectR-Maestros_ver_estudiantes_grupos"
                  placeholder="Telefono"
                  autoComplete="off"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="SelectR-Maestros_ver_estudiantes_grupos"
                  placeholder="Celular"
                  autoComplete="off"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="SelectR-Maestros_ver_estudiantes_grupos"
                  placeholder="Correo electronico"
                  autoComplete="off"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="SelectR-Maestros_ver_estudiantes_grupos"
                  placeholder="Foto Perfi"
                  autoComplete="off"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="SelectR-Maestros_ver_estudiantes_grupos"
                  placeholder="PDF Documento"
                  autoComplete="off"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Estudiantes_configuracion);