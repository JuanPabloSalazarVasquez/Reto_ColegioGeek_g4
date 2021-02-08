import React from "react";
import axios from 'axios';

import "../Styles/Maestros_registro_notas.css";

import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Maestros_registro_notas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id_maestro: JSON.parse(sessionStorage.getItem('id_maestro')),
      datos: []
    };
  }

// Peticion get para traer todos los grupos en los que da clase un profesor
componentDidMount(){
  console.log(this.state.id_maestro)
  console.log(this.state.id_maestro.id_maestro)
  axios.get(`http://localhost:4535/grupos-estudiantes/estudiantes-grupo-notas-ver-clases-grupos/${this.state.id_maestro.id_maestro}`)
    .then(res =>{
      console.log(res.data)
      this.setState({
        datos: res.data
      })
  }).catch(err=>{
    console.log(err.massage)
  })
}
// Fin peticion get


  render() {
    console.log(this.state.datos);
    const gruposMaestro = this.state.datos;

    return (
      <>
        <div className='RegistroEsContainer-Maestros_registro_notas'>
          <div className="FiltrosMaestrosRegistroNotas-Maestros_registro_notas">
            <select className="SelectMaestrosRegistroNotas-Maestros_registro_notas">
              <option value="0" className="Dis-Maestros_registro_notas">
                Cod Grupo
              </option>
            </select>
            <select className="SelectMaestrosRegistroNotas-Maestros_registro_notas MinMin-Maestros_registro_notas">
              <option value="0" className="Dis-Maestros_registro_notas">
                Grado
              </option>
              <option value="Sexto">Sexto</option>
              <option value="Septimo">Septimo</option>
              <option value="Octavo">Octavo</option>
              <option value="Noveno">Noveno</option>
              <option value="Decimo">Decimo</option>
              <option value="Once">Once</option>
            </select>
            <select className="SelectMaestrosRegistroNotas-Maestros_registro_notas More-Maestros_registro_notas">
              <option value="0" className="Dis-Maestros_registro_notas">
                Director
              </option>
            </select>
          </div>

          
          {gruposMaestro.map((datosT) => {
            return (
              <div className="CardsContainerMaestrosRegistroNotas-Maestros_registro_notas">
            <div className="FiltrosMaestrosRegistroNotas-Maestros_registro_notas" key={datosT.id_materia}>
              <div className="SelectMaestrosRegistroNotas-Maestros_registro_notas">
                <p>{datosT.codigo_grupo}</p>
              </div>
              <div className="SelectMaestrosRegistroNotas-Maestros_registro_notas">
                <p>{datosT.grado_grupo}</p>
              </div>
              <div className="SelectMaestrosRegistroNotas-Maestros_registro_notas More-Maestros_registro_notas">
                <p>{datosT.nombres} {datosT.apellidos}</p>
              </div>
              <div className="SelectMaestrosRegistroNotas-Maestros_registro_notas More-Maestros_registro_notas">
                <p>{datosT.nombre_materia}</p>
              </div>
              <div className="SelectMaestrosRegistroNotas-Maestros_registro_notas">
                <Link
                  to={{
                    pathname: "/maestros/registrar_notas/grupo_estudiantes",
                    state: {
                      id_grupo: datosT.id_grupo,
                      id_materia: datosT.id_materia
                  }
                  }}
                >
                  <button className="ButtonMaestrosRegistroNotas-Maestros_registro_notas">Ver Estudiantes</button>
                </Link>
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

export default withRouter(Maestros_registro_notas);
