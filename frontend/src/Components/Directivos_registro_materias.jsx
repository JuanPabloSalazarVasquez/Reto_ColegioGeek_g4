import React from "react";
import axios from "axios";

import { Redirect, withRouter } from "react-router-dom";

class Directivos_registro_materias extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Bool: false,
      form: {
        nombre_materia: "",
        codigo_materia: "",
        sexto: "N",
        septimo: "N",
        octavo: "N",
        noveno: "N",
        decimo: "N",
        once: "N",
      },
      datos_materias: [],
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
      .get(`http://35.185.93.150:4535/materias/directivos-ver-all-materias`)
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

  //Petición post para agregar nuevas materias
  post_materia = async () => {
    console.log("Formulario", this.state.form);
    await axios
      .post(
        `http://35.185.93.150:4535/materias/directivos-nueva-materia-crear-materia`,
        this.state.form
      )
      .then((res) => {
        console.log("Se ha creado una nueva materia");
        this.componentDidMount();
      })
      .catch((err) => {
        console.log(err.massage);
      });
  };

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
    console.log(this.state.datos_materias);
    const materiasRegistro = this.state.datos_materias;

    return (
      <>
        {/* Formulario */}
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
                  onChange={this.handleChange}
                  name="codigo_materia"
                />
                <input
                  className="REInput"
                  id="NombreIn"
                  placeholder="Nombre"
                  autoComplete="off"
                  onChange={this.handleChange}
                  name="nombre_materia"
                />
                <input
                  onClick={this.post_materia}
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
                6:{" "}
                <input
                  type="checkbox"
                  id="Check1"
                  onChange={this.handleChange}
                  name="sexto"
                  value="S"
                />
              </p>
              <p className="PChek">
                7:{" "}
                <input
                  type="checkbox"
                  id="Check2"
                  onChange={this.handleChange}
                  name="septimo"
                  value="S"
                />
              </p>
              <p className="PChek">
                8:{" "}
                <input
                  type="checkbox"
                  id="Check3"
                  onChange={this.handleChange}
                  name="octavo"
                  value="S"
                />
              </p>
              <p className="PChek">
                9:{" "}
                <input
                  type="checkbox"
                  id="Check4"
                  onChange={this.handleChange}
                  name="noveno"
                  value="S"
                />
              </p>
              <p className="PChek">
                10:{" "}
                <input
                  type="checkbox"
                  id="Check5"
                  onChange={this.handleChange}
                  name="decimo"
                  value="S"
                />
              </p>
              <p className="PChek">
                11:{" "}
                <input
                  type="checkbox"
                  id="Check6"
                  onChange={this.handleChange}
                  name="once"
                  value="S"
                />
              </p>
            </div>
          </div>
        </div>
        {/* Fin Formulario */}
        <div id="RegistroEsContainer">
          {/* Filtro */}
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
          {/* Fin Filtro */}

          {/* Materias */}
          {materiasRegistro.map((datosT) => {
            return (
              <div id="CardsContainerReEs">
                <div className="FiltrosREstudiante">
                  <div className="SelectR">
                    <p>{datosT.codigo_materia}</p>
                  </div>
                  <div className="SelectR">
                    <p className="Peque">{datosT.nombre_materia}</p>
                  </div>

                  <div className="SelectR">
                    <p className="Peque">{datosT.sexto}</p>
                  </div>

                  <div className="SelectR">
                    <p className="Peque">{datosT.septimo}</p>
                  </div>

                  <div className="SelectR">
                    <p className="Peque">{datosT.octavo}</p>
                  </div>

                  <div className="SelectR">
                    <p className="Peque">{datosT.noveno}</p>
                  </div>

                  <div className="SelectR">
                    <p className="Peque">{datosT.decimo}</p>
                  </div>

                  <div className="SelectR">
                    <p className="Peque">{datosT.once}</p>
                  </div>

                  <div className="ImgRMas"></div>
                </div>
              </div>
            );
          })}
          {/* Fin Materias */}
        </div>
      </>
    );
  }
}

export default withRouter(Directivos_registro_materias);
