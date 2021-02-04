import React, { useState, useEffect } from 'react';
import "../sass/Directivos.scss";
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import { TimePicker, DatePicker, DateTimePicker } from 'formik-material-ui-pickers';

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

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function EstudiantesConfiguracion() {
  const classes = useStyles();
  const [currency, setCurrency] = useState('Cedula');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // De forma similar a componentDidMount y componentDidUpdate
  // let [user, setUser] = useState([]);
  // const url = 'https://jsonplaceholder.typicode.com/users'
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then(response => setUsers(response.data));
  // }, []);
  // useEffect(() => {
  //   async function fethUser() {
  //     const response = await fetch(url);
  //     const remoteUser = await response.json();
  //     setUser(remoteUser);
  //   }
  //   fethUser();
  // }, []);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <Link color="inherit" href="#" onClick={handleClick}>Colegio Geek</Link>
          <Link color="inherit" href="#" onClick={handleClick}>Estudiantes</Link>
          <Typography color="textPrimary">Configuración</Typography>
        </Breadcrumbs>
        {/* <Paper className={classes.paper}>
          <code>{JSON.stringify(user)}</code>
        </Paper> */}

        <Paper className={classes.paper} className="form">
          <form className={classes.root} noValidate autoComplete="off">
            <Container className="img-perfil">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
            </Container>

            <Container className="informacion">
              <TextField
                id="outlined-nombres"
                label="Nombres"
                defaultValue="Maria"
                variant="outlined"
              />

              <TextField
                id="outlined-apellidos"
                label="Apellidos"
                defaultValue="Santos"
                variant="outlined"
              />

              <TextField
                id="outlined-tipo-doc"
                select
                label="Tipo de documento"
                value={currency}
                onChange={handleChange}
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
              >
                {identificacion.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>

              <TextField
                id="outlined-num-doc"
                label="Numero de documento"
                type="number"
                defaultValue="123456789"
                InputProps={{ // solo lectura
                  readOnly: true,
                }}
                variant="outlined"
              />

              <TextField
                id="outlined-genero"
                select
                label="Genro"
                value={currency}
                onChange={handleChange}
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
              >
                {genero.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>

              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  id="date-picker"
                  inputVariant="outlined"
                  label="Fecha de nacimiento"
                  format="dd/MM/yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>

              <TextField
                id="outlined-dir-residencia"
                label="Dirección de residencia"
                defaultValue="Calle 94"
                variant="outlined"
              />

              <TextField
                id="outlined-residencia"
                label="Ciudad de residencia"
                defaultValue="Bello"
                variant="outlined"
              />

              <TextField
                id="outlined-num-tel"
                label="Numero de telefono"
                type="number"
                defaultValue="2127803"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />

              <TextField
                id="outlined-num-cel"
                label="Numero de celular"
                type="number"
                defaultValue="3123004554"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />

              <TextField
                id="outlined-correo"
                label="Correo electronico"
                type="email"
                defaultValue=""
                variant="outlined"
              />

              <TextField
                id="outlined-tipo-usuario"
                label="Tipo de usuario"
                defaultValue=""
                variant="outlined"
              />

              {/* <TextField
                id="icon-img-perfil"
                label={
                  <label htmlFor="icon-button-file">
                    <IconButton color="primary" aria-label="upload picture" component="span" style={{ padding: 0 }} > <PhotoCamera /> </IconButton>
                  </label>
                }
                defaultValue=""
                variant="outlined"
                accept="image/*"
                type="file"
              />

              <TextField
                id="outlined-pdf-doc-usuario"
                label="PDF de documento"
                defaultValue=""
                variant="outlined"
              /> */}
            </Container>

            <Container className="archivo-pdf">
              <label htmlFor="contained-button-pdf">
                <PictureAsPdfIcon />
                {/* <Button variant="contained" color="primary" component="span">PDF Documento</Button> */}
              </label>
              <input
                accept="image/*"
                className={classes.input}
                id="contained-button-pdf"
                multiple
                type="file"
              />
            </Container>

            <Container className="archivo-img">
              <label htmlFor="icon-button-fotoperfil">
                <PhotoCamera />
                {/* <Button variant="contained" color="primary" component="span">Foto de perfil</Button> */}
              </label>
              <input accept="image/*" className={classes.input} id="icon-button-fotoperfil" type="file" />
            </Container>
          </form>
        </Paper>
      </Paper>
    </div>
  );
}