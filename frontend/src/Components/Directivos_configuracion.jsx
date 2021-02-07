import React from "react";
import axios from 'axios';

import "../Styles/Maestros_configuracion.css";
import "../sass/Directivos.scss";

import { withRouter } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const identificacion = [
  {
    value: 'Cedula',
    label: 'CC',
  },
  {
    value: 'Tarjeta de identidad',
    label: 'TI',
  }
];

const genero = [
  {
    value: 'Femenino',
    label: 'F',
  },
  {
    value: 'Masculino',
    label: 'M',
  }
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  large: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    margin: 'auto'
  },
  // input: {display: 'none'},
}));

class DirectivosConfiguracion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id_directivo: this.props.location.state.id_estudiante,
      datos: []
    };
  }

  // Peticion get para traer todos los datos de un directivo
  componentDidMount() {
    axios.get(``)
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

  render() {
    console.log(this.state.datos);

    return (
      <>
        <div className="VerEstuGrupContainer-Maestros_ver_estudiantes_grupos" style={{display:'none'}}>
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

        {/* Formulario datos personales */}
        <Container component="main" maxWidth="sm">
          <Typography component="h1" variant="h5">
            Sign up
        </Typography>
        </Container>
      </>
    );
  }
}

export default withRouter(DirectivosConfiguracion);