import React from "react";
import axios from "axios";

import { Redirect, withRouter } from "react-router-dom";

class Directivos_registro_materias extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Bool: false,
      form: {
        nombre_materia: '',
        codigo_materia: '',
        sexto: '',
        septimo: '',
        octavo: '',
        noveno: '',
        decimo: '',
        once: ''
      }
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

  //Petición get para obtener las materias existentes
  componentDidMount() {
    axios
      .get(
        `http://localhost:4535/notas/estudiante-ver-notas-materia-estudiante`
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

  //Petición post para agregar nuevas materias
  post_materia() {
    axios
      .post(
        `http://localhost:4535/materias/directivos-nuevo-materia`,
        {
          nombre_materia: this.state.form.nombre_materia,
          codigo_materia: this.state.form.codigo_materia,
          sexto: this.state.form.sexto,
          septimo: this.state.form.septimo,
          octavo: this.state.form.octavo,
          noveno: this.state.form.noveno,
          decimo: this.state.form.decimo,
          once: this.state.form.once
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

  render() {
    return (
      <>
        <div id="Form">
          <div id="Form2">
            <div id="Form2_21">
              <div className="Direc4 CardS ImgProfile">
                <img
                  src="https://cdn0.iconfinder.com/data/icons/education-flat-7/128/07_Note_Book-512.png"
                  alt="Materias"
                  className="icono"
                />
              </div>
            </div>
            <div id="Form2_2">
              <div className="Form2_2_2">
                <input
                  className="REInput"
                  id="CodigoGIn"
                  placeholder="Codigo"
                  autoComplete="off"
                />
                <input
                  className="REInput"
                  id="NombreIn"
                  placeholder="Nombre"
                  autoComplete="off"
                />
                <input
                  className="REInput"
                  id="IntencidadIn"
                  type="number"
                  min="0"
                  placeholder="Intencidad horaria"
                  autoComplete="off"
                />
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
            <div className="Form2_2_2">
              <p className="PChek">
                6: <input type="checkbox" id="Check1" />
              </p>
              <p className="PChek">
                7: <input type="checkbox" id="Check2" />
              </p>
              <p className="PChek">
                8: <input type="checkbox" id="Check3" />
              </p>
              <p className="PChek">
                9: <input type="checkbox" id="Check4" />
              </p>
              <p className="PChek">
                10: <input type="checkbox" id="Check5" />
              </p>
              <p className="PChek">
                11: <input type="checkbox" id="Check6" />
              </p>
            </div>
          </div>
        </div>

        <div id="RegistroEsContainer">
          <div className="FiltrosREstudiante">
            <input
              type="text"
              className="SelectR"
              placeholder="Cod Materia"
              autoComplete="off"
            />
            <input
              type="text"
              className="SelectR"
              placeholder="Nombre"
              autoComplete="off"
            />
            <p className="Chek Sexto">
              6: <input type="checkbox" />
            </p>
            <p className="Chek Septimo">
              7: <input type="checkbox" />
            </p>
            <p className="Chek Octavo">
              8: <input type="checkbox" />
            </p>
            <p className="Chek Noveno">
              9: <input type="checkbox" />
            </p>
            <p className="Chek Decimo">
              10: <input type="checkbox" />
            </p>
            <p className="Chek Once">
              11: <input type="checkbox" />
            </p>

            <input
              type="text"
              className="SelectR  GradoF"
              placeholder="Intencidad"
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
                  pathname: "/directivos/registro_Materias",
                }}
              ></Redirect>
            )}
          </div>
          <div id="CardsContainerReEs">
            <div className="FiltrosREstudiante">
              <div className="SelectR">
                <p>Esito.CodigoM</p>
              </div>
              <div className="SelectR">
                <p className="Peque">Esito.Nombre</p>
              </div>

              <input
                type="checkbox"
                className="Chek Sexto"
                checked="Esito.Sexto"
              />
              <input
                type="checkbox"
                className="Chek Septimo"
                checked="Esito.Septimo"
              />
              <input
                type="checkbox"
                className="Chek Octavo"
                checked="Esito.Octavo"
              />
              <input
                type="checkbox"
                className="Chek Noveno"
                checked="Esito.Noveno"
              />
              <input
                type="checkbox"
                className="Chek Decimo"
                checked="Esito.Decimo"
              />
              <input
                type="checkbox"
                className="Chek Once"
                checked="Esito.Once"
              />

              <div className="SelectR GradoF">
                <p>Esito.Intencidad</p>
              </div>
              <div className="ImgRMas"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Directivos_registro_materias);
