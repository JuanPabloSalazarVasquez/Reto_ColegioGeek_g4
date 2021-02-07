import React from "react";
import axios from "axios";

import "../Styles/RegistroEstudiantes.css";

import { withRouter, Redirect } from "react-router-dom";

class Directivos_registro_maestros extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Bool: false,
      LengE: this.props.LengE + 1,
      form: {
        nombres: '',
        apellidos: '',
        tipo_documento: '',
        numero_documento: '',
        sexo: '',
        fecha_nacimiento: '',
        direccion_residencial: '',
        ciudad_residencial: '',
        telefono_residencial: '',
        telefono_celular: '',
        correo_electronico: '',
        foto_perfil: '',
        pdf_documento: '',
      }
    };
  }
  /*
    El codigo de maestro, el estado de cuenta y el tipo de usuario se generan automaticamente -
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

  //Petición get para obtener los maestros existentes
  componentDidMount() {
    axios
      .get(
        `http://localhost:4535/maestro/directivos-ver-maestros-materias-directores`
      )
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

  //Petición post para agregar nuevos maestros
  post_maestro() {
    axios
      .post(
        `http://localhost:4535/maestro/directivos-nuevo-maestro-persona`,
        {
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
          foto_perfil: this.state.form.foto_perfil,
          pdf_documento: this.state.form.pdf_documento,
        }
      )
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
  //Fin post

  render() {
    return (
      <>
        <div id="Form">
          <div id="Form2">
            <div id="Form2_21">
              <img
                className="ImgProfile"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png"
              />
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
              <select className="REInput" id="MateriaIn">
                <option value="0" className="Dis" id="MateriaInDis">
                  Materia
                </option>
                <option value="SOC001">SOC001</option>
                <option value="SOC002">SOC002</option>
                <option value="SOC003">SOC003</option>
                <option value="IDM001">IDM001</option>
                <option value="IDM003">IDM003</option>
                <option value="MAT001">MAT001</option>
                <option value="MAT002">MAT002</option>
                <option value="MAT003">MAT003</option>
                <option value="MAT004">MAT004</option>
                <option value="EDF001">EDF001</option>
              </select>
              <input
                onClick={this.Push_}
                className="REInput"
                type="button"
                value="Agregar"
              />
              {this.state.Bool && (
                <Redirect
                  to={{
                    pathname: "/directivos/registro_Maestros",
                  }}
                ></Redirect>
              )}
              <input
                type="button"
                onClick={this.Cambio}
                className="REInput"
                value="Cancelar"
              />
            </div>
          </div>
        </div>

        <div id="RegistroEsContainer">
          <div className="FiltrosREstudiante">
            <input
              type="number"
              className="SelectR"
              placeholder="Cédula"
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
              <option value="0" className="Dis">
                Materia
              </option>
              <option value="SOC001">SOC001</option>
              <option value="SOC002">SOC002</option>
              <option value="SOC003">SOC003</option>
              <option value="IDM001">IDM001</option>
              <option value="IDM003">IDM003</option>
              <option value="MAT001">MAT001</option>
              <option value="MAT002">MAT002</option>
              <option value="MAT003">MAT003</option>
              <option value="MAT004">MAT004</option>
              <option value="EDF001">EDF001</option>
            </select>
            <select className="SelectR GrupoF">
              <option value="0" className="Dis">
                Director
              </option>
              <option value={true}>Si</option>
              <option value={false}>No</option>
            </select>
            <select className="SelectR AñoInsF">
              <option value="0" className="Dis">
                Código Grupo
              </option>
              <option>Esito.Grupo_D</option>
              );
            </select>

            <input id="ImgRMas" type="button" onClick={this.form} />
          </div>
          <div id="CardsContainerReEs">
            <div className="FiltrosREstudiante">
              <div className="SelectR">
                <p className="Peque">Esito.Usuario</p>
              </div>
              <div className="SelectR NameF">
                <p className="Peque">Esito.Name Esito.Apellido</p>
              </div>
              <div className="SelectR GradoF">
                <p>Esito.Materia</p>
              </div>
              <div className="SelectR GrupoF">
                <p>Esito.Director</p>
              </div>
              <div className="SelectR AñoInsF">
                <p>Esito.Grupo_D</p>
              </div>
              <div className="ImgRMas"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Directivos_registro_maestros);
