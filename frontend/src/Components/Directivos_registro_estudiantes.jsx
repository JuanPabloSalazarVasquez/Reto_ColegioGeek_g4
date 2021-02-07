import React from "react";
import axios from "axios";

import "../Styles/RegistroEstudiantes.css";

import { withRouter, Redirect } from "react-router-dom";

const Año = new Date();
const AñoY = Año.getFullYear();
const AñoM = Año.getMonth() + 1;
const AñoD = Año.getDate();


class Directivos_registro_estudiantes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Bool: false,
      datos: [],
      form: {
          nombres: 'Eliana',
          apellidos: 'Cristina Munoz',
          tipo_documento: 'Tarjeta de identidad',
          numero_documento: '21792896',
          sexo: 'Mujer',
          fecha_nacimiento: '2005-07-02',
          direccion_residencial: 'Carrera 66 # 52 Sur 60',
          ciudad_residencial: 'Medellin',
          telefono_residencial: '4187277',
          telefono_celular: '3187604293',
          correo_electronico: 'elianacristin56@gmail.com',
          estado_cuenta: 'Activa',
          foto_perfil: 'https://img.europapress.es/fotoweb/fotonoticia_20200221191003_420.jpg',
          pdf_documento: 'https://img.europapress.es/fotoweb/fotonoticia_20200221191003_420.jpg',
          tipo_usuario: 'Estudiante',
          codigo_estudiante: '',
          estado_estudiante: 'Estudiando'
      },
    };
  }
  /*
      El codigo de estudiante, el estado de cuenta, el tipo de usuario se generan automaticamente -
      - en la petición post del backend 
  */

  form = () => {
    document.getElementById("RegistroEsContainer").style.filter = "blur(1px)";
    document.getElementById("Form").style.display = "flex";
    document.getElementById("Form").style.zIndex = "60";
  };

  Cambio = () => {
    document.getElementById("Form").style.display = "none";
    document.getElementById("RegistroEsContainer").style.filter = "blur(0)";
  };

  //Petición get para obtener los estudiantes existentes
  componentDidMount() {
    axios
      .get(`http://localhost:4535/estudiantes/directivos-all-estudiantes`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          datos: res.data,
        });
      })
      .catch((err) => {
        console.log(err.massage);
      });
  }
  //Fin get

  //Petición post para agregar nuevos estudiantes
  post_estudiante = async() => {
    await axios
        .post(`http://localhost:4535/estudiantes/directivos-nuevo-estudiante-persona`, {
          nombres: this.state.form.nombres,
          apellidos: this.state.form.apellidos,
          tipo_documento: this.state.form.tipo_documento,
          numero_documento: this.state.form.numero_documento,
          sexo: this.state.form.sexo,
          fecha_nacimiento: this.state.form.fecha_nacimiento,
          direccion_residencial: this.state.form.direccion_residencial,
          ciudad_residencial: this.state.form.ciudad_residencial,
          telefono_residencial: this.state.form.telefono_residencial,
          telefono_celular: this.state.form.telefono_celular,
          correo_electronico: this.state.form.correo_electronico,
          estado_cuenta: this.state.form.estado_cuenta,
          foto_perfil: this.state.form.foto_perfil,
          pdf_documento: this.state.form.pdf_documento,
          tipo_usuario: this.state.form.tipo_usuario,
          codigo_estudiante: `${AñoY + "06" + "00" + (this.state.datos.length += 1)}`,
          estado_estudiante: this.state.form.estado_estudiante
        })
        .then((res) => {
          console.log("Se ha creado un nuevo estudiante");
          this.componentDidMount();
          this.post_email();
        })
        .catch((err) => {
          console.log(err.massage);
        });
  }
  //Fin post

  //Petición post para enviar un correo al nuevo usuario
  post_email = async() => {
    await axios
      .post(`http://localhost:4535/send`, {
        to: this.state.form.correo_electronico,
        subject:"Bienvenido a Colegio Geek",
        full_name: `${this.state.form.nombres + " " + this.state.form.apellidos}`
      })
      .then((res) => {
        console.log(res.data);
        this.setState({
          datos: res.data
        });
      })
      .catch((err) => {
        console.log(err.massage);
      });
  }
  //Fin post

  handleChange = async (e) => {
    e.persist();
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form);
  };

  render() {
    console.log(this.state.datos);
    const estudiantesRegistro = this.state.datos;
    return (
      <>
        <div id="Form">
          <div id="Form2">
            <div id="Form2_21">
              <img className="ImgProfile" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png" />
            </div>
            <div id="Form2_2">
              <div className="Form2_2_2">
                <input
                  className="REInput"
                  id="NombreIn"
                  placeholder="Nombres"
                  autoComplete="off"
                />
                <input
                  className="REInput"
                  id="ApellidoIn"
                  placeholder="Apellidos"
                  autoComplete="off"
                />
                <select className="REInput" id="Tipo_documentoIn">
                  <option value="0" className="Dis" id="TipoDocDis">
                    Tipo de documento de identidad
                  </option>
                  <option value="Cedula">Cédula de ciudadanía</option>
                  <option value="Tarjeta">Tarjeta de identidad</option>
                </select>
                <input
                  className="REInput"
                  id="DocumentoIn"
                  type="number"
                  placeholder="Documento de identidad"
                  autoComplete="off"
                />
                <select className="REInput" id="SexoIn">
                  <option value="0" className="Dis" id="SexoDis">
                    Sexo
                  </option>
                  <option value="Hombre">Hombre</option>
                  <option value="Mujer">Mujer</option>
                </select>
                <input
                  className="REInput"
                  id="Fecha_nacimientoIn"
                  placeholder="Fecha de nacimiento"
                  type="date"
                  autoComplete="off"
                />
              </div>
            </div>
            <div id="Form2_2">
              <div className="Form2_2_2">
                <input
                  className="REInput"
                  id="DirIn"
                  placeholder="Direccion de recidencia"
                  autoComplete="off"
                />
                <input
                  className="REInput"
                  id="CiudadIn"
                  type="text"
                  placeholder="Ciudad de recidencia"
                  autoComplete="off"
                />
                <input
                  className="REInput"
                  id="TelefIn"
                  placeholder="Teléfono Fijo"
                  type="number"
                  autoComplete="off"
                />
                <input
                  className="REInput"
                  id="CelularIn"
                  placeholder="Celular"
                  type="number"
                  autoComplete="off"
                />
                <input
                  className="REInput"
                  id="CorreoIn"
                  type="text"
                  placeholder="Correo electronico"
                  autoComplete="off"
                />
                <input
                  className="REInput"
                  id="DirIn"
                  type="text"
                  placeholder="Direccion"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="Form2_2_2">
              <div>
                <img src="https://img.icons8.com/carbon-copy/2x/camera--v2.png" alt="Profile img" className="inline" style={{ height: 3 + "vw", marginLeft: 0 }} />
                <p className="inline">Foto de perfil</p>
              </div>
              <input
                accept="image/*"
                id="contained-button-pdf"
                type="file"
              />

              <div>
                <img src="https://www.iconpacks.net/icons/2/free-pdf-file-icon-2614-thumb.png" alt="PDF" className="inline" style={{ height: 3 + "vw", marginLeft: 0 }} />
                <p className="inline">Documento de identidad</p>
              </div>
              <input
                accept=".pdf"
                id="icon-button-fotoperfil"
                type="file"
              />
              <select className="REInput" id="GradoIn" onChange={this.Cambiar}>
                <option value="0" className="Dis">
                  Grado
                </option>
                <option value="Sexto">Sexto</option>
                <option value="Septimo">Septimo</option>
                <option value="Octavo">Octavo</option>
                <option value="Noveno">Noveno</option>
                <option value="Decimo">Decimo</option>
                <option value="Once">Once</option>
              </select>
              <select className="REInput" id="GrupoIn">
                <option value="0" className="Dis">
                  Grupo
                </option>

                <option value="Esito.CodGrupo">Esito.CodGrupo</option>
              </select>
              <input
                onClick={this.post_estudiante}
                className="REInput"
                type="button"
                value="Agregar"
              />
              <input
                type="button"
                onClick={this.Cambio}
                className="REInput"
                value="Cancelar"
              />
            </div>
          </div>
        </div>
        {/* Formulario */}

        <div id="RegistroEsContainer">
          {/* Filtro*/}
          <div className="FiltrosREstudiante">
            <input
              type="text"
              className="SelectR"
              placeholder="Matricula"
              autoComplete="off"
            />
            <input
              type="text"
              className="SelectR"
              placeholder="Nombre"
              autoComplete="off"
            />
            <input
              type="text"
              className="SelectR"
              placeholder="Apellido"
              autoComplete="off"
            />
            <select className="SelectR GradoF">
              <option value="0">Grados</option>
              <option value="1">Sexto</option>
              <option value="3">Septimo</option>
              <option value="2">Octavo</option>
              <option value="1">Noveno</option>
              <option value="2">Decimo</option>
              <option value="3">Once</option>
            </select>
            <select className="SelectR GrupoF">
              <option value="0">Grupo</option>
              <option value="1">Sexto 1</option>
              <option value="2">Sexto 2</option>
              <option value="3">Septimo 1</option>
              <option value="1">Septimo 2</option>
              <option value="2">Octavo 1</option>
              <option value="3">Octavo 2</option>
              <option value="1">Noveno 1</option>
              <option value="2">Noveno 2</option>
              <option value="2">Decimo 1</option>
              <option value="3">Decimo 2</option>
              <option value="3">Once 1</option>
              <option value="1">Once 2</option>
            </select>
            <input
              type="text"
              className="SelectR AñoInsF"
              placeholder="Año Inscripción"
              autoComplete="off"
            />

            <input
              id="ImgRMas"
              type="button"
              autoComplete="off"
              onClick={this.form}
            />
            {this.state.Bool && (
              <Redirect
                to={{
                  pathname: "/Directivos/Registro_Estudiantes",
                  state: {},
                }}
              ></Redirect>
            )}
          </div>
          {/* Fin Filtro */}
          {/* Estudiantes */}
          {estudiantesRegistro.map((datosT) => {
            return (
              <div id="CardsContainerReEs">
                <div className="FiltrosREstudiante">
                  <div className="SelectR">
                    <p>{datosT.codigo_estudiante}</p>
                  </div>
                  <div className="SelectR NameF">
                    <p className="Peque">{datosT.nombres} {datosT.apellidos}</p>
                  </div>
                  <div className="SelectR GradoF">
                    <p>{datosT.grado_grupo}</p>
                  </div>
                  <div className="SelectR GrupoF">
                    <p>{datosT.codigo_grupo}</p>
                  </div>
                  <div className="SelectR AñoInsF">
                    <p>{datosT.year_grupo}</p>
                  </div>
                  <div className="ImgRMas"></div>
                </div>
              </div>
            );
          })}
          {/* Fin Estudiantes */}
        </div>
      </>
    );
  }
}

export default withRouter(Directivos_registro_estudiantes);
