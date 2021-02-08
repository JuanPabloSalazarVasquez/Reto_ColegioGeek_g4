/* eslint-disable eqeqeq */
/* eslint-disable no-array-constructor */
import React from "react";
import axios from "axios";

import "../Styles/RegistroEstudiantes.css";

import { withRouter, Link, Redirect } from "react-router-dom";

const Año = new Date();
console.log("Año", Año);
const AñoY = Año.getFullYear();
console.log("AñoY", AñoY);
const AñoM = Año.getMonth() + 1;
console.log("AñoM", AñoM);
const AñoD = Año.getDate();
console.log("AñoD", AñoD);

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
        year_grupo: AñoY,
      },
      datos: [],
      datos_maestros: [],
      datos_grado: [],
      datos_materias: [],
      form_materia: {
        id_materia: "",
        id_grupo: "",
        id_maestro: "",
      },
    };
  }
  /*
    El codigo_grupo se genera automaticamente en la petición post del backend 
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

  form2 = () => {
    document.getElementById("RegistroEsContainer").style.filter = "blur(1px)";
    document.getElementById("FormAgregarMateria").style.display = "flex";
    document.getElementById("FormAgregarMateria").style.zIndex = "60";
  };

  Cambio2 = () => {
    document.getElementById("FormAgregarMateria").style.display = "none";
    document.getElementById("RegistroEsContainer").style.filter = "blur(0)";
  };

  //Petición get para obtener las materias existentes
  get_materias() {
    axios
      .get(`http://localhost:4535/materias/directivos-ver-all-materias`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          datos_materias: res.data,
        });
      })
      .catch((err) => {
        console.log(err.massage);
      });
  }
  //Fin get

  //Petición get para traer todos los grupos
  componentDidMount() {
    axios
      .get(`http://localhost:4535/grupos/directivos-ver-grupos`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          datos: res.data,
        });
        this.get_materias();
      })
      .catch((err) => {
        console.log(err.massage);
      });
  }
  // Fin get

  //Petición get para traer todos los grupos
  componentWillMount() {
    axios
      .get(
        `http://localhost:4535/maestro/directivos-ver-maestros-directores-registro-grupo`
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
  // Fin get

  //Petición post para agregar un nuevo registro en la tabla de grupos_materias
  post_agregar_materia = async () => {
    console.log("Formulario de agregar materia", this.state.form_materia);
    await axios
      .post(
        `http://localhost:4535/grupos-materias/nuevo-registro-grupos-materias`,
        this.state.form_materia
      )
      .then((res) => {
        console.log("Se ha creado una nueva materia");
        this.componentDidMount();
      })
      .catch((err) => {
        console.log(err.massage);
      });
  };

  //Petición post para agregar nuevos grupos
  post_grupo = async () => {
    console.log(this.state.datos.length);
    console.log("datos_grado", this.state.datos_grado.length);
    if (this.state.form.grado_grupo == "6") {
      await axios
        .post(`http://localhost:4535/grupos/directivos-nuevo-grupo`, {
          director_id_maestro: this.state.form.director_id_maestro,
          codigo_grupo: `${
            AñoY + "06" + "0" + (this.state.datos_grado.length += 1)
          }`,
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
    } else if (this.state.form.grado_grupo == "7") {
      await axios
        .post(`http://localhost:4535/grupos/directivos-nuevo-grupo`, {
          director_id_maestro: this.state.form.director_id_maestro,
          codigo_grupo: `${
            AñoY + "07" + "0" + (this.state.datos_grado.length += 1)
          }`,
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
    } else if (this.state.form.grado_grupo == "8") {
      await axios
        .post(`http://localhost:4535/grupos/directivos-nuevo-grupo`, {
          director_id_maestro: this.state.form.director_id_maestro,
          codigo_grupo: `${
            AñoY + "08" + "0" + (this.state.datos_grado.length += 1)
          }`,
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
    } else if (this.state.form.grado_grupo == "9") {
      await axios
        .post(`http://localhost:4535/grupos/directivos-nuevo-grupo`, {
          director_id_maestro: this.state.form.director_id_maestro,
          codigo_grupo: `${
            AñoY + "09" + "0" + (this.state.datos_grado.length += 1)
          }`,
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
    } else if (this.state.form.grado_grupo == "10") {
      await axios
        .post(`http://localhost:4535/grupos/directivos-nuevo-grupo`, {
          director_id_maestro: this.state.form.director_id_maestro,
          codigo_grupo: `${
            AñoY + "10" + "0" + (this.state.datos_grado.length += 1)
          }`,
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
    } else if (this.state.form.grado_grupo == "11") {
      await axios
        .post(`http://localhost:4535/grupos/directivos-nuevo-grupo`, {
          director_id_maestro: this.state.form.director_id_maestro,
          codigo_grupo: `${
            AñoY + "11" + "0" + (this.state.datos_grado.length += 1)
          }`,
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
  };
  //Fin post

  //Petición get para traer todos los grupos
  get_grado = async () => {
    await axios
      .get(
        `http://localhost:4535/grupos/directivos-ver-grupos-grados/${this.state.form.grado_grupo}`
      )
      .then((res) => {
        console.log(res.data);
        this.setState({
          datos_grado: res.data,
        });
        this.post_grupo();
      })
      .catch((err) => {
        console.log(err.massage);
      });
  };
  // Fin get

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

  handleChange_materia = async (e) => {
    e.persist();
    await this.setState({
      form_materia: {
        ...this.state.form_materia,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form_materia);
  };

  render() {
    console.log(this.state.datos);
    const gruposRegistros = this.state.datos;
    console.log(this.state.datos_maestros);
    const maestrosDirectores = this.state.datos_maestros;
    const materiasRegistro = this.state.datos_materias;

    return (
      <>
        {/* Formulario */}
        <div id="Form">
          <div id="Form2">
            <div id="Form2_2">
              <div className="Form2_2_2">
                <select
                  className="REInput"
                  id="GradoIn"
                  onChange={this.handleChange}
                  name="grado_grupo"
                >
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
                <select
                  className="REInput"
                  id="GradoIn"
                  onChange={this.handleChange}
                  name="jornada_grupo"
                >
                  <option value="0" className="Dis">
                    Jornada
                  </option>
                  <option value="Mañana">Mañana</option>
                  <option value="Tarde">Tarde</option>
                </select>
                <select
                  className="REInput"
                  id="DirectorNull"
                  onChange={this.handleChange}
                  name="director_id_maestro"
                >
                  <option className="REInput Dis">Director</option>
                  {/* Seleccionar Director */}
                  {maestrosDirectores.map((datosT) => {
                    return (
                      <option
                        key={datosT.numero_documento}
                        value={datosT.id_maestro}
                      >
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
                onClick={this.get_grado}
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

        {/* Formulario Agregar Materia */}
        <div id="FormAgregarMateria">
          <div id="Form2">
            <div id="Form2_2">
              <div className="Form2_2_2">
                <select
                  className="REInput"
                  id="GradoIn"
                  onChange={this.handleChange_materia}
                  name="id_materia"
                >
                  <option value="0" className="Dis">
                    Materia
                  </option>
                  {materiasRegistro.map((datosT) => {
                    return (
                      <option value={datosT.id_materia}>
                        {datosT.nombre_materia}
                      </option>
                    );
                  })}
                </select>
                <select
                  className="REInput"
                  id="GradoIn"
                  onChange={this.handleChange_materia}
                  name="id_grupo"
                >
                  <option value="0" className="Dis">
                    Grupo
                  </option>
                  {gruposRegistros.map((datosT) => {
                    return (
                      <option value={datosT.id_grupo}>
                        {datosT.codigo_grupo}
                      </option>
                    );
                  })}
                </select>
                <select
                  className="REInput"
                  id="DirectorNull"
                  onChange={this.handleChange_materia}
                  name="id_maestro"
                >
                  <option className="REInput Dis">Maestro</option>
                  {/* Seleccionar Director */}
                  {maestrosDirectores.map((datosT) => {
                    return (
                      <option
                        key={datosT.numero_documento}
                        value={datosT.id_maestro}
                      >
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
                onClick={this.post_agregar_materia}
                className="REInput"
                type="button"
                value="Agregar"
              />

              <input
                type="button"
                onClick={this.Cambio2}
                className="REInput"
                value="Cancelar"
              />
            </div>
          </div>
        </div>
        {/* Fin Formulario Agregar Materia */}

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
                          id_grupo: datosT.id_grupo,
                        },
                      }}
                    >
                      <button className="DickBro">Ver Estudiantes</button>
                    </Link>
                  </div>
                  <div className="ImgRMas"></div>
                  <div>
                    <button className="DickBro" onClick={this.form2}>
                      Agregar materia
                    </button>
                  </div>
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
