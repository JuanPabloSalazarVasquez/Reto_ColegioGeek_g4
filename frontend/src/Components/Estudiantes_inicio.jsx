import React from "react";
import axios from 'axios';

import "../Styles/Estudiantes_inicio.css";

import { withRouter } from "react-router-dom";
import { Link, Redirect } from "react-router-dom";

class Estudiantes_inicio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //datos: this.props.location.state.datos_user2,
      datos: JSON.parse(sessionStorage.getItem('id_estudiante')),
      datos_estudiante: '',
      Bool1: false
    };
  }

  // Peticion get para traer todos los grupos cursados del estudiante
componentDidMount() {
  console.log('Este es el id_estudiante en estudiante inicio:',sessionStorage.getItem('id_estudiante'))
  console.log('Esta es datos del estado:',this.state.datos);
  console.log('Esta es datos del estado el id:',this.state.datos.id_estudiante);
  axios.get(`http://35.185.93.150:4535/estudiantes/estudiantes-inicio-estudiante/${this.state.datos.id_estudiante}`)
    .then(res => {
      console.log('res.data del get',res.data)
      this.setState({
        datos_estudiante: res.data[0]
      })
    }).catch(err => {
      console.log(err.massage)
    })
}
// Fin peticion get

logout = () => {
  sessionStorage.clear()
  this.setState({Bool1: true})
}


  render() {
    console.log(this.state.datos)
    console.log(this.state.datos_estudiante.nombres)
    let estudiante = this.state.datos_estudiante;
    return (
      <>
        <div className="DirectivosContainer-Estudiantes_inicio">
          <div className="DirectivosGrid-Estudiantes_inicio">
            <div className="ProfileCont-Estudiantes_inicio">
              <div className="ProfileContainer-Estudiantes_inicio">
                <div>
                  <img
                    className="ImgProfile-Estudiantes_inicio"
                    src={estudiante.foto_perfil}
                  />
                </div>
                <div className="DatosContainer-Estudiantes_inicio">
                  <p className="Pprofile-Estudiantes_inicio">
                    Bienvenido {estudiante.nombres}
                  </p>
                  <p className="Pprofile-Estudiantes_inicio">
                    Cargo: Estudiante
                  </p>
                </div>
                
                  <button className="button button2-Estudiantes_inicio" onClick={this.logout}>
                    Cerrar sesión
                  </button>
             
                {this.state.Bool1 && (
                  <Redirect
                    to={{
                      pathname: "/"
                    }}
                  ></Redirect>
                )}
              </div>
            </div>
            <div className="CardsCont-Estudiantes_inicio">
              <div className="Grupo1-Estudiantes_inicio">
                <div>
                  <Link to={{
                    pathname: "/estudiantes/mis_notas"
                  }} >
                    <div className="img-direc1-Estudiantes_inicio CardS-Estudiantes_inicio">
                      <img src='https://cdn0.iconfinder.com/data/icons/education-flat-7/128/09_Examination-512.png' alt="Cantidad Estudiantes" className='icono' />
                    </div>
                  </Link>
                  <p className='pIcono'>Ver mis notas</p>
                </div>

                <div>
                  <Link to='/estudiantes/grupo_cursados'>
                    <div className="img-direc2-Estudiantes_inicio CardS-Estudiantes_inicio">
                      <img src='https://cdn0.iconfinder.com/data/icons/education-flat-7/128/14_Certificate-512.png' alt="Cantidad Estudiantes" className='icono' />
                    </div>
                  </Link>
                  <p className='pIcono'>Ver grupos cursados</p>
                </div>
              </div>
              <div className="Grupo2-Estudiantes_inicio">
                <div>
                  <Link to='/estudiantes/mis_consolidados'>
                    <div className="img-direc3-Estudiantes_inicio CardS-Estudiantes_inicio">
                      <img src='https://cdn0.iconfinder.com/data/icons/education-flat-7/128/30_Diagram-512.png' alt="Cantidad Estudiantes" className='icono' />
                    </div>
                  </Link>
                  <p className='pIcono'>Ver consolidados</p>
                </div>

                <div>
                  <Link to='/estudiantes/mi_cuenta'>
                    <div className="img-direc4-Estudiantes_inicio CardS-Estudiantes_inicio">
                      <img src='https://cdn0.iconfinder.com/data/icons/education-flat-7/128/02_Pen-512.png' alt="Cantidad Estudiantes" className='icono' />
                    </div>
                  </Link>
                  <p className='pIcono'>Configuracion de mi cuenta</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Estudiantes_inicio);
