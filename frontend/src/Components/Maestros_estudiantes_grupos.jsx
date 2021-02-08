/* eslint-disable eqeqeq */
/* eslint-disable no-array-constructor */
import React from "react";
import axios from 'axios';

import "../Styles/Maestros_estudiantes_grupos.css";

import { withRouter, Link, Redirect } from "react-router-dom";

class Maestros_estudiantes_grupos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id_maestro: JSON.parse(sessionStorage.getItem('id_maestro')),
      datos: [],
      Bool: false
    };
  }

  // Peticion get para traer todos los grupos en los que el profesor da clase
  componentDidMount() {
    axios.get(`http://34.75.218.172:4535/grupos-estudiantes/maestros-ver-grupos/${this.state.id_maestro.id_maestro}`)
      .then(res => {
        console.log(res.data)
        this.setState({
          datos: res.data
        })
      }).catch(err => {
        console.log(err.massage)
      })
  }
  // Fin peticion get

  verEstudiantes = () =>  {
    this.setState({
      Bool: true
    })
  }

  render() {
    console.log(this.state.datos);
    const gruposMaestro = this.state.datos;

    return (
      <>
        <div className="RegistroEsContainer-Maestros_estudiantes_grupos">
          <div className="Filtros-Maestros_estudiantes_grupos">
            <select className="Select-Maestros_estudiantes_grupos">
              <option value="0" className="Dis-Maestros_estudiantes_grupos">
                Cod Grupo
              </option>
            </select>
            <select className="Select-Maestros_estudiantes_grupos MinMin">
              <option value="0" className="Dis-Maestros_estudiantes_grupos">
                Grado
              </option>
              <option value="Sexto">Sexto</option>
              <option value="Septimo">Septimo</option>
              <option value="Octavo">Octavo</option>
              <option value="Noveno">Noveno</option>
              <option value="Decimo">Decimo</option>
              <option value="Once">Once</option>
            </select>
            <select className="Select-Maestros_estudiantes_grupos More-Maestros_estudiantes_grupos">
              <option value="0" className="Dis-Maestros_estudiantes_grupos">
                Director
              </option>
            </select>
            <input
              type="number"
              className="GrupoF MinMin-Maestros_estudiantes_grupos"
              placeholder="Cantidad"
              autoComplete="off"
            />
          </div>
          
          {gruposMaestro.map((datosT) => {
            return (
              <div className='CardsContainer-Maestros_estudiantes_grupos'>
            <div className="Filtros-Maestros_estudiantes_grupos">
              <div className="Select-Maestros_estudiantes_grupos">
                <p className='p_Texts-Maestros_estudiantes_grupos' key={datosT.codigo_grupo}>{datosT.codigo_grupo}</p>
              </div>
              <div className="Select-Maestros_estudiantes_grupos">
                <p className='p_Texts-Maestros_estudiantes_grupos'>{datosT.grado_grupo}</p>
              </div>
              <div className="Select-Maestros_estudiantes_grupos More-Maestros_estudiantes_grupos">
                <p className='p_Texts-Maestros_estudiantes_grupos'>{datosT.nombres} {datosT.apellidos}</p>
              </div>
              <div className="Min ">
                <p className='p_Texts-Maestros_estudiantes_grupos'>{datosT.nombre_materia}</p>
              </div>
              <div className="Select-Maestros_estudiantes_grupos">
                
                  <button className="DickBro" onClick={this.verEstudiantes}>Ver Estudiantes</button>
                {this.state.Bool && <Redirect to={{
                                    pathname: "/maestros/estudiantes_grupos/ver_estudiantes",
                                    state:{
                                      id_grupo: datosT.id_grupo
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

export default withRouter(Maestros_estudiantes_grupos);
