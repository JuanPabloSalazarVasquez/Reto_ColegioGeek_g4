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

  //Petición get para traer todos los grupo
  componentDidMount() {
    axios
      .get(
        `http://localhost:4535/grupos/directivos-ver-grupos/${this.state.id_directivo}`
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
  // Fin get

  //Petición post para agregar nuevos grupos
  post_grupo() {
    axios
      .post(
        `http://localhost:4535/grupos/directivos-nuevo-grupo/${this.state.id_directivo}`,
        {}
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
            <div id="Form2_2">
              <div className="Form2_2_2">
                <select className="REInput" id="GradoIn">
                  <option value="0" className="Dis">
                    Grado
                  </option>
                  <option value="06">Sexto</option>
                  <option value="07">Septimo</option>
                  <option value="08">Octavo</option>
                  <option value="09">Noveno</option>
                  <option value="10">Decimo</option>
                  <option value="11">Once</option>
                </select>
                <select className="REInput" id="DirectorNull">
                  <option className="REInput Dis">Director</option>
                  {arry.map((Esito, index) => {
                    return (
                      <option key={index} value={Esito}>
                        {Esito}
                      </option>
                    );
                  })}
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
              {this.state.Bool && (
                <Redirect
                  to={{
                    pathname: "/directivos/registro_Grupos",
                    state: {},
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
            <select className="SelectR">
              <option value="0" className="Dis">
                Cod Grupo
              </option>

              <option>Esito.CodGrupo</option>
            </select>
            <select className="SelectR MinMin">
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
            <select className="SelectR More">
              <option value="0" className="Dis">
                Director
              </option>
              {arry2.map((Esito, index) => {
                return <option key={index}>{Esito}</option>;
              })}
            </select>
            <input
              type="number"
              className="GrupoF Min"
              placeholder="Cant E"
              autoComplete="off"
            />
            <div className="SelectR AñoInsF">
              <p>Estudiantes</p>
            </div>
            <input id="ImgRMas" type="button" onClick={this.form} />
          </div>
          <div id="CardsContainerReEs">
            <div className="FiltrosREstudiante">
              <div className="SelectR">
                <p>Esito.CodGrupo</p>
              </div>
              <div className="SelectR">
                <p>Esito.Grado</p>
              </div>
              <div className="SelectR More">
                <p>Esito.Director</p>
              </div>
              <div className="Min GrupoF">
                <p>Esito.CEstudiantes</p>
              </div>
              <div className="SelectR AñoInsF">
                <Link
                  to={{
                    pathname: "/directivos/grupos_VerEstudiantes",
                    state: {},
                  }}
                >
                  <button className="DickBro">Ver Estudiantes</button>
                </Link>
              </div>
              <div className="ImgRMas"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Directivos_registro_grupos);
