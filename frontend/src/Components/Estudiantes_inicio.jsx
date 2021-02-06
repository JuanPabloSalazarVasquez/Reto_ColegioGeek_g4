import React from "react";
import axios from 'axios';

import "../Styles/Estudiantes_inicio.css";

import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Estudiantes_inicio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: this.props.location.state.datos_user2,
      datos_estudiante: ''
    };
  }

  // Peticion get para traer todos los grupos cursados del estudiante
componentDidMount() {
  axios.get(`http://localhost:4535/estudiantes/estudiantes-inicio-estudiante/${this.state.datos.id_estudiante}`)
    .then(res => {
      console.log(res.data)
      this.setState({
        datos_estudiante: res.data[0]
      })
    }).catch(err => {
      console.log(err.massage)
    })
}
// Fin peticion get

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
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png"
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
                <Link to="/">
                  <button className="button button2-Estudiantes_inicio">
                    Cerrar sesión
                  </button>
                </Link>
              </div>
            </div>
            <div className="CardsCont-Estudiantes_inicio">
              <div className="Grupo1-Estudiantes_inicio">
                <div>
                  <Link to={{
                    pathname: "/estudiantes/mis_notas",
                    state: {
                      id_estudiante: this.state.datos_estudiante.id_estudiante
                    }
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
