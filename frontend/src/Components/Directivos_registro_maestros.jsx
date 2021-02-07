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
        nombres: "",
        apellidos: "",
        numero_documento: "",
        telefono_residencial: "",
        telefono_celular: "",
        correo_electronico: "",
        direccion_residencial: "",
      },
      datos_maestros: [],
    };
  }

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
          datos_maestros: res.data,
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
      .post(`http://localhost:4535/maestro/directivos-nuevo-maestro-persona`, {
        nombres: this.state.form.nombres,
        apellidos: this.state.form.apellidos,
        edad: this.state.form.edad, //esto falta en el backend
        numero_documento: this.state.form.numero_documento,
        telefono_residencial: this.state.form.telefono_residencial,
        telefono_celular: this.state.form.telefono_celular,
        correo_electronico: this.state.form.correo_electronico,
        direccion_residencial: this.state.form.direccion_residencial,
        estado_civil: this.state.form.estado_civil, //esto falta en el backend
        materia: this.state.form.materia, //esto falta en el backend
      })
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
    console.log(this.state.datos_maestros);
    const maestrosRegistro = this.state.datos_maestros;

    return (
      <>
        <div id="Form">
          {/* Formulario */}
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
                  placeholder="Nombre"
                  autoComplete="off"
                />
                <input
                  className="REInput"
                  id="ApellidoIn"
                  placeholder="Apellido"
                  autoComplete="off"
                />
                <input
                  className="REInput"
                  id="EdadIn"
                  placeholder="Edad"
                  type="number"
                  autoComplete="off"
                />
                <input
                  className="REInput"
                  id="DocumentoIn"
                  type="number"
                  placeholder="Documento de identidad"
                  autoComplete="off"
                />
              </div>
            </div>
            <div id="Form2_2">
              <div className="Form2_2_2">
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
              <select className="REInput" id="EstadoIn">
                <option value="0" className="Dis" id="EstadoCivDis">
                  Estado civil
                </option>
                <option value="Soltero">Soltero</option>
                <option value="Casado">Casado</option>
              </select>
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
          {/* Formulario */}
        </div>

        <div id="RegistroEsContainer">
          {/* Filtro */}
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
          {/* Fin Filtro */}

          {/* Maestros */}
          {maestrosRegistro.map((datosT) => {
            return (
              <div id="CardsContainerReEs">
                <div className="FiltrosREstudiante">
                  <div className="SelectR">
                    <p className="Peque">{datosT.numero_documento}</p>
                  </div>
                  <div className="SelectR NameF">
                    <p className="Peque">
                      {datosT.nombres} {datosT.apellidos}
                    </p>
                  </div>
                  <div className="SelectR GradoF">
                    <p>{datosT.codigo_materia}</p>
                  </div>
                  <div className="SelectR GrupoF">
                    <p>{datosT.codigo_grupo}</p>
                  </div>
                  <div className="ImgRMas"></div>
                </div>
              </div>
            );
          })}
          {/* Fin Maestros */}
        </div>
      </>
    );
  }
}

export default withRouter(Directivos_registro_maestros);
