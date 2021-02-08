import React, { useState, useEffect } from 'react';
import "../sass/Directivos.scss";
import Axios from 'axios';
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
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

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

const identificacion = [
  { value: 'Cedula', label: 'CC', },
  { value: 'Tarjeta de identidad', label: 'TI', }
];

const genero = [
  { value: 'Mujer', label: 'Mujer', },
  { value: 'Hombre', label: 'Hombre', }
];

const tipoUsuario = [
  { value: 'Directivo', label: 'Directivo', },
  { value: 'Maestro', label: 'Maestro', },
  { value: 'Estudiante', label: 'Estudiante', }
];

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function DirectivosConfiguracion() {
  const classes = useStyles();

  const [currency, setCurrency] = useState('Cedula');
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // De forma similar a componentDidMount y componentDidUpdate
  const db = `https://api-fake-procrastin-app.vercel.app/users`;

  const [data, setData] = useState(
    { name: '', lastname: '' }
  );
  const handleInputChange = (event) => {
    // console.log(event.target.name)
    console.log(event.target.value)
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('enviando datos...' + data.name + ' ' + data.lastname);
  };

  useEffect(() => {
    async function peticionGet() {
      // You can await here
      const response = await fetch(db);
      const remoteData = await response.json(data);
      setData(remoteData);
      console.log(remoteData[1].id);
      console.log(remoteData[1].name);
      console.log(remoteData[1].lastname);
      localStorage.setItem('id', remoteData[1].id, { path: "/" });
      localStorage.setItem('name', remoteData[1].name, { path: "/" });
      localStorage.setItem('lastname', remoteData[1].lastname, { path: "/" });
      // ...
    }
    peticionGet();

    // const upData = async () => {
    //   const { data } = await Axios.put(`https://jsonplaceholder.typicode.com/`);
    //   console.log(data)
    // }
    // upData();
  }, []);

  // useEffect(() => {
  //   async function fethUser() {
  //     const response = await fetch(url);
  //     const remoteUser = await response.json();
  //     setUser(remoteUser);
  //   }
  //   fethUser();
  // }, []);

  // useEffect(() => {
  //   const upData = async () => {
  //     const { data } = await Axios.put("https://jsonplaceholder.typicode.com/|");
  //     console.log(data)
  //   }
  // }, []);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <Link color="inherit" href="#" onClick={handleClick}>Colegio Geek</Link>
          <Link color="inherit" href="#" onClick={handleClick}>Directivos</Link>
          <Typography color="textPrimary">Configuración</Typography>
        </Breadcrumbs>
        {/* <Paper className={classes.paper}>
          <code>{JSON.stringify(data)}</code>
        </Paper> */}

        <Paper className={classes.paper} className="form">
          <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <Container className="img-perfil">
              <Avatar alt="Imagen de perfil" src="https://img.icons8.com/doodle/344/group.png" className={classes.large} />
            </Container>

            <Container className="informacion">
              <TextField
                id="outlined-nombres"
                label="Nombres"
                defaultValue={localStorage.getItem('name')}
                variant="outlined"
                onChange={handleInputChange}
              />

              <TextField
                id="outlined-apellidos"
                label="Apellidos"
                defaultValue={localStorage.getItem('lastname')}
                variant="outlined"
                onChange={handleInputChange}
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
                label="Genero"
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
                  id="fecha-de-nacimiento"
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
                select
                label="Tipo de usuario"
                value={currency}
                onChange={handleChange}
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
              >
                {tipoUsuario.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
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
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Guardar
            </Button>
          </form>
        </Paper>
      </Paper>
    </div>
  );
}