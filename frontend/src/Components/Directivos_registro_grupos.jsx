/* eslint-disable eqeqeq */
/* eslint-disable no-array-constructor */
import React from "react";
import axios from "axios";

import "../Styles/RegistroEstudiantes.css";

import { withRouter, Link, Redirect } from "react-router-dom";

let arry = new Array();
let arry2 = new Array();

const Año = new Date();
const AñoY = Año.getFullYear();
const AñoM = Año.getMonth() + 1;
const AñoD = Año.getDate();
let GradoNum;

class Directivos_registro_grupos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Bool: false,
      form: {
        director_id_maestro: "",
        codigo_grupo: "",
        jornada_grupo: "",
        grado_grupo: "",
        year_grupo: "",
      },
      datos: [],
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

  //Petición get para traer todos los grupos
  componentDidMount() {
    axios
      .get(`http://localhost:4535/grupos/directivos-ver-grupos`)
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
  // Fin get

  //Petición post para agregar nuevos grupos
  post_grupo() {
    axios
      .post(`http://localhost:4535/grupos/directivos-nuevo-grupo`, {
        director_id_maestro: this.state.form.director_id_maestro,
        codigo_grupo: this.state.form.codigo_grupo,
        jornada_grupo: this.state.form.jornada_grupo,
        grado_grupo: this.state.form.grado_grupo,
        year_grupo: this.state.form.year_grupo,
      })
      .then((res) => {
        console.log("Se ha creado un nuevo grupo");
        this.componentDidMount();
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
    const gruposRegistros = this.state.datos;

    return (
      <>
        {/* Formulario */}
        <div id="Form">
          <div id="Form2">
            <div id="Form2_2">
              <div className="Form2_2_2">
                <select className="REInput" id="GradoIn">
                  <option value="0" className="Dis">
                    Grado
                  </option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                </select>
                <select className="REInput" id="GradoIn">
                  <option value="0" className="Dis">
                    Jornada
                  </option>
                  <option value="Mañana">Mañana</option>
                  <option value="Tarde">Tarde</option>
                </select>
                <select className="REInput" id="DirectorNull">
                  <option className="REInput Dis">Director</option>
                  {/* Seleccionar Director */}
                  {gruposRegistros.map((datosT) => {
                    return (
                      <option key={datosT.codigo_grupo}>
                        {datosT.nombres} {datosT.apellidos}
                      </option>
                    );
                  })}
                  {/* Seleccionar Director */}
                </select>
              </div>
            </div>
            <div className="Form2_2_2">
              <input
                onClick={this.Push_}
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
        {/* Fin Formulario */}

        <div id="RegistroEsContainer">
          {/* Filtro */}
          <div className="FiltrosREstudiante">
            <select className="SelectR">
              <option value="0" className="Dis">
                Cod Grupo
              </option>
              {/* Select Codigo Grupo */}
              {gruposRegistros.map((datosT) => {
                return (
                  <option key={datosT.codigo_grupo}>
                    {datosT.codigo_grupo}
                  </option>
                );
              })}
              {/* Fin Select Codigo Grupo */}
            </select>
            <select className="SelectR MinMin">
              <option value="0" className="Dis">
                Grado
              </option>
              <option value="6">Sexto</option>
              <option value="7">Septimo</option>
              <option value="8">Octavo</option>
              <option value="9">Noveno</option>
              <option value="10">Decimo</option>
              <option value="11">Once</option>
            </select>
            <select className="SelectR More">
              <option value="0" className="Dis">
                Director
              </option>

              {/* Select Director */}
              {gruposRegistros.map((datosT) => {
                return (
                  <option key={datosT.codigo_grupo}>
                    {datosT.nombres} {datosT.apellidos}
                  </option>
                );
              })}
              {/* Fin Select Director */}
            </select>
            {/* Cantidad estudiantes */}
            <input
              type="number"
              className="GrupoF Min"
              placeholder="Cant E"
              autoComplete="off"
            />
            {/* Fin Cantidad Estudiantes */}
            <div className="SelectR AñoInsF">
              <p>Estudiantes</p>
            </div>
            <input id="ImgRMas" type="button" onClick={this.form} />
          </div>
          {/* Fin Filtro */}

          {/* Grupos registrados */}
          {gruposRegistros.map((datosT) => {
            return (
              <div id="CardsContainerReEs" key={datosT.codigo_grupo}>
                <div className="FiltrosREstudiante">
                  <div className="SelectR">
                    <p>{datosT.codigo_grupo}</p>
                  </div>
                  <div className="SelectR">
                    <p>{datosT.grado_grupo}</p>
                  </div>
                  <div className="SelectR More">
                    <p>
                      {datosT.nombres} {datosT.apellidos}
                    </p>
                  </div>
                  <div className="Min GrupoF">
                    <p>{datosT.cantidad_estudiantes}</p>
                  </div>
                  <div className="SelectR AñoInsF">
                    <Link
                      to={{
                        pathname: "/directivos/grupos_VerEstudiantes",
                        state: {
                          id_grupo: datosT.id_grupo
                        }
                      }}
                    >
                      <button className="DickBro">Ver Estudiantes</button>
                    </Link>
                  </div>
                  <div className="ImgRMas"></div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default withRouter(Directivos_registro_grupos);
