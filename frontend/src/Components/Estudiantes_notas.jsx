import React from "react";
import axios from 'axios';

import "../Styles/Estudiantes_notas.css";

import { withRouter } from "react-router-dom";
import { Link, Redirect } from "react-router-dom";

class Estudiantes_notas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id_estudiante: 1,
      datos: [],
      Bool: false
    };
  }

// Peticion get para traer todas las materias a la que esta registrado un estudiante
componentDidMount(){
  axios.get(`http://localhost:4535/notas/materias-estudiante/${this.state.id_estudiante}`)
    .then(res =>{
      console.log(res.data)
      this.setState({
        datos: res.data
      })
  }).catch(err=>{
    console.log(err.massage)
  })
}

componentDidMount(){
  axios.get(``, { id_estudiante: this.state.id_estudiante, codigo_materia: this.state.codigo_materia})
    .then(res =>{
      console.log(res.data)
      this.setState({
        datos: res.data
      })
  }).catch(err=>{
    console.log(err.massage)
  })
} //Filtro por codigo de materia

componentDidMount(){
  axios.get(``, { id_estudiante: this.state.id_estudiante, grado: this.state.grado})
    .then(res =>{
      console.log(res.data)
      this.setState({
        datos: res.data
      })
  }).catch(err=>{
    console.log(err.massage)
  })
} //Filtro por grado

componentDidMount(){
  axios.get(``, { id_estudiante: this.state.id_estudiante, profesor: this.state.profesor})
    .then(res =>{
      console.log(res.data)
      this.setState({
        datos: res.data
      })
  }).catch(err=>{
    console.log(err.massage)
  })
} //Filtro por profesor
// Fin peticion get

Ingresar = () => {
  if(this.state.Bool == false){
    this.setState({
      Bool:true
    })
  }else{
    this.setState({
      Bool: false
    })
  }
}

  render() {
    console.log(this.state.datos);
    const materiasEstudiante = this.state.datos;

    return (
      <>
        <div className="RegistroEsContainer-Estudiantes_notas">
          <div className="FiltrosNotasEstudiantes-Estudiantes_notas">
            <select className="SelectNotas-Estudiantes_notas More-Estudiantes_notas">
              <option value="0" className="Dis-Estudiantes_notas">
                Codigo Materia
              </option>
            </select>
            <select className="SelectNotas-Estudiantes_notas MinMin-Estudiantes_notas">
              <option value="0" className="Dis-Estudiantes_notas">
                Grado
              </option>
              <option value="Sexto">Sexto</option>
              <option value="Septimo">Septimo</option>
              <option value="Octavo">Octavo</option>
              <option value="Noveno">Noveno</option>
              <option value="Decimo">Decimo</option>
              <option value="Once">Once</option>
            </select>
            <select className="SelectNotas-Estudiantes_notas More-Estudiantes_notas">
              <option value="0" className="Dis-Estudiantes_notas">
                Profesor
              </option>
            </select>
          </div>
         
          {materiasEstudiante.map((datosT) => {
            return (
              <div className='CardsContainerEstudiantes_Notas-Estudiantes_notas'>
            <div className="FiltrosREstudiante">
              <div className="SelectNotas-Estudiantes_notas">
                <p className="pTextos-Estudiantes_notas">{datosT.codigo_materia}</p>
              </div>
              <div className="SelectNotas-Estudiantes_notas">
                <p className="pTextos-Estudiantes_notas">{datosT.nombre_materia}</p>
              </div>
              <div className="SelectNotas-Estudiantes_notas">
                <p className="pTextos-Estudiantes_notas">{datosT.grado_grupo}</p>
              </div>
              <div className="SelectNotas-Estudiantes_notas More-Estudiantes_notas">
                <p className="pTextos-Estudiantes_notas">{datosT.nombres} {datosT.apellidos}</p>
              </div>
              <div className="SelectNotas-Estudiantes_notas">
                  <button className="ButtonNotas-Estudiantes_notas" onClick={this.Ingresar}>Ver notas</button>
                {this.state.Bool && <Redirect to={{
                                    pathname: "/estudiantes/mis_notas/ver_notas",
                                    state: {
                                        id_estudiante: this.state.id_estudiante,
                                        id_materia: datosT.id_materia,
                                    }
                                }} />}
              </div>
            </div>
          </div>
            )
          })}
          
        </div>
      </>
    );
  }
}

export default withRouter(Estudiantes_notas);
